var Purchase = {
  purchaseTotalCost : function () {
    this.totalCost = this.dollarAmount * this.quantity;
  }
};

$(document).ready(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();
    newPurchase = Object.create(Purchase);
    newPurchase.description = $("#description").val();
    newPurchase.dollarAmount = $("#amount").val();
    newPurchase.quantity = $("#quantity").val();
    newPurchase.purchaseTotalCost();

  $(".table tbody").append("<tr><td>" + newPurchase.description + "</td><td>$" + newPurchase.dollarAmount + "</td><td>" + newPurchase.quantity + "</td><td>$" + newPurchase.totalCost + "</td></tr>");

  $("input#description").val("");
  $("input#amount").val("");
  $("input#quantity").val("");


  });
});



