//todo does outer scope needed?
ls.repo = function (type) {
    function _checkAndGetStore(type) {
        var typeStore = localStorage[type];
        if (!typeStore) {
            typeStore = JSON.stringify([]);
            localStorage[type] = typeStore;
        }

        return typeStore;
    }

    this.type = type;
    this.save = function (data) {
        var store = _checkAndGetStore(type);
        store.push(data);
    };
};
