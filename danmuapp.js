$(document).ready(function() {
  $('.btn-fire').on('click', function() {
    var inputCon = $('input').val();
    if(inputCon === "") {
      alert('请先装弹再发射！');
    } else {
      $('.words').text(inputCon);
      $('.words:after').css({'visibility':'visible'});
      //some problem of understanding the pseudo-element and animation
    };

    $('.btn-fire').css({'color': 'darkblue'});

  });

});
