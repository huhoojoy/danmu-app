$(document).ready(function() {
  $('.btn-fire').on('click', function() {
    var inputCon = $('input').val();
    if(inputCon === "") {
      alert('请先装弹再发射！');
    } else {
      $('.words').text(inputCon);
    };
  });

  $('.btn-clean').on('click', function() {

  });
});
