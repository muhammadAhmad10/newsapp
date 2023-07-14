import React, { useState, useEffect } from "react";
import { fetchData } from "../data";
import "../styles/frontPage.css";
import { Pagination } from "react-bootstrap";
import Loader from "./Loader";

function FrontPage({ selectedOption }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const [disableButton, setDisableButton] = useState(false);

  const [newsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  //const apiKey = "89c85b603c3040179a34adcf3ce234d4"; //mahmdras21@gmail.com
  const apiKey = "ee2e2fc153ed4eb18c4af8744a6eddce"; //fa20-bcs-027@cuilahore.edu.pk
  //const apiKey = "c9c2023a92284b81b552a02519177eec"; //ahmadcs442@gmail.com

  // useEffect(() => {
  //   console.log("useEffect called");
  //   localStorage.clear();
  // }, []);

  useEffect(() => {
    var url = "https://newsapi.org/v2/";
    if (selectedOption === "home") {
      url += `everything?q=mixed&from=2023-06-12&sortBy=publishedAt&apiKey=${apiKey}`;
    }
    if (selectedOption === "latest") {
      url += `top-headlines?category=sports&from=2023-06-12&sortBy=publishedAt&apiKey=${apiKey}`;
    }
    if (selectedOption === "tech") {
      url += `everything?q=tech&from=2023-06-12&sortBy=publishedAt&apiKey=${apiKey}`;
    }
    if (selectedOption === "sports") {
      url += `everything?q=sports&from=2023-06-12&sortBy=publishedAt&apiKey=${apiKey}`;
    }
    setLoading(true);
    setDisableButton(true);
    fetchData({
      url: url,
      selectedOption: selectedOption,
      reloadData: reloadData,
    })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
        setReloadData(false);

        // if (loading) {
        setTimeout(() => {
          setDisableButton(false);
        }, 10000);
        // }
      });
    setTimeout(() => {
      fetchData({
        url: url,
        selectedOption: selectedOption,
        reloadData: true,
      })
        .then((data) => {
          setData(data);
        })
        .finally(() => {
          setReloadData(false);
          setLoading(false);
        });
    }, 1000000);
  }, [selectedOption, reloadData]);

  const getDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  // Calculate the indexes of the first and last news articles to display on each page
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = data.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const newsList = currentNews.map((news, index) => (
    <div
      key={index}
      className="card m-2"
      style={{ width: "21rem", padding: "0rem" }}
    >
      {news.urlToImage ? (
        <img src={news.urlToImage} className="card-img-top" alt="news" />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/default.jpeg"}
          className="card-img-top"
          alt="news"
        />
      )}

      <div className="card-body">
        <h6 className="mt-2">{news.title}</h6>
        <p className="desc fs-6">{news.content}</p>
        <div className="dd">
          <div className="d-flex">
            <a
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
              href={news.url}
            >
              READ MORE
            </a>
          </div>
          <hr />
          <div className="m d-flex align-items-center justify-content-between">
            <p className="card-text  text-start">{getDate(news.publishedAt)}</p>
            <a className="web" rel="noreferrer" target="_blank" href={news.url}>
              {news.source.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / newsPerPage);

  const currentDate = () => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date().toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="container main justify-content-center position-relative align-items-center d-flex flex-column flex-wrap flex-row mt-4 mb-5">
          <h1>Your briefing</h1>
          {isLogin === "login" ? (
            <button
              disabled={disableButton}
              className="btn btn-primary"
              onClick={() => {
                console.log("starting reload: ", reloadData);
                setReloadData(true);
                console.log("ending reload", reloadData);
              }}
              style={{ position: "absolute", top: "5px", right: "0px" }}
            >
              Reload
            </button>
          ) : null}
          <h5 className="text-secondary">{currentDate()}</h5>
          <ul className="container justify-content-center d-flex flex-wrap mt-4">
            {newsList}
          </ul>
          <Pagination className="mt-4 d-flex justify-content-center">
            <Pagination.Prev
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Prev
            </Pagination.Prev>
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Pagination.Next>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default FrontPage;
