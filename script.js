/*Nav Menu início*/

/*Sumindo e Parecendo barra de pesquisar em layouts mobile e tablet*/

const menuMobile=document.getElementById('menuMobileId');
const searchIcon=document.getElementById('searchInputIconMobile');

searchIcon.addEventListener('click',e=>{
    const searchField=document.getElementById('inputSearchFieldId');
    const logoMobile=document.getElementById('logoMenuId');

    if (searchField.classList.contains('hide')){
        searchField.classList.remove('hide');
        logoMobile.classList.add('hide');

    } else {
        searchField.classList.add('hide');
        logoMobile.classList.remove('hide');  
    }
});

menuMobile.addEventListener('click',e=>{
    const menuMobileLinks=document.getElementById('linksMenuMobileId');
    
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        menuMobileLinks.classList.add('hide');
    } else {
        menuMobile.classList.add('open');
        menuMobileLinks.classList.remove('hide');
    }
})



/* Nav Menu fim*/ 

