import React, { useState, useEffect } from "react";
import { fetchData } from "../data";
import "../styles/frontPage.css";
import { Pagination } from "react-bootstrap";

function FrontPage({ selectedOption }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);

  useEffect(() => {
    var url = "https://newsapi.org/v2/";
    if (selectedOption === "home") {
      url +=
        "everything?q=mixed&from=2023-06-11&sortBy=publishedAt&apiKey=89c85b603c3040179a34adcf3ce234d4";
    }
    if (selectedOption === "latest") {
      url +=
        "top-headlines?category=sports&from=2023-06-11&sortBy=publishedAt&apiKey=89c85b603c3040179a34adcf3ce234d4";
    }
    if (selectedOption === "tech") {
      url +=
        "everything?q=tech&from=2023-06-11&sortBy=publishedAt&apiKey=89c85b603c3040179a34adcf3ce234d4";
    }
    if (selectedOption === "sports") {
      url +=
        "everything?q=sports&from=2023-06-11&sortBy=publishedAt&apiKey=89c85b603c3040179a34adcf3ce234d4";
    }

    fetchData({ url: url }).then((data) => {
      setData(data);
    });
    console.log(data);
  }, [selectedOption]);

  const getDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  // Calculate the indexes of the first and last news articles to display
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = data.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const newsList = currentNews.map((news, index) => (
    <div
      key={index}
      className="card m-2"
      style={{ width: "21rem", padding: "0rem" }}
    >
      {news.urlToImage && (
        <img src={news.urlToImage} className="card-img-top " alt="news" />
      )}

      <div className="card-body">
        <h6 className="mt-2">{news.title}</h6>
        <p className="desc fs-6">{news.content}</p>
        <div className="dd">
          <div className="d-flex">
            <a className="btn btn-primary" href={news.url}>
              READ MORE
            </a>
          </div>
          <hr />
          <div className="m d-flex align-items-center justify-content-between">
            <p className="card-text  text-start">{getDate(news.publishedAt)}</p>
            <a className="web" href={news.url}>
              {news.source.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / newsPerPage);

  return (
    <div className="container justify-content-center d-flex flex-wrap flex-row mt-5">
      <ul className="container justify-content-center d-flex flex-wrap">
        {newsList}
      </ul>
      <Pagination className="mt-4">
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
  );
}

export default FrontPage;
