function switchForm() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const switchFormText = document.getElementById("switchFormText");
  const registerBtn = document.getElementById("registerBtn");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    switchFormText.innerHTML =
      "Don't have an account? <a href='#' onclick='switchForm()'>Register</a>";
  } 
  else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    switchFormText.innerHTML =
      "Already have an account? <a href='#' onclick='switchForm()'>Login</a>";
  }
}

function validateLogin() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  var loginError = document.getElementById("loginError");
  var loginErrorMessage = document.getElementById("loginErrorMessage");
  var icon = document.getElementById("dangerIcon1");

  if (username.trim() === "" || password.trim() === "") {
      loginErrorMessage.innerHTML = "Please fill in all fields";
      loginError.style.visibility = "visible"; 
    //   loginError.style.backgroundColor = "#ff4848";
    loginError.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; 
      icon.style.visibility = "visible";
    } 
    else if(password.length < 8) {
        loginErrorMessage.innerHTML = "Enter correct password";
        loginError.style.visibility = "visible"; 
        // loginError.style.backgroundColor = "#ff4848";
        loginError.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; 
        icon.style.visibility = "visible";
    }
    else {
      loginErrorMessage.innerHTML = "";
      loginError.style.visibility = "hidden"; 
      loginError.style.backgroundColor = "transparent";
      icon.style.visibility = "hidden";
      alert("Login successful")
      location.reload();
  }
}

function validateRegister() {
    var email = document.getElementById("registerEmail").value;
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;
  
    var registerError = document.getElementById("registerError");
    var registerErrorMessage = document.getElementById("registerErrorMessage");
    var icon = document.getElementById("dangerIcon2");
    
    if (email === "" || username === "" || password === "") {
      registerErrorMessage.innerHTML = "Please fill in all fields";
      registerError.style.visibility = "visible"; 
    //   registerError.style.backgroundColor = "#ff4848";
      registerError.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; 
      icon.style.visibility = "visible";
    } 
    else if(password.length < 8) {
        registerErrorMessage.innerHTML = "Password should be atleast 8 characters long";
        registerError.style.visibility = "visible"; 
        // registerError.style.backgroundColor = "#ff4848";
        registerError.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; 
        icon.style.visibility = "visible";
    }
    else {
        registerErrorMessage.innerHTML = "";
        registerError.style.visibility = "hidden";
        icon.style.visibility = "hidden";
        registerError.style.backgroundColor = "transparent";
        
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        switchFormText.innerHTML =
        "Don't have an account? <a href='#' onclick='switchForm()'>Register</a>";
    }
  }
  
