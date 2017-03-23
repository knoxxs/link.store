(function (ls, $) {
    var repo = new ls.repo("link");
    var index = _loadOrCreateIndex();

    ls.service.link = {
        save: function (link) {
            _indexDoc(link);

            repo.save(link);
        },
        search: function (query) {
            var ids = [];
            index.search(query, {"url": {"boost": 1}}).forEach(function (resultDoc) {
                ids.push(resultDoc.ref);
            });

            return repo.searchByIds(ids);
        }
    };


    function _indexDoc(link) {
        console.log("indexing: " + JSON.stringify(link));
        index.addDoc(link);
    }

    function _loadOrCreateIndex() {
        console.log("loading or creating index");
        var indexDump = localStorage["index"];
        if (indexDump) {
            console.log("loading index");
            return elasticlunr.Index.load(JSON.parse(indexDump));
        } else {
            console.log("creating index");
            return elasticlunr(function () {
                this.addField('url');
                this.setRef('id');
            });
        }
    }
}(ls, $));