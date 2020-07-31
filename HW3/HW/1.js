/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;

  var nextSlide = document.getElementById('NextSilde');
  var prevSlide = document.getElementById('PrevSilde');
  
  
  var slider = document.getElementById('slider');
  var img = document.createElement('img');

  window.addEventListener('load', function() {
    slider.appendChild(img);
    img.src = OurSliderImages[0];
  })



  nextSlide.addEventListener('click', function(e) {
    

    if (currentPosition < OurSliderImages.length -1) {

      currentPosition ++
      img.src = OurSliderImages[currentPosition];
      console.log(currentPosition)

    } else {
      img.src = OurSliderImages[currentPosition = 0]
    }
     
  })

  

  
  prevSlide.addEventListener('click', function(e) {
    
    
    if (currentPosition > 0 && currentPosition < OurSliderImages.length ) {

      currentPosition --
      img.src = OurSliderImages[currentPosition]
      
    } else {
      currentPosition = OurSliderImages.length;
      currentPosition --;
      console.log(currentPosition);
      img.src = OurSliderImages[currentPosition];
      
    }
  })

  
  



  
    