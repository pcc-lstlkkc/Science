/**
 * 科學科網頁 — 風格切換器
 * 透過 data-theme 屬性切換 3 種視覺風格
 */
(function () {
  'use strict';

  var THEME_KEY = 'science-web-theme';
  var btns = document.querySelectorAll('.theme-btn');
  var html = document.documentElement;

  // 載入上次選取的主題
  function loadSaved() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved && html.getAttribute('data-theme') !== saved) {
      setTheme(saved);
    }
  }

  // 設定主題
  function setTheme(name) {
    html.setAttribute('data-theme', name);
    localStorage.setItem(THEME_KEY, name);

    // 更新按鈕 active 狀態
    btns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === name);
    });
  }

  // 綁定按鈕事件
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(this.getAttribute('data-theme'));
    });
  });

  // 平滑捲動導航
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  loadSaved();
})();