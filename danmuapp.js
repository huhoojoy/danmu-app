$(document).ready(function() {

  var ref = new Wilddog("https://huhoo-danmuapp.wilddogio.com/danmu");
  var arr = [];
//将数据上传到野狗云.
  $(".btn-fire").click(function() {
  	    var inputCon = $('input').val();
  	    ref.child('danmu').push(inputCon);
  	    $('input').val('');
  	  });


  $('.btn-fire').on('click', function() {
    if($('input').val() === '') {
      alert('请先装弹再发射！');
    } else {
      $('.words').text($('input').val());
    };
  });

  $('.btn-clean').on('click', function() {

  });
});
