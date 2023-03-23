"use strict";

let navBar = document.getElementById("navBarResponsive");
let xMark = document.getElementById("navXMarkResponsive");

navBar.addEventListener("click",displayMenu);
xMark.addEventListener("click",displayMenu);

function displayMenu() {
    let menuNav = document.getElementById("menuNavResponsive");
    let classMenu = menuNav.classList;

    if (classMenu.contains("hidden")) {
        classMenu.remove("hidden");
    }else{
        classMenu.add("hidden");
    }
}