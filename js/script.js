
// waypoint-js-sticky-menu

$(".js--services-section").waypoint(function(direction){
    if (direction =="down"){
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});

    // MOBILE-MENU
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}