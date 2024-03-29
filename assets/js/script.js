const navButton = document.getElementById("navigateButton");
const navigation = document.getElementById("navigation");
let active = false;
navButton.onclick = ()=>{
    navigation.classList.toggle("active");
    active = !active;
    if(active){
        navButton.innerHTML = "<i class='fas fa-times'></i>";
    }
    else{
        navButton.innerHTML = "<i class='fas fa-bars'></i>";
    }
}