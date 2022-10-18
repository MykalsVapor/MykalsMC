(function() {
	if (document.documentElement.clientWidth > 1000) {
	var body = document.body,
	header = document.getElementById("top"),
	doc = document.documentElement;
    	window.onscroll = function () {
        header.style.backgroundPosition = "center " + ( 0 - (Math.max(doc.scrollTop, body.scrollTop) / 4) ) + "px";
    	};
	};
}());

function playVideo() {
	document.getElementById('youtube').innerHTML = '<iframe src="https://www.youtube.com/embed/Nzbj9Dbv5Wk?autoplay=1&autohide=1&modestbranding=1&showinfo=0&controls=0&vq=hd720"></iframe>';
}

function copyToClipboard() {
	var aux = document.createElement("input");
	aux.setAttribute("value", "MykalsMC.apexmc.co");
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById('copybutton').innerHTML = 'Copied!';
	document.getElementById('copybutton2').innerHTML = 'Copied!';
}
