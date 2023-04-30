

"use strict";

/* 

   The item array contains the ID numbers of the items ordered by the customer
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/

var mIndex = [];

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

