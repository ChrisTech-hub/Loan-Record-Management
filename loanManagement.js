const navs = document.querySelectorAll(".nav-list");
const loginButton = document.getElementById("login-button");
const loginCon = document.getElementById("login-container");
const alertNotif = document.getElementById("alertNotif");
const closeLogin = document.getElementById("close-login");
const showPass = document.getElementById("showPass");
const hidePass = document.getElementById("hidePass");

navs.forEach(nav => {
    nav.addEventListener("click", () => {
        navs.forEach(item => item.classList.remove("active"));
        nav.classList.add("active");
    });
});

  let alertCount = false; 

document.addEventListener("click", function(){
  
    if(loginButton.innerHTML === "Log-In" && alertCount === false){

        alertNotif.style.display = "block";
        alertCount = true;
        
        setTimeout(()=> {
            alertNotif.style.display = "none";
        }, 2000);
    }

    if(loginCon.style.display === "none"){
        alertCount = false;
    }
});

loginButton.addEventListener("click", function(){

    if(loginCon.style.display === "none"){
        loginCon.style.display = "block";
    } else{
        loginCon.style.display = "none";
    }
});

showPass.addEventListener("click", function(){ 
    if(password.type === "password"){
        password.type = "text";
        showPass.style.display = "none";
        hidePass.style.display = "block";
    }
});

hidePass.addEventListener("click", function(){ 
    if(password.type === "text"){
        password.type = "password";
        hidePass.style.display = "none";
        showPass.style.display = "block";
    }
});


closeLogin.onclick = () => loginCon.style.display = "none";


function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const verifier = document.getElementById("verifier");

  const loading = ["V", "e", "r", "i", "f", "y", "i", "n", "g", ".", ".", "."];

    verifier.innerHTML = "";

    loading.forEach((letter, index) => {
        setTimeout(() => {
            verifier.style.color = "#000";
            verifier.innerHTML += letter;
        }, index * 100);
    });

    setTimeout(()=>{
        if (username === "admin" && password === "admin123") {

            verifier.innerHTML = "Log-in Successful.."
            verifier.style.color = "#00FF00";
         
            setTimeout(()=>{
                document.body.classList.add("bodytransition");
                window.location.href = "home.html"; 
            }, 1000)
        
        } else {
            verifier.innerHTML = "Invalid Credentials";
            verifier.style.color = "#FF0000";
        }
    }, 2000)
}

function logout() {
     setTimeout(()=>{
        document.body.classList.add("bodytransition");
        window.location.href = "login_loanManagement.html"; 
    }, 800);
}
