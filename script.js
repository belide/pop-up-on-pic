debugger;

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);

window.onload = function() {  
 
    
  var button = document.getElementById('button');
  var old="";
  var photoUrl="";
 

  var takePhoto = function() {
      photoUrl = prompt("Please paste a URL to the photo you want to add.", "URL");
      document.getElementById("img").src = photoUrl;
      var h = document.getElementById("img").height;
      var w = document.getElementById("img").width;
      var m = 0.5; //multiplier
      var puw = w*m;
      var puh = h*m-50;
      //document.getElementById("img").style.height="400px";
      //document.getElementById("img").style.width="1000px";
      debugger;
      if(photoUrl != null)
        {
            //for(var i=0;i<h;i+=puh)
            for(var i=0;i<h;i=i+h*m)
            {
            //var name=i;
                //for(var j=0;j<w;j+=puw)
                for(var j=0;j<w;j=j+w*m)
                {
                window.open("https://www.youtube.com/",i+j, "width="+puw+", height="+puh+", screenX="+j+", screenY="+i);
                }
            }
        }
  };
  
  button.onclick = takePhoto;
  
  
 
  //old=photoUrl;
};

