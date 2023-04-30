"use strict";

/*
	Elena Phillips
	4/23
	order.js
	
		DOC NOTES
	==============================================
   
   The item array contains the ID numbers of the items ordered by the customer
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item

   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/


var itemPrice = [];

var qIndex = [];

var orderTotal = 0;

var cartHTML;

for (var i = 0; i < item.length; i++) {
  cartHTML += "<td>$" +itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";

  var itemCost = itemPrice[i] * itemQty[i];

  cartHTML += "<td>$" + itemCost + "</td></tr>";

  orderTotal += itemCost;

}

cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + ",/td></tr></table>";

document.getElementById("cart").innerHTML = cartHTML;

window.addEventListener("load", function() {
	var orderForm = document.forms.orderForm;
	orderForm.elements.orderDate.value = new Date().toDateString();
	orderForm.elements.product.focus();

	// calculate the cost of the order
	calcOrder();
	
	// Event handlers for the web form
	orderForm.elements.product.onchange = calcOrder;
	orderForm.elements.qty.onchange = calcOrder;
	
});

function calcOrder() {
	var orderForm = document.forms.orderForm;
	
	// Calculate the initial cost of the order
	var mIndex = orderForm.elements.product.selectedIndex;
	var mCost = orderForm.elements.product[mIndex].value;
	var qIndex = orderForm.elements.qty.selectedIndex;
	var quantity = orderForm.elements.qty.[qIndex].value;
	
	// Initial cost = cost x quantity
	var initialCost = mCost*quantity;
	orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

	// Calculate the order subtotal
	orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);
	
	// Calculate the sales tax
	var salesTax = 0.05*(initialCost + pCost);
	orderForm.elements.salesTax.value = formatNumber(salesTax, 2);
	
	// Calculate the cost of the total order
	var totalCost = initialCost + pCost + salesTax;
	orderForm.elements.totalCost.value = formatUSCurrency(totalCost);
}

	// store the order details
	orderForm.elements.productName.value = 
		orderForm.elements.product.options[mIndex].text;
		
	orderForm.elements.protectionName.value = 
		document.querySelector('input[name="protection"]:checked').nextSibling.nodeValue;

function formatNumber(val, decimals) {
	return val.toLocaleString(undefined,
	{minimumFractionDigits: decimals,
	maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
	return val.toLocaleString('en-US', 
	{style: "currency", currency: "USD"} );
}