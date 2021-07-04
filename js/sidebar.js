const opensidebar = document.querySelector(".medcare-icon");
const sidebar = document.querySelector(".sidebar-wrapper");
const closebar = document.querySelector(".close-icon");

opensidebar.addEventListener('click', () =>{
    sidebar.style.width ="100%";
});

closebar.addEventListener('click', () =>{
    sidebar.style.width ="0";
});