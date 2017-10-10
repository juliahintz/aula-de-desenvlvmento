function ex1(){
	var v1, v2, res_soma, res_sub, res_mult, res_div;

	v1 = parseInt(document.getElementById('valor1').value);
	v2 = parseInt(document.getElementById('valor2').value);

	res_soma = v1 + v2;
	res_sub = v1 - v2;
	res_mult = v1 * v2;
	res_div = v1 / v2;

	resultado = "soma: " + v1 + " + " + v2 + " = " + res_soma + "<br/> sub: " + v1 + " - " + v2 + " = " + res_sub + "<br/> mult: " + v1 + " * " + v2 + " = " + res_mult + "<br/> div: " + v1 + " / " + v2 + " = " + res_div+ "<br/> "

	document.getElementById('resultado').innerHTML = resultado;
}

function ex2(){
	var v1, v2, res_soma, res_sub, res_mult, res_div;

	v1 = parseInt(document.getElementById('valor1').value);
	v2 = parseInt(document.getElementById('valor2').value);

	res_soma = v1 + v2;
	res_sub = v1 - v2;
	res_mult = v1 * v2;
	res_div = v1 / v2;

	if (v1 < v2 || v1 < 0 || v2 < 0){
		alert('subtracoes negativas nao sao permitidas');
		if(v1 % v2 != 0){
			alert('a divisao so pode resultar em inteiros!');
			resultado = "soma: " + v1 + " + " + v2 + " = " + res_soma + "<br/> mult: " + v1 + " * " + v2 + " = " + res_mult + "<br/>";		
		}
		else{
			resultado = "soma: " + v1 + " + " + v2 + " = " + res_soma + "<br/> mult: " + v1 + " * " + v2 + " = " + res_mult + "<br/> div: " + v1 + " / " + v2 + " = " + res_div+ "<br/> "
		}
	}
	else{
		if(v1 % v2 != 0){
			alert('a divisao so pode resultar em inteiros!');
			resultado = "soma: " + v1 + " + " + v2 + " = " + res_soma + "<br/> sub: " + v1 + " - " + v2 + " = " + res_sub +  "<br/> mult: " + v1 + " * " + v2 + " = " + res_mult + "<br/>";		
		}
		else{
			resultado = "soma: " + v1 + " + " + v2 + " = " + res_soma + "<br/> sub: " + v1 + " - " + v2 + " = " + res_sub + "<br/> mult: " + v1 + " * " + v2 + " = " + res_mult + "<br/> div: " + v1 + " / " + v2 + " = " + res_div+ "<br/> "	
		}
	}

	document.getElementById('resultado').innerHTML = resultado;
}



function ex3(){
	var valor, resultado;

	valor = parseFloat(document.getElementById('valor1').value);

	resultado = (valor - 32)/1.8;

	document.getElementById('resultado').innerHTML = resultado;
}

function ex4(){
	var valor, resultado;

	valor = parseFloat(document.getElementById('valor1').value);

	resultado = (valor - 32)/1.8;

	if (resultado > 25){
		document.getElementById('resultado').innerHTML = "<div class='vermelho'> calor</div>";
	}
	else if(resultado <= 25 && resultado > 20){
		document.getElementById('resultado').innerHTML = "<div class='amarelo'> agradavel</div>";	
	}
	else if(resultado >= -10 && resultado <=19){
		document.getElementById('resultado').innerHTML = "<div class='azul'> frio</div>";
	}
	else{
		document.getElementById('resultado').innerHTML = "<div class='erro'> erro</div>";
	}
}


function ex5(){
	var v1, v2, res_soma, res_sub, res_mult, res_div;

	v1 = parseInt(document.getElementById('valor1').value);
	v2 = parseInt(document.getElementById('valor2').value);

	if (v1 % v2  == 0 || v2 % v1 == 0){
		document.getElementById('resultado').innerHTML = "<input type='text' id='nome'><input type='button' onclick='verifica_nome()' value='verifique'><div id='foto'></div>"
	}
	else{
		alert('erro')
	}
}

function verifica_nome(){
	var nome;

	//estamos percorrendo um array, pra conta os 's'

	nome = document.getElementById('nome').value;
	for (i = 0; i < nome.length; i++) {
		if (nome[i] == 's' || nome[i] == 'S'){
			document.getElementById('foto').innerHTML ="<img src='https://i.makeagif.com/media/10-05-2017/sQSuF4.gif'>"
		}
	}

}