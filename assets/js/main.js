// 지점 찾기: 지역명 필터 (링크는 HTML에 모두 포함되어 있음)
(function () {
  var input = document.getElementById('region-search');
  var items = document.querySelectorAll('#region-list li');
  var empty = document.getElementById('region-empty');
  if (!input) return;

  input.addEventListener('input', function () {
    var q = input.value.trim();
    var shown = 0;
    items.forEach(function (li) {
      var name = li.querySelector('a').getAttribute('data-name');
      var match = !q || name.indexOf(q) !== -1;
      li.hidden = !match;
      if (match) shown++;
    });
    empty.hidden = shown !== 0;
  });
})();
