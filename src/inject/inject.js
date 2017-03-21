var searchBoxSelector = 'input#lst-ib.gsfi';

var isSearchBoxLoadedCheckInterval = setInterval(bindSearchBoxChange, 100);
function bindSearchBoxChange() {
    var jSearchBox = $(searchBoxSelector);

    if (jSearchBox && jSearchBox.length) {
        clearInterval(isSearchBoxLoadedCheckInterval);

        jSearchBox.bind('change', onSearch);
    }
}

function onSearch() {
    chrome.runtime.sendMessage({"mType": "search_query", "query": this.value});
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.mType === "search_response") {
            console.log("results: " + request.results);
        }
    }
);