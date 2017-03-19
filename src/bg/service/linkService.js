(function (ls, $) {
    var repo = new ls.repo("link");
    ls.service.link = {
        save: function (link) {
            //todo add business logic

            repo.save(link);
        },
        remove: function () {

        }
    };
}(ls, $));