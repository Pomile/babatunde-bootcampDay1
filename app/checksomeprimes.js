var primeFactors =(num)=>{
	
	let factors =[];
	var counter= 2;

	for(counter; counter<num; ++counter){

		if(counter < 8 && num%counter==0){
			factors.push(counter);

		}else if(counter > 7){
			break;
		}

	}
	return factors
};


function raindrops(num){
	try{

		if(typeof num !=="number") throw "invalid input";
		let result = "";
		var factorsOfNumber=primeFactors(num);

		var factorsLength = factorsOfNumber.length;

		for(let counter2=0; counter2 < factorsLength; ++counter2){
			let currentFactor = factorsOfNumber[counter2];
			if (currentFactor==3 && result.includes(currentFactor)==0){
				result +="Pling";

			} else if(currentFactor==5 && result.includes(currentFactor)==0){

				result +="Plang";
			}else if(currentFactor==7 && result.includes(currentFactor)==0){

				result +="Plong";
			}else{

				continue;
			}
		}
		if(result==""){
			return num;
		}
		return result
	}catch(err){

		return err
	}

}

export default raindrops;
//console.log(raindrops(1755, findFactors))