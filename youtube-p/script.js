// menuToggle for sidebar menubar.
//  menu for header menu bar.
const menuToggle = document.querySelector('#menubar');
const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');
menuToggle.addEventListener('click', ()=>{
  sidebar.classList.remove('show-menu');
});
menu.addEventListener('click', () => {
	sidebar.classList.add('show-menu');
});