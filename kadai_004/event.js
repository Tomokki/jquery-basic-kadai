$(document).ready(function() {
  // loadイベント処理
  $(window).on("load", function() {
    console.log("loadイベントが発生しました");
  });

  // scrollイベント処理
  $(window).on("scroll", function() {
    console.log("scrollイベントが発生しました");
  });
});