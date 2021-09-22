var search = document.getElementById("search");
var language = document.getElementById("language");

search.addEventListener("input", () => {
    searchEngine(search.value, language.value);
});

window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("q");
    var languageParam = params.get("lang");

    if (!languageParam || languageParam.length <= 0) {
        languageParam = "de";
    }
        

    if (searchParam && searchParam.length > 0) {
        search.value = searchParam;
        searchEngine(searchParam, languageParam);
    }
});

function searchEngine(query, language = "de") {

    if (query.startsWith("https://search.newspicel.dev?q=")) {
        query = query.replace("https://search.newspicel.dev?q=", "");
        search.value = query;
    }

    var searchInfo = document.getElementById("search-info");
    var searchResults = document.getElementById("search-results");

    var searchEngines = jsonFileToArray(language);

    searchResults.innerHTML = "";

    if (query.length <= 0) {
        searchInfo.innerHTML = "Type to search"
        return;
    }

    searchInfo.innerText = "Searching for " + query;
    var queryKey = encodeURIComponent(query);

    var searchResult = "";

    searchEngines.forEach(function (searchEngine) {
        var innerSearchResults = "";

        innerSearchResults += "<h3 class='category'>" + searchEngine.name + ":</h3>";

        searchEngine.engines.forEach(function (searchEngineEngine) {
            innerSearchResults += "<li><a target='_blank' href='" + searchEngineEngine.url.replace("{0}", encodeURIComponent(query)) + "'>" + searchEngineEngine.name + " (" + searchEngineEngine.info + ")" + "</a></li>";
        });

        searchResult += "<div class='search-category'>" + innerSearchResults + "</div>";
    });

    searchResults.innerHTML = searchResult;
}

// Json file to javascript array
function jsonFileToArray(fileName) {
    var request = new XMLHttpRequest();
    request.open("GET", "./search-lists/" + fileName + ".json", false);
    request.send(null);
    return JSON.parse(request.responseText);
}