//Web storage
function Szamlalo() {
  if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  } else {
    sessionStorage.clickcount = 1;
    }
  document.getElementById("sse").innerHTML = sessionStorage.clickcount;
}

//server side events
const s = document.getElementById("sse_eredmeny");
if(typeof(EventSource) !== "undefined") {
  var source = new EventSource("demo_sse.php");
  source.onmessage = function(event) {
    s.innerHTML += event.data + "<br>";
  };
} else {
  s.innerHTML = "Nincsen server-side events támogatás.";
}

//drag and drop API
function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


//Geolocation API
		var g = document.getElementById("geo");
		function getLocation()  {
			if (navigator.geolocation)
				navigator.geolocation.getCurrentPosition(showPosition);
			else 
				g.innerHTML = "A geolokáció nem támogatott a böngésző által";
		}
		function showPosition(position)  {
			g.innerHTML = "Magasság: " + position.coords.latitude + "<br>Hosszúság: " + position.coords.longitude;	
			var newContent = '<iframe src = "https://maps.google.com/maps?q=' + position.coords.latitude + ',' + position.coords.longitude + '&hl=es;z=14&amp;output=embed" width="600" height="450"></iframe>';
			var contentHolder = document.getElementById('content-holder');
			contentHolder.innerHTML = newContent;
		}
		
//Canvas
const canvas = document.getElementById("Canv");
const ctx = canvas.getContext("2d");

// Piros négyzet
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.strokeRect(5, 5, 290, 140);  

// Zöld négyzet
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.strokeRect(30, 30, 50, 50);

// Kék négyzet
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.strokeRect(50, 50, 150, 80);

