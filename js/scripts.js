var Category = {
  items: [],
}

var Purchase = {
  purchaseTotalCost : function () {
    this.totalCost = this.dollarAmount * this.quantity;
  }
};

var currentCategory;

$(document).ready(function(){
  $("#category-input").submit(function(event){
    event.preventDefault();
    newCategory = Object.create(Category);
    newCategory.name = $("#category").val();
    currentCategory = newCategory.name;
    $("#category-list ul").append("<li class='clickable'>" + newCategory.name + "</li>");
    $("span#name-category").text(currentCategory);
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



