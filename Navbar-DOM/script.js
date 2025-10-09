let toggler = document.querySelector('#toggler'); 
let navlist = document.querySelector('#navlist'); 
toggler.addEventListener('click', () => {
  navlist.classList.toggle('shownav');  
});