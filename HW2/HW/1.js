
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */


  var btn = document.getElementById('buttonContainer');
  
  var buttons = btn.querySelectorAll('.showButton');

  var tab = document.querySelectorAll('.tab')
  
  btn.onclick = function (e) {

      if (e.target != btn) {
        var dataBtn = e.target.dataset.tab;
        var test;

        tab.forEach(function(tab) {
          
          if (tab.dataset.tab == dataBtn) {
            tab.classList.add ('active');
          } else {
            tab.classList.remove ('active');
          }
        })
      }

  }

  function hideAllTabs () {
    var btnClose = document.createElement('button');
    btnClose.id = 'close';
    btnClose.innerHTML = 'Close TAB'
    
    document.body.appendChild(btnClose);
    btnClose.onclick = function() {
      tab.forEach(function(tab) {
        tab.classList.remove('active');
      })
    }
    
  } 

  hideAllTabs();