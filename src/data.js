import axios from "axios";

export const fetchData = async ({ url }) => {
  const data = [
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "forbes.com",
      title:
        "Korean Founder Of Little-Known Sneaker Foam Maker Becomes A Billionaire After Jumping Into EV Batteries",
      description:
        "hares of a little-known sneaker foam maker in South Korea have doubled so far this month on the back of strong investor demand for electric vehicle-related stocks like Tesla and Rivian, making its CEO, Ryu Kwang-ji, a billionaire. Ryu, who turned 57 in May, i…",
      url: "https://biztoc.com/x/b31eaed9614da2af",
      urlToImage: "https://c.biztoc.com/p/b31eaed9614da2af/s.webp",
      publishedAt: "2023-07-12T04:40:03Z",
      content:
        "hares of a little-known sneaker foam maker in South Korea have doubled so far this month on the back of strong investor demand for electric vehicle-related stocks like Tesla and Rivian, making its CE… [+290 chars]",
    },
    {
      source: {
        id: null,
        name: "City A.M.",
      },
      author: "Sascha O'Sullivan",
      title:
        "Tech titans? Musk and Zuckerberg’s feud is an ultra-public toddler tantrum",
      description:
        "From threats for a real life fight to launching rival to Twitter, the bizarre blood feud between Mark Zuckerberg and Elon Musk shows how far our entrepreneurs have fallen, writes Josh Williams.",
      url: "https://www.cityam.com/tech-titans-musk-and-zuckerbergs-feud-is-an-ultra-public-toddler-tantrum/",
      urlToImage:
        "https://www.cityam.com/wp-content/uploads/2023/07/city-A.M-49-e1689092109556.jpg",
      publishedAt: "2023-07-12T04:30:00Z",
      content:
        "Wednesday 12 July 2023 5:30 am\r\nBy: \r\nJosh Williams\r\nJosh Williams is deputy director of Labour Together \r\nElon Musk has began training in jujitsu after claiming he would have a fight with Mark Zucke… [+7907 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "forbes.com",
      title:
        "Secret Glass House For Elon Musk? Tesla Reportedly Investigated Millions Of Dollars Of Company-Funded Glass Purchases",
      description:
        "Tesla may have funded a project to build billionaire CEO Elon Musk a glass house in the Austin, Texas, area, which prompted an internal investigation into whether millions of dollars of glass purchases amounted to company misspending, according to the Wall St…",
      url: "https://biztoc.com/x/cf0bfb9f137bfb13",
      urlToImage: "https://c.biztoc.com/p/cf0bfb9f137bfb13/og.webp",
      publishedAt: "2023-07-12T04:18:04Z",
      content:
        "Tesla may have funded a project to build billionaire CEO Elon Musk a glass house in the Austin, Texas, area, which prompted an internal investigation into whether millions of dollars of glass purchas… [+286 chars]",
    },
    {
      source: {
        id: null,
        name: "Marketscreener.com",
      },
      author: "Dow Jones",
      title: "EMEA Morning Briefing: Stocks to Track Higher -2-",
      description:
        "(marketscreener.com) \n The Organization of the Petroleum Exporting Countries' decision to extend its oil output cuts through 2024 and Saudi Arabia's extension of its voluntary cuts through August have led to a reduction in expected near-term oil supplies, the…",
      url: "https://www.marketscreener.com/business-leaders/Elon-Musk-1364/news/EMEA-Morning-Briefing-Stocks-to-Track-Higher-2--44315372/",
      urlToImage:
        "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      publishedAt: "2023-07-12T04:16:12Z",
      content:
        "The Organization of the Petroleum Exporting Countries' decision to extend its oil output cuts through 2024 and Saudi Arabia's extension of its voluntary cuts through August have led to a reduction in… [+3886 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "reuters.com",
      title: "US EV market struggles with price cuts and rising inventories",
      description:
        "[1/5] Workers tend to an unfinished Lordstown Motors Endurance electric pick-up truck on the assembly line at Foxconn's electric vehicle production facility in Lordstown, Ohio, U.S. November 30, 2022. REUTERS/Quinn Glabicki/File Photo DETROIT, July 11 (Reuter…",
      url: "https://biztoc.com/x/17c8fa2d2ae0466f",
      urlToImage: "https://c.biztoc.com/p/17c8fa2d2ae0466f/s.webp",
      publishedAt: "2023-07-12T04:00:07Z",
      content:
        "[1/5] Workers tend to an unfinished Lordstown Motors Endurance electric pick-up truck on the assembly line at Foxconn's electric vehicle production facility in Lordstown, Ohio, U.S. November 30, 2022… [+282 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "John Kang, Forbes Staff, \n John Kang, Forbes Staff\n https://www.forbes.com/sites/johnkang/",
      title:
        "Korean Founder Of Little-Known Sneaker Foam Maker Becomes A Billionaire After Jumping Into EV Batteries",
      description:
        "Shares of Kumyang have doubled so far this month on the back of strong investor demand for electric vehicle-related stocks like Tesla and Rivian, making its CEO, Ryu Kwang-ji, a billionaire.",
      url: "https://www.forbes.com/sites/johnkang/2023/07/12/korean-founder-of-little-known-sneaker-foam-maker-becomes-a-billionaire-after-jumping-into-ev-batteries/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6438b192b0ae007a248508e3/0x0.jpg?format=jpg&width=1200",
      publishedAt: "2023-07-12T04:00:06Z",
      content:
        "Sneakers are displayed on a wall in a shop.\r\nSTEPHANE DE SAKUTIN/AFP via Getty Images\r\nShares of a little-known sneaker foam maker in South Korea have doubled so far this month on the back of strong … [+3618 chars]",
    },
    {
      source: {
        id: null,
        name: "The-sun.com",
      },
      author: "the us sun",
      title: "Zuck taunts Musk with ripped physique!",
      description:
        "META boss Mark Zuckerberg has shown off his ripped physique ahead of a rumored cage fight against Twitter owner Elon Musk. The 39-year-old billionaire CEO and co-founder of Meta Platforms looks fit…",
      url: "https://www.the-sun.com/sport/8578011/mark-zuckerberg-shows-off-ripped-physique/",
      urlToImage:
        "https://www.the-sun.com/wp-content/uploads/sites/6/2023/07/AS_ZUCKERPUNCH_OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2023-07-12T04:00:02Z",
      content:
        "Mark Zuckerberg shows off ripped physique while training with UFC fightersMETA boss Mark Zuckerberg has shown off his ripped physique ahead of a rumored cage fight against Twitter owner Elon Musk.The… [+2688 chars]",
    },
    {
      source: {
        id: null,
        name: "Drive.com.au",
      },
      author: "Drive Team",
      title: "Drive Podcast Season 3 Episode 2 – listen online now!",
      description:
        "As the cost of living continues to rise, a new car can seem out of reach. Trusted Finance Editor, Chris Kohler, gives all the need-to-know information",
      url: "https://www.drive.com.au/news/drive-podcast-season-3-episode-2-listen-online-now/",
      urlToImage:
        "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/nlevk6jjii7jbsv47wl5",
      publishedAt: "2023-07-12T03:54:59Z",
      content:
        "This week, Trent is joined by one of the most trusted voices in finance, Chris Kohler. They discuss the smart way to navigate car loans, why Tesla is more like a tech company than a car company and t… [+73 chars]",
    },
  ];

  try {
    console.log(url);
    const response = await axios.get(url);
    // console.log(response.data.articles);
    // console.log("response is: ", response);
    return response.data.articles;
  } catch (error) {
    console.error(error.message);
    return data;
  }
};
