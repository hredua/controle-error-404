function menu() {
    const menuSize = '270px';

    let open = false;
    
    document.querySelector('#btnMenu').addEventListener('click', e => {
        open = !open;
        toogleMenu()
    })
    function toogleMenu(){
        if(open) {
            document.querySelector('#menu').style.marginLeft = 0;
            return;
        }
    
        document.querySelector('#menu').style.marginLeft = `-${menuSize}`
    }
}


export {menu}