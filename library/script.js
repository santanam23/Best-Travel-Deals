function openNav() {
    document.getElementById("myNav").style.height = "100%";

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openSearch() {
    document.getElementById("search").style.height = "100px";
}

function closeSearch() {
    document.getElementById("search").style.height = "0%";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
