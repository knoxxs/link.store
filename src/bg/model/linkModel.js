ls.model.link = function (id, url, visitCount) {
    if (this instanceof ls.model.link) {
        if (this.id || this.url || this.visitCount) {
            return new ls.model.link(id, url, visitCount);
        } else {
            this.id = id;
            this.url = url;
            this.visitCount = visitCount;
        }
    }
    else {
        return new ls.model.link(id, url, visitCount);
    }
};