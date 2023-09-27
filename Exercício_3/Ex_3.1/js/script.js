function calculator(){
    let operator = prompt("Insira a Operação a utilizar");
    let number_1 = parseFloat(prompt("Insira o primeiro numero da operação"));
    let number_2= parseFloat(prompt("Insira o segundo numero da operação"));
    if(operator === "+"){
        let sum = number_1 + number_2;
        console.log(sum); 
    }
    if(operator === "-"){
        let subtract = number_1 - number_2;
        console.log(subtract); 
    }
    if(operator === "*"){
        let multiply = number_1 * number_2;
        console.log(multiply); 
    }
    if(operator === "/"){
        let division = number_1 / number_2;
        console.log(division); 
    }
}