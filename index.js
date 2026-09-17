var three_dotes = document.getElementById("three_dot");
var X_dot = document.getElementById("X_dot");
var extra_nav_list_mainBox = document.getElementById("extra_nav_list_mainBox");
var to_delete_nav = extra_nav_list_mainBox.querySelectorAll("a");
var extra_nav_for_phone = document.getElementById("extra_nav_for_phone");
var about = document.getElementById("about");
var project_section = document.getElementById("project_section");
var skills_section = document.getElementById("skills_section");
var Contact_section = document.getElementById("Contact_section");
var theMainTopNavAbout = document.getElementsById("theMainTopNavAbout");
var theMainTopNav = document.getElementById("theMainTopNav");



three_dotes.addEventListener("click", event => {
    three_dotes.style.display = "none";
    X_dot.style.display = "block";
    extra_nav_list_mainBox.style.display = "flex";
    extra_nav_for_phone.style.background = "rgba(255, 255, 255, 0.1)";
});
X_dot.addEventListener("click", event => {
    three_dotes.style.display = "block";
    X_dot.style.display = "none";
    extra_nav_list_mainBox.style.display = "none";
    extra_nav_for_phone.style.background = "linear-gradient(rgba(255, 255, 255, 0.356), rgba(107, 107, 107, 0.356), rgba(97, 30, 30, 0))";
});

to_delete_nav.forEach(el => {
    el.addEventListener("click", event => {
        extra_nav_list_mainBox.style.display = "none";
        three_dotes.style.display = "block";
        X_dot.style.display = "none";
        extra_nav_for_phone.style.background = "linear-gradient(rgba(255, 255, 255, 0.356), rgba(107, 107, 107, 0.356), rgba(97, 30, 30, 0))";
    });
});


theMainTopNavAbout.addEventListener("click", event =>{
    theMainTopNav.style.display = "none";
});