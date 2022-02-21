let validateemail = (inputBox) => {
  var x = inputBox.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert(
      "Please enter a valid e-mail address \n atpostion:" +
        atposition +
        "\n dotposition:" +
        dotposition
    );
    return false;
  }
};

function validationform(myform1) {
  var email = document.forms["myform1"]["email"];

  var password = document.forms["myform1"]["password"];

  if (email.value == "") {
    window.alert("Please enter your email.");
    email.focus();
    return false;
  }

  if (password.value == "") {
    window.alert("Please enter a password.");
    password.focus();
    return false;
  }
}
