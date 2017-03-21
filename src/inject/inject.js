var searchBoxSelector = 'input#lst-ib.gsfi';

var isSearchBoxLoadedCheckInterval = setInterval(bindSearchBoxChange, 100);
function bindSearchBoxChange() {
    var jSearchBox = $(searchBoxSelector);

    if (jSearchBox && jSearchBox.length) {
        clearInterval(isSearchBoxLoadedCheckInterval);

        jSearchBox.bind('change', onSearch);
    }
}

function onSearch() {
    //console.log("val: " + $(this).val());
    console.log("val: " + this.value);
}