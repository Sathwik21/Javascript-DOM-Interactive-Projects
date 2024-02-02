let celsius = document.getElementById('cValue'); 
let fahrenheit = document.getElementById('fValue'); 
        
cValue.oninput = function () 
{ 
      let f = ((parseFloat(cValue.value) * 9) / 5) + 32; 
      fValue.value = parseFloat(f); 
} 

fValue.oninput = function () 
{ 
      let c = ((parseFloat(fValue.value) - 32) * 5) / 9; 
      cValue.value = parseFloat(c); 
}