//GOAL RESPOSTA CERTA
//GOAL RESPOSTAS ERRADAS

const respostaCerta=document.getElementById("resposta-certa");

const explicacao=document.getElementById("explicacao");

respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML="<strong>Correto!!</strong> 🥳"
})


const respostasErradas=document.querySelectorAll(".resposta-errada");

respostasErradas.forEach((resposta) => {
	resposta.addEventListener("click", (event) =>  {
		let explicacaoConteudo="<strong>Ops, errado ....</strong> 😬"
		if(resposta.id==="resposta-html") {
			explicacaoConteudo+=" HTML permite-nos dar estrutura e conteúdo à nossa página."
		} else if(resposta.id==="resposta-css") {
			explicacaoConteudo+=" CSS permite-nos dar estilo à nossa página."
		} else {
			explicacaoConteudo+=" Ruby é uma das várias linguagens que pode ser utilizada para backend."
		}

		explicacaoConteudo +=" Tenta outra vez"

		explicacao.innerHTML=explicacaoConteudo;
	})
})