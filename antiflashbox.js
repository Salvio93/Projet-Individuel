


y= document.createElement('div')
y.innerHTML = "<button style='font-size: 24;background-color:white' class='btn salvio-btn'>X</button>";


cancer = document.querySelectorAll('.container.flashbox.warning .row')
for(n= 0; n< cancer.length;n++){
  cancer[n].appendChild(y.cloneNode(true)) 

  cancer[n].lastChild.firstChild.onclick=function(){
    elem = this.parentElement.parentElement.parentElement;
    elem.remove();
  };
}

  
  



