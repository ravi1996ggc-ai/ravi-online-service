// ==============================
// Ravi Online Service
// Part 3 - JavaScript
// ==============================

// Welcome Message
window.onload = function () {
    setTimeout(function () {
        alert("🙏 Welcome to Ravi Online Service");
    }, 1000);
};

// Live Date & Time
function updateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    let date = now.toLocaleDateString("en-IN", options);
    let time = now.toLocaleTimeString("en-IN");

    let box = document.getElementById("datetime");

    if (box) {
        box.innerHTML = "📅 " + date + "<br>🕒 " + time;
    }
}

setInterval(updateTime, 1000);

// Button Animation
document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (btn) {

        btn.addEventListener("click", function () {

            btn.innerHTML = "✅ Please Wait...";

            btn.style.background = "#00ff00";

            setTimeout(function () {
                btn.innerHTML = "🚀 Get Started";
                btn.style.background = "#00e676";
            }, 2000);

        });

    });

});

// Service Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseover",function(){

        card.style.transform="scale(1.08)";
        card.style.transition="0.4s";

    });

    card.addEventListener("mouseout",function(){

        card.style.transform="scale(1)";

    });

});

// Console Message
console.log("Ravi Online Service Loaded Successfully");.logout-btn{
display:block;
width:250px;
margin:40px auto;
padding:15px;
text-align:center;
text-decoration:none;
font-size:22px;
font-weight:bold;
color:#fff;
border-radius:50px;
background:linear-gradient(45deg,#ff0000,#ff7300,#ffeb3b,#00e676,#00b0ff,#7c4dff);
background-size:400% 400%;
animation:rainbow 6s infinite;
box-shadow:0 0 20px rgba(0,0,0,.4);
transition:.4s;
}

.logout-btn:hover{
transform:scale(1.08);
box-shadow:0 0 30px #fff;
}

@keyframes rainbow{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}