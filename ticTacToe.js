$(document).on('ready', function(){
  var turn = 0;
  var xSelections = [];
  var oSelections = [];

  $('td').on('click', function(){
    var self = $(this);

    if(turn % 2 === 0){
      self.html('X').addClass('x');
      xSelections.push(parseInt(self.attr('id').split('')[2]));
      console.log(xSelections);
    }else{
      self.html('O').addClass('o');
      oSelections.push(parseInt(self.attr('id').split('')[2]));
      console.log(oSelections);
    }

    self.off('click');

    checkForWinner();

    turn++;

  });

  function xWins(){
    var xTotal = 0;
    $.each(xSelections, function(){
    xTotal += this;
    });
    if(xTotal === 15){
      alert("X wins!");
      if(confirm("Would you like to play again?")){
        location.reload();
      }
    }
    xTotal = 0;
  }

  function oWins(){
    var oTotal = 0;
    $.each(oSelections, function(){
    oTotal += this;
    });
    if(oTotal === 15){
      alert("O wins!");
      if(confirm("Would you like to play again?")){
        location.reload();
      }
    }
  }

  function xWins2(){
    var xTotal = 0;
    $.each(xSelections, function(){
    oTotal += this;
    });
    if (xTotal - xSelections[0] === 15){
      alert("solved!");
    }

  }
  function checkForWinner(){
    if(turn === 4){
      xWins();
    }else if(turn === 5){
      oWins();
    }else if(turn === 6){
      xWins2();
    }else if(turn === 7){
      oWins();
    }else if(turn === 8){
      alert("Draw!");
      if(confirm("Would you like to play again?")){
        location.reload();
      }
    }
  }
});
