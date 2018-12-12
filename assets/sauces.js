

$(document).ready(function(){
// alert('jQuery loaded');

})


// fade in img
var img=document.querySelector('#seasoning');
function showImg(){
  img.className='show';
}
setTimeout(showImg, 200);






// tab function
var tabs=document.querySelector('#sauceTabs .tabs');
var panels=document.querySelectorAll('div .panel');

tabs.addEventListener('click', function(e){
var value=document.querySelector(e.target.dataset.target);
 panels.forEach(function(panel){
   if(value==panel){
     panel.className+=' active';  // Note: 1.can't replace <dig class='panel'> with <section class='panel'>, value !==e.target. tab tag and panel tag must be the same
                                  //       2.can't use classList.add(). It completely replaces class='panel' and will not remove 'active' when it's not clicked
   }else{
     panel.classList.remove('active');
   }
 })

})
