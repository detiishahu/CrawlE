const CrawlE = require("crawl-e/v0.5.2");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Stadtkinowien",
      address: "Siebensterngasse 2/12, 1070 Vienna",
      website: "https://stadtkinowien.at/",
      phone: "+43 1 361 81 81 ",
    },
  ],
  showtimes: {
    url: "https://stadtkinowien.at/stadtkino/kinoprogramm/",
    dates: {
      box: ".schedule-overview",
      date: "strong",
      dateFormat: "DD. MMMM",
      dateLocale: "de",
      movies: {
        box: ".entry",
        title: ".content > h1 > a",
        showtimes: {
          box: "time > strong",
          timeFormat: "HH.mm",
          timeLocale: "de",
        },
      },
    },
  },
});

crawlE.crawl();
