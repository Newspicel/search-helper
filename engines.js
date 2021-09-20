var searchEngines = [
  {
    name: "Search Engines",
    engines: [
      {
        name: "Google",
        url: "https://www.google.com/search?q={0}",
        info: "Google ist eine der bekanntesten Suchmaschienen.",
      },
      {
        name: "Bing",
        url: "https://www.bing.com/search?q={0}",
        info: "Bing ist eine Suchmaschiene von Microsoft.",
      },
      {
        name: "DuckDuckGo",
        url: "https://duckduckgo.com/?q={0}",
        info: "DuckDuckGo search engine",
      },
      {
        name: "Yahoo",
        url: "https://search.yahoo.com/search?p={0}",
        info: "Yahoo search engine",
      },
      {
        name: "Yandex",
        url: "https://www.yandex.com/yandsearch?text={0}",
        info: "Yandex ist eine Russische Suchmaschiene.",
      },
      {
        name: "AOL",
        url: "https://search.aol.com/aol/search?q={0}",
        info: "AOL search engine",
      },
      {
        name: "Ask",
        url: "https://www.ask.com/web?q={0}",
        info: "Ask search engine",
      },
      {
        name: "Baidu",
        url: "https://www.baidu.com/s?wd={0}",
        info: "Baidu ist eine chinesische Suchmaschiene.",
      },
      {
        name: "Excite",
        url: "https://www.excite.com/search?q={0}",
        info: "Excite search engine",
      },
      {
        name: "Lycos",
        url: "https://search.lycos.com/web/?q={0}",
        info: "Lycos search engine",
      },
    ],
  },
  {
    name: "Wikis",
    engines: [
      {
        name: "Wikipedia",
        url: "https://de.wikipedia.org/w/index.php?search={0}&title=Spezial%3ASuche&go=Artikel&ns0=1",
        info: "Wikipedia ist eine freie und kostenlose Enzyklopädie zur Verfügung gestellt von der Wikipedia-GmbH.",
      },
      {
        name: "Wiktionary",
        url: "https://de.wiktionary.org/wiki/{0}",
        info: "Das Wikiwörterbuch ist das deutschsprachige Wiktionary.",
      },
      {
        name: "Wikiquote",
        url: "https://de.wikiquote.org/wiki/{0}",
        info: "Wikiquote ist ein freies Kompendium von Zitaten in allen Sprachen der Welt.",
      },
      {
        name: "Wikisource",
        url: "https://de.wikisource.org/wiki/{0}",
        info: "Wikisource ist eine Sammlung von Texten und Quellen.",
      },
      {
        name: "Wikinews",
        url: "https://de.wikinews.org/wiki/{0}",
        info: "Wikinews ist eine freie Nachrichtenquelle.",
      },
      {
        name: "Wikivoyage",
        url: "https://de.wikivoyage.org/wiki/{0}",
        info: "Wikivoyage verfügt über die größte deutschsprachige Sammlung von freien, unabhängigen, aktuellen und weltweiten Reiseinformationen.",
      },
      {
        name: "Wikispecies",
        url: "https://de.wikispecies.org/wiki/{0}",
        info: "The free species directory that anyone can edit.",
      },
      {
        name: "Wikidata",
        url: "https://www.wikidata.org/wiki/{0}",
        info: "Wikidata ist eine freie und kostenlose Werkzeug zur Verfügung gestellt von der Wikidata-GmbH.",
      },
      {
        name: "Wikibooks",
        url: "https://de.wikibooks.org/wiki/{0}",
        info: "Wikibooks ist eine Sammlung von Leseanweisungen zu allen Themen der Welt.",
      },
      {
        name: "Wikiversity",
        url: "https://de.wikiversity.org/wiki/{0}",
        info: "Wikiversity ist eine Sammlung von freien Lehr- und Lernmaterialien.",
      },
    ],
  },
  {
    name: "News Engines",
    engines: [
      {
        name: "Google News",
        url: "https://news.google.com/news?q={0}",
        info: "Google News ist eine Funktion in der Google Suchmaschiene für Suchen von Nachrichten.",
      },
      {
        name: "DuckDuckGo News",
        url: "https://duckduckgo.com/?q={0}&t=nws&ia=news",
        info: "DuckDuckGo News ist eine Suchmaschiene von DuckDuckGo zum Suchen von Nachrichten.",
      },
      {
        name: "Yahoo News",
        url: "https://search.yahoo.com/news/search?p={0}",
        info: "Yahoo News ist eine Funktion in der Yahoo Suche zur Suche von Nachrichten.",
      },
      {
          name: "Yandex News",
          url: "https://news.yandex.com/search/?text={0}",
          info: "Yandex News ist eine Funktion in der Yandex Suche zur Suche von Nachrichten.",
      }
    ],
  },
  {
    name: "News",
    engines: [
      {
        name: "Tagesschau",
        url: "https://www.tagesschau.de/search/?searchText={0}",
        info: "Die Tagesschau ist eine allgemeine Nachrichtensendung der ARD.",
      },
      {
        name: "Spiegel Online",
        url: "https://www.spiegel.de/suche/?suchbegriff={0}",
        info: "Spiegel Online ist ein Deutsches Nachrichten Portal.",
      },
      {
        name: "Heise Online",
        url: "https://www.heise.de/suche/?q={0}&sort_by=date&rm=search",
        info: "Heise Online ist eine  Nachrichten-Website mit Themenschwerpunkt Informations- und Telekommunikationstechnik.",
      },
      {
        name: "Welt Online",
        url: "https://www.welt.de/search?q={0}",
        info: "Die Welt ist eine überregionale deutsche Tageszeitung der Axel Springer SE.",
      },
      {
        name: "Focus Online",
        url: "https://www.focus.de/suche/?q={0}",
        info: "Focus Online ist eine deutsche Tageszeitung derFocus GmbH.",
      },
      {
        name: "Der Standard",
        url: "https://www.derstandard.at/search?query={0}",
        info: "Der Standard ist eine österreichische Tageszeitung derStandard Online GmbH.",
      },
      {
        name: "Tagesspiegel",
        url: "spiegel.de/suchergebnis/?p=suche&sw={0}",
        info: "Tagesspiegel ist eine deutsche Tageszeitung der Tagesspiegel Online GmbH.",
      },
      {
        name: "Frankfurter Allgemeine",
        url: "https://www.faz.net/suche/?q={0}",
        info: "Frankfurter Allgemeine ist eine deutsche Tageszeitung.",
      },
      {
          name: "Süddeutsche Zeitung",
          url: "https://www.sueddeutsche.de/news?search={0}",
          info: "Süddeutsche Zeitung ist eine deutsche Tageszeitung.",
      },
    ],
  },

  {
    name: "Image Search Engines",
    engines: [
      {
        name: "Google Images",
        url: "https://www.google.com/search?q={0}&tbm=isch",
        info: "Google Images st eine Funktion in der Google Suchmaschiene für Suchen von Bildern.",
      },
      {
        name: "DuckDuckGo Images",
        url: "https://duckduckgo.com/?q={0}&t=img&ia=images",
        info: "DuckDuckGo Images die Suchmaschiene von DuckDuckGo zum Suchen von Bildern.",
      },
      {
        name: "Yahoo! Images",
        url: "https://images.search.yahoo.com/search/images?p={0}",
        info: "Yahoo! Images search engine",
      },
    ],
  },

  {
    name: "Special",
    engines: [
      {
          name: "Medium",
          url: "https://medium.com/search?q={0}",
          info: "Medium is a blog platform for the modern age.",
      },
      {
        name: "Google Maps",
        url: "https://www.google.com/maps/search/{0}",
        info: "Google Maps ist eine Webseite von Google zum Suchen von Orten.",
      },
      {
        name: "Amazon",
        url: "https://www.amazon.de/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords={0}",
        info: "Amazon Shop Suche.",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/results?search_query={0}",
        info: "Youtube ist eine Video Plattform von Google.",
      },
    ],
  },
  {
    name: "Download Pages",
    engines: [
      {
        name: "download.com",
        url: "https://download.cnet.com/s/{0}/",
        info: "download.com ist eine Webseite mit Programmen zum Runterladen.",
      },
      {
        name: "Heise Download",
        url: "https://www.heise.de/download/search?terms={0}",
        info: "Heise Download ist von Heise Online eine Webseite zum Downloaden von Programmen.",
      },
    ],
  },

  {
    name: "Speical Search Engines",
    engines: [
      {
        name: "Blinde Kuh",
        url: "https://www.blinde-kuh.de/bksearch.cgi?smart=0&query={0}",
        info: "Blinde Kuh ist eine Suchmaschiene für Kinder.",
      },
      {
        name: "Klug Suchen!",
        url: "http://www.klug-suchen.de/cgi-bin/search.cgi?query={0}",
        info: "Klug Suchen ist eine Metasuchmaschiene.",
      },
      {
        name: "Jesus.de",
        url: "https://www.jesus.de/?s={0}",
        info: "Jesus.de ist eine Suchemaschiene über glauben und die Biebel.",
      },
      {
        name: "LifeLine",
        url: "https://www.lifeline.de/search/?q={0}",
        info: "LifeLine search engine",
      },
      {
        name: "Paperball",
        url: "https://paperball.news/srp/public/?q={0}&l=de",
        info: "Paperball search engine",
      },
      {
        name: "Spielfim.de",
        url: "https://www.spielfilm.de/suche.html?q={0}",
        info: "Spielfim.de ist eine Webseite mit Informationen über Spielfilme.",
      },
      {
        name: "Cinema.de",
        url: "https://www.cinema.de/suche?query={0}",
        info: "Cinema.de ist eine Webseite mit Informationen über Filme.",
      },
    ],
  },
  {
    name: "Social Media",
    engines: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/search/top/?q={0}",
        info: "Facebook ist eine Social Media Plattform.",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/search?q={0}",
        info: "Twitter ist eine Social Media Plattform.",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/explore/tags/{0}",
        info: "Instagram ist eine Social Media Plattform.",
      },
    ],
  },
];