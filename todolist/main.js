
// input : nama elemen, attribut, nilai atribut, isi/value
// output : element baru sesuai input
function createNewElement(elementName, attributeName, attributeValue, text) {
  var newElement = document.createElement(elementName);
  newElement.setAttribute(attributeName, attributeValue);
  var newElementText = document.createTextNode(text);
  newElement.appendChild(newElementText);

  return newElement;
}

// Create a new list item when clicking on the "Add" button
function newList() {
  var inputValue = document.getElementById("myInput").value;
  var li = createNewElement("li", "list-style-type", "none", inputValue);
  if (inputValue === '') {
    alert("You must write something!");
  } else if (inputValue.length > 50) {
    alert("Keep it simple!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = createNewElement("span", "class", "close", "\u00D7");
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  for (var i = 0; i < li.length; i++) {
    li[i].appendChild(span);
  }
}

// Make new list Task
var addTask = document.getElementById('add-task');
addTask.addEventListener('click', newList);

// Close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].addEventListener ('click', function() {
    var div = this.parentNode;
    div.style.display = "none";
  });
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
