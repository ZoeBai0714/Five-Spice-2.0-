$(document).ready(function(){

//Read More event
  $('.down').click(function(){
    $('section').slideToggle(3000);

  })

//checkbox event
  $('.checkbox').change(function(e){
    if(e.target.checked){
      console.log(e.target)
      $(e.target).parent().css({'color':'gray','font-style':'italic', 'text-decoration':'line-through'});
    }else{
      $(e.target).parent().css({color:'black', 'font-style':'normal', 'text-decoration':'none'});
    }
  })

})
