document.querySelectorAll('.image-overlay').forEach(overlay => {
    overlay.addEventListener("click",()=>{
        overlay.classList.add("active");
        overlay.previousElementSibling.classList.add("active");
    })
});
