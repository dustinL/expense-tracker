var Category = {
  hasItems: 0, //to determine #purchase-list show/hide
  categoryTotal: function() {
    var total = 0;
    this.items.forEach(function(item){
      total += item.totalCost;
    });
    return total;
  }
}

var Purchase = {
  purchaseTotalCost : function () {
    this.totalCost = this.dollarAmount * this.quantity;
  }
};

$(document).ready(function(){
  var currentCategory;

  // ADD CATEGORY //
  $("#category-input").submit(function(event){
    event.preventDefault();
    var newCategory = Object.create(Category);
    newCategory.items = [];
    newCategory.name = $("#category").val();
    currentCategory = newCategory;
    $("#category-list ul").append("<li class='clickable'>" + newCategory.name + "</li>");
    $("span#name-category").text(currentCategory.name);
    $("div#purchase-list td").empty();
    $("#category").val("");

    // CLICK CATEGORY //
    $(".clickable").last().click(function(event){
      event.preventDefault();
      currentCategory = newCategory;
      $("span#name-category").text(currentCategory.name);
      $("tbody").empty();

      // don't display total list if there are no items
      if (currentCategory.hasItems === 0) {
        $("#purchase-list").hide();
      } else {
        $("#purchase-list").show();
      }
      currentCategory.items.forEach(function(purchase){
        $(".table tbody").append("<tr><td>" + purchase.description + "</td><td>$" + purchase.dollarAmount + "</td><td>" + purchase.quantity + "</td><td>$" + purchase.totalCost + "</td></tr>");
        $("tr#category-total").empty();
        $("tr#category-total").text("$" + currentCategory.categoryTotal());
      });

    });
  });

  // ADD PURCHASES //
  $("#item-input").submit(function(event){
    event.preventDefault();
    currentCategory.hasItems = 1;

    //show the total list because there are items in it now
    $("#purchase-list").show();

    var newPurchase = Object.create(Purchase);
    newPurchase.description = $("#description").val();
    newPurchase.dollarAmount = $("#amount").val();
    newPurchase.quantity = $("#quantity").val();
    newPurchase.purchaseTotalCost();
    currentCategory.items.push(newPurchase);
    console.log(currentCategory);


  $(".table tbody").append("<tr><td>" + newPurchase.description + "</td><td>$" + newPurchase.dollarAmount + "</td><td>" + newPurchase.quantity + "</td><td>$" + newPurchase.totalCost + "</td></tr>");

  //update the total
  $("tr#category-total").text("$" + currentCategory.categoryTotal());

  $("input#description").val("");
  $("input#amount").val("");
  $("input#quantity").val("");

  });

});



