function modalWindow() {
    let info = document.querySelector(".info"),
        overlay = document.querySelector(".overlay"),
        body = document.querySelector("body");
    
    let showModal = function() {
        overlay.style.display = "block";
        info.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    };
    let hideModal = function()  {
        overlay.style.display = "none";
        info.classList.remove("more-splash");
        document.body.style.overflow = "";
    };
    body.addEventListener("click", function forEach(elem){ 
    let target = elem.target;
    
    if (target && target.classList.contains("more")) {
        showModal(target);
    }
    if (target && target.classList.contains("popup-close")) {
        hideModal(target);
    }
    if (target && target.classList.contains("description-btn")) {
        showModal(target);
    }
    });
}

module.exports = modalWindow;

