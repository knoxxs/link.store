(function (ls, $) {
    var type = "link";

    ls.service.link = {
        save: function (link) {
            //todo add business logic

            ls.repo.save(type, link);
        },
        remove: function () {

        }
    };
}(ls, $));