import React from 'react';
import {Link} from 'react-router';
import Header from './../common/Header';
import CurrentNews from './CurrentNews';


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [
        {
          "status": "ok",
          "source": "abc-news-au",
          "sortBy": "top",
          "articles": [
            {
              "author": null,
              "title": "'Lies, plain and simple': Comey takes aim at Trump in Senate testimony",
              "description": "James Comey accuses the Trump administration of defaming him and the FBI in the aftermath of his abrupt firing by President Donald Trump.",
              "url": "http://www.abc.net.au/news/2017-06-09/fired-fbi-director-james-comey-faces-senate-and-rebuts-trump/8602944",
              "urlToImage": "http://www.abc.net.au/news/image/8603328-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T15:21:02Z"
            },
            {
              "author": null,
              "title": "UK voters give their views at the polling booth",
              "description": "Voters in the United Kingdom give their views after casting their ballots in the general election.",
              "url": "http://www.abc.net.au/news/2017-06-08/vox-pops---polls-open-for-uk-election/8602514",
              "urlToImage": "http://www.abc.net.au/news/image/8602916-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T13:22:35Z"
            },
            {
              "author": null,
              "title": "Vision appears of police confronting London Bridge attackers",
              "description": "Vision of the moment British police officers shot the London Bridge attackers dead appears online.",
              "url": "http://www.abc.net.au/news/2017-06-09/uk-arrests-three-as-footage-of-london-bridge-attack-appears/8602930",
              "urlToImage": "http://www.abc.net.au/news/image/8602934-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T14:37:00Z"
            },
            {
              "author": "http://www.abc.net.au/news/james-maasdorp/167000",
              "title": "Socceroos still in the World Cup hunt as Rogic stunner downs Saudi Arabia",
              "description": "The Socceroos beat Saudi Arabia 3-2 in Adelaide to keep its World Cup 2018 qualifying hopes alive.",
              "url": "http://www.abc.net.au/news/2017-06-08/australia-socceroos-saudi-arabia-world-cup-qualifier/8602680",
              "urlToImage": "http://www.abc.net.au/news/image/8602840-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T12:44:37Z"
            },
            {
              "author": "http://www.abc.net.au/news/andrew-probyn/8259322",
              "title": "Finkel report calls for new clean energy target",
              "description": "Chief scientist Alan Finkel is calling for a new clean energy target that could bring Australia closer to ending a decade of bitterness on climate policy.",
              "url": "http://www.abc.net.au/news/2017-06-08/finkel-report-calls-for-new-clean-energy-target/8601844",
              "urlToImage": "http://www.abc.net.au/news/image/8404996-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T13:50:32Z"
            },
            {
              "author": "http://www.abc.net.au/news/michael-atkin/5778984",
              "title": "Hanson slaps gag order on former party treasurer over covert tapes",
              "description": "One Nation leader Pauline Hanson succeeds in temporarily gagging former party treasurer Ian Nelson from making more secret recordings public.",
              "url": "http://www.abc.net.au/news/2017-06-08/pauline-hanson-court-injunction-to-stop-abc-using-recordings/8599988",
              "urlToImage": "http://www.abc.net.au/news/image/8572384-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T07:23:16Z"
            },
            {
              "author": "http://www.abc.net.au/news/carrington-clarke/8042208",
              "title": "A Chinese financial crisis could also take down Australia",
              "description": "Australia has benefited enormously from China in recent years — but if the world's second-largest economy fails, so will we.",
              "url": "http://www.abc.net.au/news/2017-06-08/china-debt-may-cause-next-australian-financial-crisis/8602086",
              "urlToImage": "http://www.abc.net.au/news/image/6594404-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T09:24:41Z"
            },
            {
              "author": null,
              "title": "Swans just too good for Bulldogs in Sydney",
              "description": "Sydney keeps its AFL season alive with a thumping 46-point win over reigning premiers Western Bulldogs at the SCG.",
              "url": "http://www.abc.net.au/news/2017-06-08/afl-scorecentre-sydney-swans-western-bulldogs/8596408",
              "urlToImage": "http://www.abc.net.au/news/image/8602866-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T12:14:44Z"
            },
            {
              "author": "http://www.abc.net.au/news/lauren-waldhuter/6434464",
              "title": "SA to legislate Gayle's Law after outback nurse's murder",
              "description": "A policy that South Australian nurses not work solo in remote areas is to be legislated in the wake of Gayle Woodford's rape and murder.",
              "url": "http://www.abc.net.au/news/2017-06-08/gayles-law-woodford-murder-prompts-remote-nurse-safety-push/8602662",
              "urlToImage": "http://www.abc.net.au/news/image/7285152-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T10:51:31Z"
            },
            {
              "author": "http://www.abc.net.au/news/stephanie-chalkley-rhoden/5502128",
              "title": "Bolt 'wasn't going to be humiliated' during unprovoked attack",
              "description": "New footage of an attack on Andrew Bolt after a book launch in Melbourne shows a hooded man run at the conservative newspaper and television commentator and throw glitter in his face without provocation.",
              "url": "http://www.abc.net.au/news/2017-06-08/new-footage-of-andrew-bolt-assault/8601374",
              "urlToImage": "http://www.abc.net.au/news/image/8601654-1x1-700x700.jpg",
              "publishedAt": "2017-06-08T08:27:33Z"
            }
          ]
        }
      ],
      sources: [
        {
          "status": "ok",
          "sources": [
            {
              "id": "abc-news-au",
              "name": "ABC News (AU)",
              "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
              "url": "http://www.abc.net.au/news",
              "category": "general",
              "language": "en",
              "country": "au",
              "urlsToLogos": 
                {
                  "small": "",
                  "medium": "",
                  "large": ""
               },
              "sortBysAvailable": [
                  "top"
                ]
            },
            {
              "id": "bbc-news",
              "name": "BBC News",
              "description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
              "url": "http://www.bbc.co.uk/news",
              "category": "general",
              "language": "en",
              "country": "gb",
              "urlsToLogos": {
                "small": "",
                "medium": "",
                "large": ""
              },
              "sortBysAvailable": [
                "top"
              ]
            },
            {
              "id": "associated-press",
              "name": "Associated Press",
              "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
              "url": "https://apnews.com/",
              "category": "general",
              "language": "en",
              "country": "us",
              "urlsToLogos": {
                "small": "",
                "medium": "",
                "large": ""
              },
              "sortBysAvailable": [
                "top"
              ]
            }
          ]
        }
      ],
      mainSource: null
    };
  }

  render(){
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <Header />
        </header>
        <CurrentNews
          articlesURL = { this.articlesURL }
          sourceList = { this.state.sources }
          currentArticles = { this.state.articles }
        />
      </div>
    );
  }
}

export default HomePage;