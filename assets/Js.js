const header = document.querySelector('.header');
const headercontacts =  document.querySelector('.header-contacts');
    window.addEventListener("scroll",function(){
        
        var x = pageYOffset;
        // console.log(x)
        if(x > 20){
           
            header.classList.add('close-header-wrapper');
            headercontacts.classList.add('close-heade-contacts');
            
        }
        else{
            
            header.classList.remove('close-header-wrapper');
            headercontacts.classList.remove('close-heade-contacts');
        }
    })

    // Tăng 
    var click = 0;
    function clickIncrease() {
        click+= 1;
        document.getElementById("result").value = click;
        
    }
    //Giảm
    function clickDecrease() {
        if(click == 0)
            document.getElementById("result").value = 0;
        else
        {
            click-= 1;
            document.getElementById("result").value = click;
        }    
    }

// Dong mo dang nhap -gio hang

var headerAccDropdown =  document.querySelector('.header-acc-dropdown');
var iconHeaderList = document.querySelector('.icon-header-list');
var cardDropdown = document.querySelector('.card-dropdown');
var iconHeaderListcard = document.querySelector('.icon-header-list-card');
iconHeaderList.onclick = function OpenHeaderAccDropdown()
{   var isOpen = headerAccDropdown.clientHeight === 0;
    if( isOpen)
    {
        headerAccDropdown.classList.add('open-header-acc-dropdown');
       
    }
    else
    {
        headerAccDropdown.classList.remove('open-header-acc-dropdown');
       


    }
}
iconHeaderListcard.onclick = function OpenHeadercardDropdown()
{   var isOpen = cardDropdown.clientHeight === 0;
    if( isOpen)
    {
        cardDropdown.classList.add('close-card-dropdown');
        
    }
    else
    {
        cardDropdown.classList.remove('close-card-dropdown');
    }
}

