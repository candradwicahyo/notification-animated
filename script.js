window.onload = () => {
  
  const box = document.querySelector('.box');
  const progressBar = document.querySelector('.progress-bar');
  const btnClose = document.querySelector('.btn-close');
  const button = document.querySelector('.button');
  
  let interval, number = 100;
  
  function setProgressBar() {
    progressBar.style.width = number + '%';
  }
  
  setProgressBar();
  
  button.addEventListener('click', () => {
    clearInterval(interval);
    setProgressBar();
    showHideBox('add', 'active');
    barLoader();
  });
  
  function showHideBox(action = 'add', classname = 'active') {
    switch (action) {
      case 'add' : box.classList.add(classname); break;
      case 'remove' : box.classList.remove(classname); break;
    }
  }
  
  btnClose.addEventListener('click', () => {
    clearInterval(interval);
    showHideBox('remove', 'active');
    number = 100;
    setProgressBar();
  });
  
  function barLoader() {
    interval = setInterval(() => {
      number--;
      setProgressBar();
      if (number == 0) {
        showHideBox('remove', 'active');
        clearInterval(interval);
        number = 100;
      }
    }, progressBar.dataset.limit);
  }
  
}