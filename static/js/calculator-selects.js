$(function() {
  const $selects = $(".calculator-section").find("select");

  $selects.each(function(_, $select) {
    $($select).niceSelect();
  })
})