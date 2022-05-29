let score = 0
function responder(valor){
   let next= document.getElementById("pergunta2");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       alert("acertou");
       score++;  
    }  
}
   
    
   
    

