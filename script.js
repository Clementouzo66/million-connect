var darken = document.getElementById("darken");

// Set default theme if not present
if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

// Apply theme on page load
if (localData === "light") {
    document.body.classList.remove("darks");
    darken.classList.toggle("active"); 
} else {
    darken.classList.add("active");
    document.body.classList.add("darks");
}


function toggledark() {
    document.body.classList.toggle("darks");
    darken.classList.toggle("active");
    if (document.body.classList.contains("darks")) {
        localStorage.setItem("theme", "dark");
    } else {
        darken.classList.remove("active");
        localStorage.setItem("theme", "light");
    }
}
document.getElementById("signup-form").addEventListener("submit", functionevent);
{
    event.preventDefault(); // Prevent default form submission
}
    // Check if reCAPTCHA is completed
    let recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert("Please complete the reCAPTCHA verification.");
        return;
    }
function storeUserData(){
    const name= document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const password=document.getElementById("password").value;


    //Store data in local storage
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    localStorage.setItem("password",password);

    document.getElementById("submit").addEventListener("click",storeUserData);

    alert("signup successfull");
    window.location.href="home.html"

}

//Retrieve data from local storage
function loadUserData(){
    const name=localStorage.getItem("name");
    const email=localStorage.getItem("email");
    const phone=localStorage.getItem("phone");
    const password=localStorage.getItem("password");

    document.getElementById("name").innerText=name;
    document.getElementById("email").innerText=email;
    document.getElementById("phone").innerText=phone;
    document.getElementById("password").innerText=password;

    document.getElementById("submitted").addEventListener("click",loadUserData)

    active("login successfull");
    window.location.href="index.html"

}
