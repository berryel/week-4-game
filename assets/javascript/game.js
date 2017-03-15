$( document ).ready(function(){


var compran= Math.floor(Math.random()*101+19)
console.log(compran);

$('#compran').text(compran);

var blue= Math.floor(Math.random()*11+1)
var yellow= Math.floor(Math.random()*11+1)
var green= Math.floor(Math.random()*11+1)
var red= Math.floor(Math.random()*11+1)

var yourScore= 0; 
var yourWins= 0;
var yourLosses = 0;

$('#yourscore').text(yourScore);
$('#yourwins').text(yourWins);
$('#yourlosses').text(yourLosses);

function reset(){
      compran=Math.floor(Math.random()*101+19);
      $('#compran').text(compran);
      blue= Math.floor(Math.random()*11+1);
      console.log(blue);
      yellow= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      red= Math.floor(Math.random()*11+1);
      yourScore= 0;
      
      } 

 function winner(){
alert("You get sprinkles because sprinkles are for winners!");
  yourWins++; 
  $('#yourwins').text(yourWins);
  reset();
  
}

function loser(){
alert ("Better luck next time!");
  yourLosses++;
  $('#yourlosses').text(yourLosses);
  reset();
}


$('#blue').on ('click', function(){
    yourScore = yourScore + blue;
    
    $('#yourscore').text(yourScore); 
          
        if (yourScore == compran){
          winner();
        }
        else if ( yourScore > compran){
          loser();
        } 

        
  })  

$( '#blue' ).click(function() {
  $( '#blue' ).effect( 'shake');
});

$('#yellow').on ('click', function(){
    yourScore = yourScore + yellow;
    $('#yourscore').text(yourScore); 
        if (yourScore == compran){
          winner();
          
        }
        else if ( yourScore > compran){
          loser();
          
        } 
        
  })  
$('#green').on ('click', function(){
    yourScore = yourScore + green;

    $('#yourscore').text(yourScore);

          if (yourScore == compran){
          winner ();
        }
        else if ( yourScore > compran){
          loser();
          
        } 
        
  })  
$('#red').on ('click', function(){
    yourScore = yourScore + red;
    
    $('#yourscore').text(yourScore); 
      
          if (yourScore == compran){
          winner();
        }
        else if ( yourScore > compran){
          loser();
          
        }
        
  })  



});