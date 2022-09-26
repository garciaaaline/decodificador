	var campotexto = document.querySelector('#textoarea');
	var mensagem = document.querySelector('#campodescriptografar');



    function botaodescriptografar() {
    	var textodesencriptado = descriptografar(campotexto.value);
    	mensagem.value = textodesencriptado;
    }

    function descriptografar(stringDesencriptada) {
    	let matrizCodigo = [ ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    	stringDesencriptada = stringDesencriptada.toLowerCase();
    	campotexto.value = " ";

    	for(let i = 0; i < matrizCodigo.length; i++) {
    		if(stringDesencriptada.includes(matrizCodigo[i][1])) {
    			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
    		}
    	}
    	return stringDesencriptada;
    }

/* BOTAO COPIAR */
 	function copiarTexto() {
       
        let textoCopiado = document.getElementById("mensagem");
        mensagem.select();
        mensagem.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }


    function botaocriptografar() {
    	var textoEncriptado = criptografar(campotexto.value)
    	mensagem.value = textoEncriptado;
    	document.background = "none";

    }

    function criptografar(stringEncriptada) {
    	let matrizCodigo = [ ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    	stringEncriptada = stringEncriptada;
		campotexto.value = " ";

    	for(let i = 0; i < matrizCodigo.length; i++) {
    		if(stringEncriptada.includes(matrizCodigo[i][0])) {
    			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    		}
    	}
    	return stringEncriptada;

    }

   
