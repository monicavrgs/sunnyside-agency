function openDropDown(){
    let menu = document.getElementById("nav-list")

    if(menu.style.display == "none"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }
}