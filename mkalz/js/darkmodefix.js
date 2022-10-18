
       // Immediately invoked function to set the theme on initial load
       (function () {
           if (localStorage.getItem('theme') === 'theme-dark') {
               setTheme('theme-dark');
               document.getElementById('slider').checked = true;
           } else {
               setTheme('theme-light');
             document.getElementById('slider').checked = false;
           }
       })();
