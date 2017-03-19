(function (ls, $) {
    function _checkAndGetStore(type) {
        var typeStore = localStorage[type];
        if (!typeStore) {
            typeStore = JSON.stringify([]);
            localStorage[type] = typeStore;
        }

        return typeStore;
    }

    function save(type, data) {
        var store = _checkAndGetStore(type);
        store.push(data);
    }

    ls.repo = {};
    ls.repo.save = save;
}(ls, $));
