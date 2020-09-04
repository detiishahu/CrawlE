const CrawlE = require("crawl-e/v0.5.2");

let crawlE = new CrawlE({
  cinemas: {
    list: {
      url: "http://spotlightcinemas.com/corporate/",
      box: ".dropdown-menu a",
      website: {
        selector: ":box",
        attribute: "href",
        mapper: (value) => value.replace("#", "").replace("/corporate", ""),
      },
    },
    details: {
      url: "http://spotlightcinemas.com:cinema.website:/?page=contact",
      name: {
        selector: ".card-block > span > p:nth-child(3)",
        attribute: "html()",
        mapper: (value) => value.trim().split("<br>")[1].trim(),
      },
      address: {
        selector: ".card-block > span > p:nth-child(3)",
        attribute: "html()",
        mapper: (value) => value.trim().split("<br>")[3].trim(),
      },
      location: "center iframe @src",
    },
  },
  showtimes: {
    url: "http://spotlightcinemas.com:cinema.website:/index.php?date=:date:",
    urlDateFormat: "YYYYMMDD",
    movies: {
      box: ".movie_card",
      title: "h5",
      showtimes: {
        box: ".buy-ticket",
        time: "span",
        timeFormat: 'H:mm',
        timeLocale: 'de'
      },
    },
  },
});
crawlE.crawl();
