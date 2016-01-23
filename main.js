window.onload = function(){
  var myImage = document.querySelector('img');
  myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'me.jpg') {
      myImage.setAttribute ('src','otherme.jpg');
      } else {
        myImage.setAttribute ('src','me.jpg');
      }
  }
}