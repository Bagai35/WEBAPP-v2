function timer(id, deadline) {
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  
      return {
        total: t,
        days: getZero(days),
        hours: getZero(hours),
        minutes: getZero(minutes),
        seconds: getZero(seconds),
      };
    }
  
    function getZero(num) {
      if (num >= 0 && num < 10) {
        return '0' + num;
      } else {
        return '00';
      }
    }
  
    function setClock(selector, endtime) {
      const timer = document.querySelector(selector);
      const days = timer.querySelector('#days');
      const hours = timer.querySelector('#hours');
      const minutes = timer.querySelector('#minutes');
      const seconds = timer.querySelector('#seconds');
      const timeInterval = setInterval(updateClock, 1000);
  
      updateClock();
  
      function updateClock() {
        const t = getTimeRemaining(endtime);
  
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
  
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
    }
  
    setClock('.timer', deadline);
  }
  
  export default timer;
  