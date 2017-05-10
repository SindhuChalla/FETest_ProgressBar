
 /*var cv = [];

var loadJSON = function() {
	request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);
	
	request.onload = function() {
		if(request.status >=200 && request.status <400){
			cv = JSON.parse(request.responseText);
		} else {
			//We reached target server, but it returned an error
		}
	};
	
	request.onerror = function() {
		//There was a connection error of some sort
	};
	request.send();
};*/


function move(increment) {

  var selectedBar = document.getElementById("selectedBar").value
      elem = document.getElementById(selectedBar)
      widthInPercent = ( elem.innerHTML ) ? elem.innerHTML : '0%'
      width = parseFloat(widthInPercent.replace("%", ""))
      newWidth = ( ( width + increment ) < 230 ) ? ( width + increment ) : 230 ;
      if ( newWidth <= 100 && newWidth >= 0 ) {
            elem.style.width = newWidth + '%';
            elem.innerHTML = newWidth + '%';
      }
      else if(newWidth > 100 && newWidth <= 230) {
    	  elem.style.width = "100" + '%';
    	  elem.innerHTML = newWidth + '%';
      }
      
      if ( newWidth >= 100 ) {
      	elem.style.backgroundColor = "#FF0000";
      } else {
      	elem.style.backgroundColor = "#008000";
      }
           
} 


