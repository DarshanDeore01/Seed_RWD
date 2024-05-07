function validation() {
  var flag = 0;
  var namestring = /(^['A-Za-z']{1,25})$/;
  var user_name = document.getElementById("name").value
  if (user_name == "") {
    document.getElementById("nameError").innerHTML = "Enter Name";
    flag = 1;
  } else if (!user_name.match(namestring)) {
    document.getElementById("nameError").innerHTML =
      "Only Character Data (A-Z,a-z)";
    flag = 1;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  var mobilestring = /(^[6-9]{1}[0-9]{9})$/;

  
  var user_mobile = document.getElementById("mobile").value
  if (user_mobile == "") {
    document.getElementById("mobileError").innerHTML = "Enter Number";
    flag = 1;
  } else if (!user_mobile.match(mobilestring)) {
    document.getElementById("mobileError").innerHTML =
      " First digit from 6-9 and total digits 10";
    flag = 1;
  } else {
    document.getElementById("mobileError").innerHTML = "";
  }

  var f = document.getElementById("gFemale").checked;
  var m = document.getElementById("gMale").checked;
  if (f == false && m == false) {
    document.getElementById("genderError").innerHTML = "Select Gender";
    flag = 1;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  var city = document.getElementById("city").value
  if (city == "") {
    document.getElementById("cityError").innerHTML = "Select City";
    flag = 1;
  } else {
    document.getElementById("cityError").innerHTML = "";
  }

  if (flag == 1) {
    return false;
  }
}
