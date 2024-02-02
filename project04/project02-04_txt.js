function calculateTotal() {
   var total = 0;

   var chickenCheckbox = document.getElementById('chicken');
   if (chickenCheckbox.checked) 
   {
       total += parseFloat(chickenCheckbox.value);
   }

   var halibutCheckbox = document.getElementById('halibut');
   if (halibutCheckbox.checked) 
   {
       total += parseFloat(halibutCheckbox.value);
   }

   var burgerCheckbox = document.getElementById('burger');
   if (burgerCheckbox.checked) 
   {
       total += parseFloat(burgerCheckbox.value);
   }

   var salmonCheckbox = document.getElementById('salmon');
   if (salmonCheckbox.checked) 
   {
       total += parseFloat(salmonCheckbox.value);
   }

   var saladCheckbox = document.getElementById('salad');
   if (saladCheckbox.checked) 
   {
       total += parseFloat(saladCheckbox.value);
   }

   var tax = total * 0.07;
   var totalBill = total + tax;


   document.getElementById('foodTotal').innerHTML = '$' + total.toFixed(2);
   document.getElementById('foodTax').innerHTML = '$' + tax.toFixed(2);
   document.getElementById('totalBill').innerHTML = '$' + totalBill.toFixed(2);
}
