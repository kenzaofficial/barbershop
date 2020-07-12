var link =  document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var popup_close = document.querySelector(".modal-content-close");
var password = document.querySelector(".icon-password");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var login = popup.querySelector(".icon-user");
var storage = localStorage.getItem("login");
var map = document.querySelector(".js-open-map");
var popup_map = document.querySelector(".modal-content-map");
var map_close = popup_map.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-content-show");
    if (storage) {login.value = storage;
    password.focus();
    } else {
        login.focus();
    }
});

overlay.addEventListener("click", function() {   
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
}); 

popup_close.addEventListener("click", function(event) { 
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-error"); //как сделать так чтобы при КАЖДОМ нажатии на сабмит и при незаполеных полях срабатывала анимация тряски а не только один раз??
    }  else { 
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener ("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        }
    }
});

map.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.add("modal-content-show");
});

map_close.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup_map.classList.contains("modal-content-show")) {
            popup_map.classList.remove("modal-content-show");
        }
    }
});




