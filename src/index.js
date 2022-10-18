
//Passo 1: pegar elementos que representão a aba no HTML:
const abas = document.querySelectorAll(".aba")
abas.forEach(aba => {
    
    //Passo 2: Dar um jeito de identificar clicks de aba:
    aba.addEventListener("click",function() {

        if(aba.classList.contains("selecionado")){
          return;
        }
         selecionarAba(aba)
        mostrarInfoDAba(aba)
        
    })
})


function selecionarAba(aba){
    
    //Passo 3: Quando user clicar, desmarcar aba selecionada:
     const  abaSelecionada = document. querySelector(".aba.selecionado") 
     abaSelecionada.classList.remove("selecionado");

     //Passo 4: Marcar aba como selecionada:
     aba.classList.add("selecionado")
    
    }




function mostrarInfoDAba(aba){

            //Passo 5: Esconder conteúdo anterior
            const  informacaoSelecionada = document. 
            querySelector(".informacao.selecionado")  
            informacaoSelecionada.classList.remove("selecionado")


            //Passo 6:Mostrar contéudo da aba selecinada:
           const idDoElementoInfoAba = `informacao-${aba.id}`
           
           const infomostrar = document.
           getElementById(idDoElementoInfoAba)
           infomostrar.classList.add("selecionado")

}