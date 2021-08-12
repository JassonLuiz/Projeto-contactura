class MobileNavBar {
    constructor(){
        this.mobileMenu = document.querySelector("#menu-mobile");
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll();
        this.activeClass = "active";
    }
    
    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log("Click funcionando!"));
    }

    init(){
        if(this.mobileMenu){
          this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();