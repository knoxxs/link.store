chrome.history.onVisited.addListener(function (historyItem) {
    //create and store link
    ls.service.link.save(new ls.model.link(historyItem.id, historyItem.url, historyItem.visitCount));

    //todo create and store linkVisit
    console.log("Visited: " + JSON.stringify(historyItem));
});