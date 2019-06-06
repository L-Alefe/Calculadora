var i = 0;
	document.querySelector('#addNumber').addEventListener('click',function(element){
		var input = document.createElement('input');
		input.style.display = "block";
		input.style.marginBottom = "20px";
		input.classList.add("valoresCalc");
		input.value = 0;
		input.type = "text";
		document.querySelector('#formMain').appendChild(input);
	});
	var valores = [];
	var modo = 1;
	function modoCalcular(e){
		switch(e){
			case 1:
				modo = 1;
				document.querySelector("#op").textContent = "+";
				break;
			case 2:
				modo = 2;
				document.querySelector("#op").textContent = "-";
				break;
			case 3:
				modo = 3;
				document.querySelector("#op").textContent = "x";
				break;
			case 4:
				modo = 4;
				document.querySelector("#op").textContent = "/";
				break;
		}
	}

	document.querySelector("#calcularBtn").addEventListener('click',function(event){
		var inputs = [];
		var aux = null;
		inputs = document.querySelectorAll(".valoresCalc");
		if(modo == 1){
			for (i = 0; i < inputs.length; i++) {
				aux = aux + parseFloat(inputs[i].value);
			}
			var div = document.querySelector("#resultado");
			div.style.border = "1px solid #bbb";
			div.style.padding = "10px"
			div.innerText = "Resultado: " + aux;
		}
		if(modo == 2){
			for (i = 0; i < inputs.length; i++) {
				if(i == 0){
					aux = parseFloat(inputs[i].value);
				}else{
					aux = aux - parseFloat(inputs[i].value);
				}
			}
			var div = document.querySelector("#resultado");
			div.style.border = "1px solid #bbb";
			div.style.padding = "10px"
			div.innerText = "Resultado: " + aux;
		}
		if(modo == 3){
			aux = 1;
			for (i = 0; i < inputs.length; i++) {
				aux = aux * parseFloat(inputs[i].value);
			}
			var div = document.querySelector("#resultado");
			div.style.border = "1px solid #bbb";
			div.style.padding = "10px"
			div.innerText = "Resultado: " + aux;
		}
		if(modo == 4){
			aux = null;
			for (i = 0; i < inputs.length; i++) {
				if(i == 0){
					aux = parseFloat(inputs[i].value);
				}else{
					aux = aux / parseFloat(inputs[i].value);
				}
			}
			var div = document.querySelector("#resultado");
			div.style.border = "1px solid #bbb";
			div.style.padding = "10px"
			div.innerText = "Resultado: " + aux;
		}
		
	});
