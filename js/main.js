$(function(){
  $('#menu_unabout').click(function(){
    $('#panel_submenu_unabout').show();
  })
  $('#menu_prabout').click(function(){
    $('#panel_submenu_prabout').show();
  })
  $('#menu_detail').click(function(){
    $('#panel_submenu_detail').show();
  })
  $('.point-day').click(function(){
    $('.cal_submenu',this).show();
  })
  $(document).on('click touchend',   function(e) {
  if (!$(e.target).closest('.point-day').length) {
    // 処理方法を記述;
    $('.cal_submenu').hide();
  }
  });
  $(document).on('click touchend',   function(e) {
  if (!$(e.target).closest('#menu_unabout').length) {
    // 処理方法を記述;
    $('#panel_submenu_unabout').hide();
  }
  });
  $(document).on('click touchend',   function(e) {
  if (!$(e.target).closest('#menu_prabout').length) {
    // 処理方法を記述;
    $('#panel_submenu_prabout').hide();
  }
  });
  $(document).on('click touchend',   function(e) {
  if (!$(e.target).closest('#menu_detail').length) {
    // 処理方法を記述;
    $('#panel_submenu_detail').hide();
  }
  });
});
