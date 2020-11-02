//get current date
var current = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = current.getDate();
var long_day = days[current.getDate()]
var month = months[current.getMonth()];
var year = current.getFullYear();
var hr = current.getHours()
var min = current.getMinutes()
var p_date = long_day + ", " + day + " " + month + " " + year + ", " + hr + ":" + min;
document.getElementById('current_date').innerHTML=p_date;

//when u click the close, it will hide the li
var close = document.getElementsByClassName('close');
for (i=0;i < close.length;i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//if u click on the li, it will do strikethrough
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//adding to the body_list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task_input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Cannot add empty task!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("task_input").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); // the X unicode for multipcation sign
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }