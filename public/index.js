const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuicon');

menuIcon.addEventListener("click",()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})