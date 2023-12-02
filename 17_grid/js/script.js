document.addEventListener('DOMContentLoaded', function () {
  // burger

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.header__link');
  let colBurger = document.querySelector('.burger');

  burger.addEventListener('click',
    function () {
      burger.classList.toggle('header__burger--active');

      colBurger.classList.toggle('burger--active');

      menu.classList.toggle('header__nav--active');

      document.body.classList.toggle('stop-scroll');
    }
  )

  menuLinks.forEach(
    function (el) {
      el.addEventListener('click',
        function () {
          burger.classList.remove('header__burger--active');

          colBurger.classList.remove('burger--active');

          menu.classList.remove('header__nav--active');

          document.body.classList.remove('stop-scroll');
        }
      )
    }
  )
});
