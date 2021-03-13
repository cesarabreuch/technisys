const prompt = require('prompt');

const schema = {
	properties:{
		numero:{
			description: 'Ingrese un número',
			type: 'number',
			required:true
		}
	}
};
prompt.start();


prompt.get(schema, (err,result)=>{
if(err || typeof result.name !=='number'){
	throw Error('El valor ingresado no corresponde a un numero');
} else {
	const esPrimo = numero => {

		if(typeof numero !== 'number'){
			throw Error('Solo números');
		}
		 else{
			 if (numero == 0 || numero == 1 || numero == 4) return false;
			 for (let x = 2; x < numero / 2; x++) {
				 if (numero % x == 0) return false;
			 }
			 return true;
		 }
	};
	const imprimirPrimos = (entrada)=>{
		if(typeof entrada !== 'number'){
			throw Error('El dato introducido debe ser un número');
		} else {
			const coleccionPrimos = [];
			for(let i=entrada; i>=2;i--){
				if(esPrimo(i)){
				coleccionPrimos.push(i); 
				}
			}
			return {primos: coleccionPrimos};
		}
	};
	console.log(`los numeros primos de ${result.numero} son: ${imprimirPrimos(result.numero).primos}`);
}
});

