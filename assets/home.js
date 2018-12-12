var i=0;
var images=$('.slide');
function showImage(){

  $(images[i]).fadeOut(1000, function(){
    if(i==images.length-1){
      i=0;
    }else{
      i++;
        }
    $(images[i]).fadeIn(1000);

  })

}

var timer=setInterval(showImage,3500);
