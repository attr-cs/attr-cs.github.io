const submitButton = document.getElementById("submitButton");
const textInfo = document.getElementById("textInfo");

submitButton.addEventListener("click",function(event){
    event.preventDefault();
})

let data = {};
function onSubmit(){
    
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let comments = document.getElementById("comments");
    let nameValue = name.value;
    let emailValue = email.value;
    let commentsValue = comments.value;
    if(nameValue.trim() === "" || emailValue.trim() === ""){
        textInfo.innerHTML = `<span id="red">Invalid Credentials!</span>`
    }
    else{
        data = {
            name:nameValue,
            email:emailValue,
            comments:commentsValue
        }
        textInfo.innerHTML = `<span id="green">Successfully submitted!</span>`
    }
    name.value = "";
    email.value = "";
    comments.value = "";
}

submitButton.onclick = ()=>{
    onSubmit();
}