var Category = {
  items: [],

}

var Purchase = {
  purchaseTotalCost : function () {
    this.totalCost = this.dollarAmount * this.quantity;
  }
};

$(document).ready(function(){
  $("#category-input").submit(function(event){
    event.preventDefault();
    newCategory = Object.create(Category);
    newCategory.name = $("#category").val();
    $("#category-list ul").append("<li class='clickable'>" + newCategory.name + "</li>");
    $("span#name-category").text(newCategory.name);
    $("div#purchase-list td").empty();

    $("#category").val("");
  });

  $("#item-input").submit(function(event){
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



