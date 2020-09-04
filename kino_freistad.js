const CrawlE = require("crawl-e/v0.5.2");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Kino Freistad",
      address: "Salzgasse 25, A-4240 Freistadt",
      website: "https://www.kino-freistadt.at/",
      phone: "0043 6133 6308",
    },
  ],
  showtimes: {
    url: "https://www.kino-freistadt.at/?site=program&date=:date:",
    urlDateFormat: 'DD-MM-YYYY',
    movies: {
      box: ".dailyProgramColumn",
      title: ".dailyProgramContent > a",
      showtimes: {
        box: ".dailyProgramMovieBox",
        time: '.dailyProgramTime > a',
        timeFormat: 'HH:mm',
        datetimeLocale: "de",
        auditorium: {
          selector: '.dailyProgramInfo'
        }
      },
    },
  },
});

crawlE.crawl();
