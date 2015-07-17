window.onload = function() {  
  var button = document.getElementById('button');
  
  var old = document.getElementById('old');

  var takePhoto = function() {
      var photoUrl = prompt("Please paste a URL to the photo you want to add.", "URL");
    
      var img = document.createElement("img");
      img.src = photoUrl;
      
      var parent = document.getElementById("header");
      parent.replaceChild(img,old);
  };
  
  button.onclick = takePhoto;
};

