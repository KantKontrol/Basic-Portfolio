
//functions mangage the content switching
function toAbout() {
    window.location.href = "index.html";
}

function toContact() {
    window.location.href = "contact.html";
}

function toPortfolio() {
    window.location.href = "portfolio.html";
}



//Code that makes button show hover and press, would like to find a more recursive way to do this, looks nasty!
document.getElementById("about").addEventListener("mouseenter", function () {
    document.getElementById("about").style.backgroundColor = "White";
})

document.getElementById("about").addEventListener("mouseleave", function () {
    document.getElementById("about").style.backgroundColor = "#1d1616";
})

document.getElementById("about").addEventListener("mousedown", function () {
    document.getElementById("about").style.backgroundColor = "cyan";
})

document.getElementById("contact").addEventListener("mouseenter", function () {
    document.getElementById("contact").style.backgroundColor = "White";
})

document.getElementById("contact").addEventListener("mouseleave", function () {
    document.getElementById("contact").style.backgroundColor = "#1d1616";
})

document.getElementById("contact").addEventListener("mousedown", function () {
    document.getElementById("contact").style.backgroundColor = "cyan";
})

document.getElementById("portfolio").addEventListener("mouseenter", function () {
    document.getElementById("portfolio").style.backgroundColor = "White";
})

document.getElementById("portfolio").addEventListener("mouseleave", function () {
    document.getElementById("portfolio").style.backgroundColor = "#1d1616";
})

document.getElementById("portfolio").addEventListener("mousedown", function () {
    document.getElementById("portfolio").style.backgroundColor = "cyan";
})

