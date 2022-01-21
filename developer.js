function openpage(evt, tabname) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function open_form() {
    document.getElementById('open_bugform').style.display = "block";
}

function close(){
    document.getElementById('open_bugform').style.display = "none";
}
function open_formfr() {
    document.getElementById('open_formfr').style.display = "block";
}