//Temp in Kelvin
var kelvin = 293;
//Convert to Celsius
var celsius = kelvin - 273;
//Convert to Fahrenheit, rounded down
fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
//Displays temp in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//Convert to Newton, rounded down
newton = celsius * (33/100);
newton = Math.floor(newton);
//Displays temp in Newton
console.log(`The temperature is ${newton} degrees Newton`);

 
