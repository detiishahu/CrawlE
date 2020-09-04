const CrawlE = require("crawl-e/v0.5.2");

let crawlE = new CrawlE({
    cinemas: {
      list: {
        url: 'https://www.pathe.be/Browsing/Cinemas/',
        box: '.title-wrapper a',
        website: {
            selector: ':box',
            attribute: 'href',
            mapper: value => value.split('').slice(2).join('')
        },
      },
      details:{
        url: 'https://:cinema.website:',
        name: '.boxout-title',
        address: '.contact-address',
        email:{
            selector: '.contact-email > a',
            attribute: 'href',
            mapper: value => value.replace('mailto:', '')
        },
        location: '.map iframe @src'
      }
    },
    showtimes: {
        url: 'https://:cinema.website:',
        movies: {
            box: '.film-item',
            title: '.film-title',
            showtimes:{
                box: '.session ',
                dates:{
                    selector: '.session-time > time',
                    attribute: 'datetime'
                },
                time: '.session-time > time',
                timeFormat: 'HH:mm'
            }
        }
    }
  })
  crawlE.crawl()