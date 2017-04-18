// Give random quote every 20 secs
setInterval(function(){ randomQuotes(); }, 20000);

// Random number
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Fill out the HTML with quotes
function randomQuotes() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  var quotes = [
        "Setting goals is the first step in turning the invisible into the visible. <br><br>-Tony Robbins",
        "Set your goals high, and don't stop till you get there. <br><br>-Bo Jackson",
        "Without continual growth and progress, such words as improvement, achievement, and success have no meaning. <br><br>-Benjamin Frankllin",
        "If you can dream it, you can do it. <br><br>-Walt Disney",
        "If you fell down yesterday, stand up today. <br><br>-H. G. Wells",
        "Believe you can and you're halfway there. <br><br>-Theodore Roosevelt",
        "Put your heart, mind, and soul into even your smallest acts. This is the secret of success. <br><br>-Swami Sivananda",
        "Believe you can and you're halfway there. <br><br>Theodore Roosevelt",
        "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. <br><br>-Buddha",
        "If opportunity doesn't knock, build a door. <br><br>-Milton Berle",
        "What we think, we become. <br><br>Buddha"
      ];
  document.getElementById("quotes").innerHTML = t;
  document.getElementById("quotes").innerHTML = quotes[getRandom(0, 9)];
}
