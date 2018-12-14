$(document).ready(function(){

//Read More event
//  $('.down').click(function(){
//    $('section').slideToggle(3000);

//  })

//checkbox event
  $('.checkbox').change(function(e){
    if(e.target.checked){
      console.log(e.target)
      $(e.target).parent().css({'color':'gray','font-style':'italic', 'text-decoration':'line-through'});
    }else{
      $(e.target).parent().css({color:'black', 'font-style':'normal', 'text-decoration':'none'});
    }
  })

/*

$('.down').click(function(){
    $('section').slideDown(3000, function(){
    $('.readmore').text('Read Less');
    $('.down').css({'margin-left': '260px;','margin-top':'5px', 'transform': 'rotate(-135deg)', '-webkit-transform': 'rotate(-135deg)'});
    document.querySelector('.down').classList.add('up');
  })

$('.up').click(function(){
   $('section').slideUp(3000, function(){
     $('.readmore').text('Read More');
     $('.up').css({'margin-left': '260px;','margin-top':'5px', 'transform': 'rotate(45deg)', '-webkit-transform': 'rotate(45deg)'});
     $('.down').removeAttr('up');
   })
})
*/
//read more/less event
$('.down').click(function(){
    $('section').slideDown(3000, function(){
    $('.readmore').text('Read Less');
    $('.down').css({'margin-left': '260px;', 'transform': 'rotate(-135deg)', '-webkit-transform': 'rotate(-135deg)'});
    $('.readmore').click(function(){
      $('section').slideUp(3000, function(){
        $('.readmore').text('Read More');
        $('.down').css({ 'transform': 'rotate(45deg)', '-webkit-transform': 'rotate(45deg)'});
      })
    })
  })
})//end here

  })
