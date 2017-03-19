//todo race conditions will come
ls.repo = function (type) {
    this.type = type;

    function _getCollection(type) {
        var stringifyCollection = localStorage[type];
        if (!stringifyCollection) {
            stringifyCollection = JSON.stringify([]);
            localStorage[type] = stringifyCollection;
        }

        return JSON.parse(stringifyCollection);
    }

    function _saveCollection(type, collection) {
        localStorage[type] = JSON.stringify(collection);
    }

    this.save = function (data) {
        var collection = _getCollection(type);
        collection.push(data);
        _saveCollection(type, collection);
    };
};
