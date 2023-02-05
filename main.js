const openSideBar = document.querySelector('#hamburgerBtnOpen');
const closeSideBar = document.querySelector('#hamburgerBtnClose');
const sideBarBtn = document.querySelector('.hamburgerBtn');

let isSideBarOpen = true;

let mobileSideBar = () => {
    if(isSideBarOpen = !isSideBarOpen) {
        sideBarBtn.style.display = 'block';
        // document.body.style.overflow = 'none';
        
    } else {
        sideBarBtn.style.display = 'none';
        // document.body.style.overflow = 'none';
    }
}

openSideBar.onclick = mobileSideBar;
closeSideBar.onclick = mobileSideBar;