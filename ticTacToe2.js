$(document).on('ready', function(){
  var turn = 0;
  var winningCombos = [["c-1","c-2","c-3"],["c-4","c-5","c-6"], ["c-7","c-8","c-9"], ["c-1","c-4","c-7"], ["c-2","c-5","c-8"], ["c-3","c-6","c-9"], ["c-1","c-5","c-9"], ["c-3","c-5","c-7"]];

  $('td').on('click', function(){
    var self = $(this);

    if(turn % 2 === 0){
      self.html('X').addClass('x');
    }else{
      self.html('O').addClass('o');
    }

    self.off('click');

    checkForWinner();

    turn++;

  });

  var x_class = 'x';
  var o_class = 'o';

  function Wins(Playerclass){
    var count_x = 0;
    for (var i = 0; i < winningCombos.length; i++){
      for(var x= 0; x < winningCombos[i].length; x++){
        if ($('#' + winningCombos[i][x]).attr('class') === Playerclass){
              count_x++
              if(count_x === 3){
                console.log("x is" + count_x);
                alert(Playerclass + " wins");
                if(confirm("Would you like to play again?")){
                  location.reload();
                }
              }
        }
      }
      count_x = 0;
    }
  }

  function checkForWinner(){
    if (turn === 4){
      Wins(x_class);
    }else if(turn === 5){
      Wins(o_class);
    }else if(turn === 6){
      Wins(x_class);
    }else if(turn === 7){
      Wins(o_class);
    }else if(turn === 8){
      alert("Draw!");
      if(confirm("Would you like to play again?")){
        location.reload();
      }
    }
  }

});
