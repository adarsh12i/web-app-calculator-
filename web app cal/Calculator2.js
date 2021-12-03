function getHistory(){
	return document.getElementById("history-value").innerText;//Takes the input stores into it
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;//prints the history no
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";//test case to clear the output n case of -sign return empty value
	}
	var n = Number(num);
	var value = n.toLocaleString("en");//puts the coma between no's
	return value;
}
function reverseNumberFormat(num){//to manuplate the no or to do calculation we remove the comas
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){//untill we are getting inputs it keeps on executing in loop
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){//both history and output will be cleared
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();//reverse the output
			if(output){//if output has a value
				output= output.substr(0,output.length-1);//if true removes the last digit
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);//check if the last value is not an operator if so remove the operator
				}
			}
			if(output!="" || history!=""){//if conditon true the
				output= output==""?output:reverseNumberFormat(output);//if true
				history=history+output;//else this
				if(this.id=="="){
					var result=eval(history);//history is evaluated
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;//operator is added to history and evaluation takes place
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){//adds the value contineously
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;// takes the concatinate valus or continue values
			printOutput(output);
		}
	});
}