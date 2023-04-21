
document.addEventListener("DOMContentLoaded", function () {
    var sidemenu = document.getElementById("sidemenu");
    console.log(sidemenu);
});

function openmenu(){
    sidemenu.style.right = "0px";
    console.log("openmenu");
}

function closemenu(){
    sidemenu.style.right = "-350px";
    console.log("closemenu");
}
