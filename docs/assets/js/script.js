const navButton = document.getElementById("navigateButton");
const navigation = document.getElementById("navigation");
navButton.onclick = ()=>{
    navigation.classList.toggle("active");
    navButton.classList.toggle("active");
}