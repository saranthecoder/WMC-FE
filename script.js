let c=0;
    let display3= document.getElementById("vis3")
    let display4= document.getElementById("vis4")
    let display5= document.getElementById("vis5")
    let display6= document.getElementById("vis6")
    let button=document.getElementById("btn")
    document.getElementById("btn").addEventListener("click",()=>{
      c++
        if(c%2!=0){

          display3.style.display="initial";
          display4.style.display="initial";
          display5.style.display="initial";
          display6.style.display="initial";
          button.innerText="See Less-";
        }
      
        if(c%2==0){ 
          // button.style.transition="0.1s"
          display3.style.display="none";
          display4.style.display="none";
          display5.style.display="none";
          display6.style.display="none";
          button.innerText="See More+";
        }
    })