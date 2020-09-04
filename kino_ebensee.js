const CrawlE = require("crawl-e/v0.5.2");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Kino Ebensee",
      address: "Schulgasse 6, 4802 Ebensee",
      website: "https://www.kino-ebensee.at/",
      phone: "0043 6133 6308",
    },
  ],
  showtimes: {
    url: "https://www.kino-ebensee.at/kinoprogramm.html",
    movies: {
      box: ".eventWrap",
      title: ".eventHeader > a",
      showtimes: {
        box: ".spieltermine > li",
        date: {
          selector: ":box",
          mapper: (value) => value.split(" ").slice(0,3).join(' '),
        },
        datetimeFormat: " dd, DD.MM.YY HH:mm",
        datetimeLocale: "de",
        time: {
          selector: ':box',
          mapper: value => value.trim().split(" ").slice(2, -1).join(" ")
        },
        timeFormat: 'HH:mm',
        timeLocale: 'de'
      },
    },
  },
});

crawlE.crawl();
