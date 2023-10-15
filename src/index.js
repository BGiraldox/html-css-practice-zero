const mql = window.matchMedia("(max-width: 400px)");

const hideMenu = () => {
    let display = document.getElementById('menu').style.visibility
    document.getElementById('menu').style.visibility = 
        display == 'visible' || display == ''
        ? 'hidden' 
        : 'visible'
}

mql.onchange = (e) => {
    document.getElementById('menu').style.visibility = 'visible'
};