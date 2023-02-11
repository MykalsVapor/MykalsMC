(function() {
	if (document.documentElement.clientWidth > 1000) {
		var body = document.body,
		header = document.getElementById("top"),
		doc = document.documentElement;
	    	window.onscroll = function () {
	        header.style.backgroundPosition = "center " + ( 0 - (Math.max(doc.scrollTop, body.scrollTop) / 4) ) + "px";
	    	};
	}
	else if(document.documentElement.clientWidth < 1000) {
		var body = document.body,
		header = document.getElementById("top"),
		doc = document.documentElement;
		pcnav = document.getElementById("navlist")
		acz = document.getElementById("acz")
		pcnav.remove()
		acz.remove()
		window.onscroll = function () {
			header.style.backgroundPosition = "center " + ( 0 - (Math.max(doc.scrollTop, body.scrollTop) / 2) ) + "px";
			};
	}

}());


function copyToClipboard() {
	var aux = document.createElement("input");
	aux.setAttribute("value", "play.MykalsMC.com");
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById('copybutton').innerHTML = 'Copied!';
	document.getElementById('copybutton2').innerHTML = 'Copied!';
}
