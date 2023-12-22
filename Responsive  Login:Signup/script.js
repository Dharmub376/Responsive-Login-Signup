function login() {
  // Implement login logic here
  alert("Login button clicked");
}

function signup() {
  // Implement signup logic here
  alert("Sign Up button clicked");
}

function showSignupForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function continueWithGoogle() {
  // Implement Google login logic here
  alert("Continue with Google button clicked");
}

function continueWithFacebook() {
  // Implement Facebook login logic here
  alert("Continue with Facebook button clicked");
}

// Generate a random profile picture for demonstration purposes
document.getElementById("profile-picture").style.backgroundImage = `url('https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}')`;
