$(function() {
  // HTMLドキュメントが読み込み完了したとき
  $(window).on('load', function() {
    console.log('loadイベントが発生しました');
  });
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});
