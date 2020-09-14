// Get the modal1
var modal1 = document.getElementById('id01');
// Get the modal2
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal2, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
    }
}



// storing input from signup-form
function store() {
	var name = document.getElementById('uname');
	var pw = document.getElementById('psw');
	var email = document.getElementById('email');
	
    localStorage.setItem('uname', name.value);
	localStorage.setItem('psw', pw.value);
    localStorage.setItem('email', email.value);
	alert('You are Signed in.');
}

// check if stored data from signup-form is equal to entered data in the signup-form
function check() {

    // stored data from the signup-form
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('psw');

    // entered data from the login-form
    var userName = document.getElementById('username');
    var userPw = document.getElementById('userpsw');

    // check if stored data from signup-form is equal to data from login form
	if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}