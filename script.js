// Register User
function register() {

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let city = document.getElementById("city").value.trim();

    if(name=="" || mobile=="" || email=="" || city==""){
        alert("Please fill all details.");
        return;
    }

    // Auto Login ID
    let loginId = "RAVI" + Math.floor(100000 + Math.random()*900000);

    // Auto Password
    let password = Math.random().toString(36).slice(-8).toUpperCase();

    let user = {
        name:name,
        mobile:mobile,
        email:email,
        city:city,
        loginId:loginId,
        password:password,
        wallet:0
    };

    localStorage.setItem(loginId, JSON.stringify(user));

    alert(
        "Registration Successful!\n\n" +
        "Login ID : " + loginId +
        "\nPassword : " + password
    );

    window.location.href="index.html";
}

// Login User
function login(){

    let loginId=document.getElementById("loginId").value.trim();
    let password=document.getElementById("password").value.trim();

    let data=localStorage.getItem(loginId);

    if(data==null){
        alert("Invalid Login ID");
        return;
    }

    let user=JSON.parse(data);

    if(user.password!==password){
        alert("Wrong Password");
        return;
    }

    localStorage.setItem("currentUser",loginId);

    window.location.href="dashboard.html";
}