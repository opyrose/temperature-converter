//create a prompt to ask for user inout of a temp in fahrenheit
//make the f temp given the value of fahrenheitTemp


let userInput= prompt(`Input fahrenheit temperature, we will convert it to celcius:`)
Number(userInput)

//create a function to take the fTemp value and convert it to C
//use the given math equation
//have the function return the final value 

let convertToCelcius= () =>{
  let celsiusTemp = (userInput- 32) * (5/9);
  return celsiusTemp
 }
 //celciustemp value is black bc it is dependent on user input
celsiusTemp=
 //run the function

 convertToCelcius()

 let describeTemperature=()=>{
    if (userInput < 32) {return ("very cold")}
      else if (userInput < 64) {return (`cold`)}
          else if (userInput < 86) {return (`warm`)}
            else if (userInput <100 ) {return (`hot`)}
                else if (userInput >= 100) {return (`very hot`)}
 }
describeTemperature=

 describeTemperature()

 alert( userInput + ` ` +  celsiusTemp + ` ` + describeTemperature )





 




