/*  $(document).ready(function(){

  var searchBar=document.querySelector('form')
  var row=document.querySelectorAll('.row');

searchBar.addEventListener('keyup', function(){
var value=document.querySelector('input').value.toLowerCase();
  row.forEach(function(dish){
var name=dish.textContent.toLowerCase();
  if(name.indexOf(value)!==-1){
    dish.style.display='block';
  }else{
    dish.style.display='none';
  }

  })
})


}) */




/*
var searchBar=$('form');
var row=document.querySelectorAll('.row');

searchBar.keyup(function(){
var value=$('input').val().toLowerCase();
  row.forEach(function(eachRow){
var dishName=eachRow.querySelector('p').textContent.LowerCase();
  if(dishName.indexOf(value)!==-1){
    eachRow.style.display='initial';
  }else{
    eachRow.style.display='none';
  }
  })


})

*/
// Note 1: I tried jQuery here but it didn't work out, has to use querySelector because we need a node collection to use forEach method. jQuery only return
// all of them as a single string;

// Note 2: Can not use jQuery and querySelector at the same time

// Note 3: MAKE SURE YOU KNOW WHAT YOU want to use the forEach method!! I first used it on each <p class='dishName'> tag, it's wrong!
// Why? Because when we find one item and hide other items, we don't just hide the <p class='dishName'> element, instead, we hide the whole row so this whole
// dish will hide not just texts! You want to grab the whole <div class='row'> and forEach them, and compare the <p class='dishName'> tag text with input value
var searchBar=document.querySelector('form');
var row=document.querySelectorAll('.row');
searchBar.addEventListener('keyup', function(){
  row.forEach(function(Row){
  var value=document.querySelector('input').value.toLowerCase();
  var dishName=Row.querySelector('p').textContent.toLowerCase();
  if(dishName.indexOf(value) !==-1 ){
    Row.style.display='initial';
  }else{
    Row.style.display='none';
  }
  })
})
