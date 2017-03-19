chrome.history.onVisited.addListener(function (historyItem) {
    console.log("Visited: " + JSON.stringify(historyItem));
});