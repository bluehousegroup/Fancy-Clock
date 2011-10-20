function getFancyTime() {
    
	  var currentTime = new Date();
	  var hour = currentTime.getHours();
	  var min = currentTime.getMinutes();
	  
	  if(hour > 12) { hour -= 12; }
	  else if(hour == 0) { hour = 12; }
	  
    if(min >= 35) { hour++; }
    var h = "t"+hour;
    
    var buffer;
    
    switch(true) {
      case (min >= 55):
        buffer = "five to "+h; break;
      case (min >= 50):
        buffer = "ten to "+h; break;
      case (min >= 45):
        buffer = "quarter to "+h; break;
      case (min >= 40):
        buffer = "twenty minutes to "+h; break;
      case (min >= 35):
        buffer = "twenty five minutes to "+h; break;
      case (min >= 30):
        buffer = "half past "+h; break;
      case (min >= 25):
        buffer = "twenty five minutes past "+h; break;
      case (min >= 20):
        buffer = "twenty minutes past "+h; break;
      case (min >= 15):
        buffer = "quarter past "+h; break;
      case (min >= 10): 
        buffer = "ten past "+h; break;
      case (min >= 5):
        buffer = "five past "+h; break;
      case (min < 5):
      	buffer = h + " oclock"; break;
    }
    
    return buffer;
}

$(function() {
    
    var checkTime = function() {
      buffer = getFancyTime();
    	var parts = buffer.split(" ");
  		$('.word').removeClass('active');
  		for(i in parts) { $('.'+parts[i]).addClass('active'); }
    }
	  
	  checkTime();
	  window.setInterval(checkTime, 15000);
})

