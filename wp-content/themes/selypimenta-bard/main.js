document.addEventListener("DOMContentLoaded", function() {
  
  //---------- Manage cookies
  const cookiesManagement = function () {
    window.createCookie = function (name,value,days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = '; expires='+date.toGMTString();
      }
      else var expires = '';
      document.cookie = name+'='+value+expires+'; path=/';
    };
    window.readCookie = function (name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    };
    window.eraseCookie = function (name) {
      createCookie(name,'',-1);
    };
  };

  //---------- Show Cookies notice behaviour
  const showCookiesNotice = function() {
    const cookiesNoticeEl = document.getElementsByClassName('cookies-notice')[0];
    const cookiesNoticeCurrentClasses = cookiesNoticeEl.className;
    const cookiesButtonEl = document.getElementsByClassName('cookies-notice--button')[0];

    const hasUserAcceptedCookies = window.readCookie('userHasAcceptedCookies');

    // Hide if user already accepted cookies
    if (hasUserAcceptedCookies) {
      cookiesNoticeEl.className = `${cookiesNoticeCurrentClasses} hide`;
    }

    // What happens when user clicks "Accept" button
    const clickHandler = function() {
      const cookiesNoticeEl = document.getElementsByClassName('cookies-notice')[0];
      window.createCookie('userHasAcceptedCookies', true, 360);
      cookiesNoticeEl.className = `${cookiesNoticeCurrentClasses} hide`;
    }
    
    // "Accept" button Click event
    cookiesButtonEl.addEventListener('click', clickHandler, false);
  }


  //---------- Run functions
  cookiesManagement();
  showCookiesNotice();

});
