(function (ls, $) {
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.mType === "search_query") {
                chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                    var activeTab = tabs[0];
                    chrome.tabs.sendMessage(activeTab.id, {
                        "mType": "search_response",
                        "results": ls.service.link.search(request.query)
                    });
                });
            }
        }
    );
}(ls, $));