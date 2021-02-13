//make connection
const socket = io.connect("/");

const mssg = document.getElementById("message");
const handel = document.getElementById("text");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const sc = document.getElementById("a");

const nameofuser = prompt("Enter Your Name To Participate");

btn.addEventListener("click", function () {
  if (mssg.value) {
    socket.emit("chat", {
      message: mssg.value,
      handel: nameofuser,
    });
    sc.scrollIntoView();
  } else {
    alert("please Fill Message and Handel Name please 😀");
  }
});

//listen event
socket.on("chat", function (data) {
  output.innerHTML +=
    "<p class='alert alert-dark border border-dark'><b>" +
    data.handel +
    ":👉 </b>" +
    data.message +
    "</p>";
  sc.scrollIntoView();
});
