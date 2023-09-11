window.onload = function(){
   
   const closeBtn = document.querySelector('.closeBtn');
   const sidebarMenu = document.querySelector('.sidebarMenu');
   const menuTitle = document.querySelectorAll('.menuTitle');
   const menuItem = document.querySelectorAll('.menuItem');
   const changeMode = document.getElementById('mode');
   const lightMode = document.getElementById('light');
   const darkMode = document.getElementById('dark');

   getDarkMode();
   showSlidebarMenu();

   closeBtn.addEventListener('click', showSlidebarMenu);
   for(let i=0; i<menuItem.length; i++){
      menuItem[i].addEventListener('click', closeSlidebarMenu);
   }

   lightMode.addEventListener('click', getLightMode);

   darkMode.addEventListener('click', getDarkMode);

   // functions
   function showSlidebarMenu()
   {
      sidebarMenu.style.width = '38px';
      closeBtn.style.right = '58px';
      closeBtn.style.opacity = 0;

      for(let i=0; i<menuTitle.length; i++){
         menuTitle[i].style.display = 'none';
      }
   }

   function closeSlidebarMenu()
   {
      sidebarMenu.style.width = '225px';
      closeBtn.style.right = '245px';
      closeBtn.style.opacity = 1;

      for(let j=0; j<menuTitle.length; j++){
         menuTitle[j].style.display = 'inline-block';
      }
   }

   function getLightMode()
   {
      changeMode.setAttribute('href','light.css');
      lightMode.style.display = 'none';
      darkMode.style.display = 'block';
   }

   function getDarkMode()
   {
      changeMode.setAttribute('href','dark.css');
      darkMode.style.display = 'none';
      lightMode.style.display = 'block';
   }
}

