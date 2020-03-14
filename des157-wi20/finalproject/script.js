

var eightppl = document.querySelector('#eightppl');
var usblue = document.querySelector('#usblue');


var eightpploverlay = document.querySelector('#eightpploverlay');
var eightpplclose = document.querySelector('#eightpplclose');
var usblueoverlay = document.querySelector('#usblueoverlay');
var usblueclose = document.querySelector('#usblueclose');


eightppl.addEventListener('click', function () {
    eightpploverlay.style.display='block';
})
eightpplclose.addEventListener('click', function (){
    eightpploverlay.style.display = 'none';
})

usblue.addEventListener('click', function () {
    usblueoverlay.style.display='block';
})
usblueclose.addEventListener('click', function (){
    usblueoverlay.style.display = 'none';
})


$(document).ready(function() {
    //initialize the quiz options
    var answersLeft = [];
    $('.quiz-wrapper').find('li.option').each( function(i) {
      var $this = $(this);
      var answerValue = $this.data('target');
      var $target = $('.answers .target[data-accept="'+answerValue+'"]');
      var labelText = $this.html();
      $this.draggable( {
        revert: "invalid",
        containment: ".quiz-wrapper"
      });
     
      if ( $target.length > 0 ) {
      $target.droppable( {
          accept: 'li.option[data-target="'+answerValue+'"]',
          drop: function( event, ui ) {
            $this.draggable('destroy');
            $target.droppable('destroy');
            $this.html('&nbsp;');
            $target.html(labelText);
            answersLeft.splice( answersLeft.indexOf( answerValue ), 1 );
          }
      });
      answersLeft.push(answerValue);
      } else { }
     });
     $('.quiz-wrapper button[type="submit"]').click( function() {
         if ( answersLeft.length > 0 ) {
              $('.lightbox-bg').show();
        $('.status.deny').show();
        $('.lightbox-bg').click( function() {
                $('.lightbox-bg').hide();
          $('.status.deny').hide();
          $('.lightbox-bg').unbind('click');
        });
         } else {
              $('.lightbox-bg').show();
        $('.status.confirm').show();
         }
     });
  });
  

  var checkbox1 = document.getElementById('checkbox1');
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');

menu2.style.display = 'none';

checkbox1.onchange = function () {
  if (checkbox1.checked) {
    menu1.style.display = 'block';
    menu2.style.display = 'none';
    AOS.init();
  } else {
    menu2.style.display = 'block';
    menu1.style.display = 'none';
    AOS.init();
  }
};

AOS.init({
  duration: 1200,
})

 
  

