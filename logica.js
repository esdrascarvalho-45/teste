function clicar(){
    let um=document.querySelector(".um"); 
     
    let dois=um.querySelector(".dois");
     
    dois.children[0].innerHTML += " alet"
    dois.children[1].append(" (2°)");
    
    let v=document.createElement("li");
     
    v.innerText="mais um";
    
    dois.appen(v)
 }
 let va=document.querySelector(".bt");
 
 va.addEventListener("click",function(){
   clicar();
 })