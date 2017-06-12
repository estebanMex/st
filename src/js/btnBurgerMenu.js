(function(){
    var menuButton = $('#menu-button')
    , menu = $('#menu')
    , menuList = $('#menu ul')
    , scrollButton = $('.back-to-top');
    var buttonOpen = false, 
    topbar = document.getElementById('top-bar'), 
    middlebar = document.getElementById('middle-bar'), 
    bottombar = document.getElementById('bottom-bar');

    menuButton.on("click", function(e) {
        if (buttonOpen === false) {
            topangle = 0,
            bottomangle = 0,
            opacity = 1;
            function openMenuButton() {
                if (topangle < -45 && bottomangle > 45) {
                    cancelAnimationFrame(requestAnimationFrameID);
                    return;
                } else {
                    topbar.setAttribute("transform", "rotate(" + topangle + " 33 2.5)");
                    bottombar.setAttribute("transform", "rotate(" + bottomangle + " 33 22.6)");
                    topangle -= 7;
                    bottomangle += 7;
                    requestAnimationFrameID = requestAnimationFrame(openMenuButton);
                }
                if (opacity < 0) {
                    cancelAnimationFrame(requestAnimationFrameID);
                    return;
                } else {
                    middlebar.setAttribute("opacity", opacity);
                    opacity -= 0.2;
                }
            }
            var requestAnimationFrameID = requestAnimationFrame(openMenuButton);
            buttonOpen = true;
        } else {
            buttonOpen = false;
            topangle = -45,
            bottomangle = 45,
            opacity = 0;
            function closeMenuButton() {
                if (topangle > 0 && bottomangle < 0) {
                    cancelAnimationFrame(requestAnimationFrameID2);
                    return;
                }
                topbar.setAttribute("transform", "rotate(" + topangle + " 33 2.5)");
                bottombar.setAttribute("transform", "rotate(" + bottomangle + " 33 22.6)");
                middlebar.setAttribute("opacity", opacity);
                topangle += 5;
                bottomangle -= 5;
                opacity += 0.1;
                requestAnimationFrameID2 = requestAnimationFrame(closeMenuButton);
            }
            var requestAnimationFrameID2 = requestAnimationFrame(closeMenuButton);
        }
    });
}($));