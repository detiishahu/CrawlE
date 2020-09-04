const CrawlE = require("crawl-e/v0.5.2");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Burg Kino",
      address: "Opernring 19, 1010 Vienna, Austria",
      website: "https://www.burgkino.at/showtimes",
      phone: "+43 1 587 8406",
    },
  ],
  showtimes: {
    url: "https://www.burgkino.at/showtimes/this-week",
    movies: {
      box: ".views-row",
      title: "article > div > div > h2",
      dates: {
        box: ".views-element-container",
        date: {
            selector: ".views-field-field-startdatetime time",
            attribute: 'datetime'
        },
        showtimes: {
          box: ".views-field-field-startdatetime-1",
          time: "time",
          timeFormat: "HH:mm",
          auditorium: {
            selector: '.views-field-field-room-name'
          }    
        },
      },  
    },
  },
});

crawlE.crawl();
