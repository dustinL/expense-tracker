describe("Purchase", function(){
  describe("purchaseTotalCost", function(){
    it("multiplies amount by the quantity to get the total cost", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.dollarAmount = 10;
      testPurchase.quantity = 5;
      testPurchase.purchaseTotalCost();
      testPurchase.totalCost.should.equal(50);
    });
  });
});
