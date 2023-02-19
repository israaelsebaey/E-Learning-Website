window.addEventListener('scroll',function(){
    var navBar=this.document.querySelector('.header #navbar');
    var logo=this.document.querySelector('.header .navbar-brand');
    var links=this.document.querySelectorAll('.header .nav-item a');
    var dropItems=this.document.querySelectorAll('.header .dropdown-item');
    var btns=this.document.querySelectorAll('.header .btn-outline-success');
    var scrollValue=this.window.scrollY;
    // console.log(scrollValue);
    if(scrollValue<650){
        navBar.classList.remove('navBarColor');
        logo.classList.remove('logoColor');
        links.forEach(function(item){
            item.classList.remove('linksColor')
        })
        dropItems.forEach(function(item){
            item.classList.remove('dropBG')
        })
        btns.forEach(function(item){
            item.classList.remove('btns');
        })
    }
    else{
        navBar.classList.add('navBarColor');
        logo.classList.add('logoColor');
        links.forEach(function(item){
            item.classList.add('linksColor')
        })
        dropItems.forEach(function(item){
            item.classList.add('dropBG')
        })
        btns.forEach(function(item){
            item.classList.add('btns');
        })
    }
})
