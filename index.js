const accordion = document.getElementsByClassName("container");
const panel = document.getElementsByClassName('content');

accordion[0].classList.toggle('active');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
        let setClasses = !this.classList.contains('active');
        setClass(accordion, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

$(document).ready(function(){
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $("#popup").toggleClass('shadow');
    });
});




const hamb = document.querySelector("#nav-icon3");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}


