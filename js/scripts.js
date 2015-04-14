var thisCategory = {}

$(document).ready(function() {
  $("form#add-new-product").hide();

  $("form#new-category").submit(function(event) {
    event.preventDefault();

    var inputtedCategoryTitle = $("input#new-category-title").val();
    var newCategory = { categoryTitle: inputtedCategoryTitle, products: [] }

    $("input#new-category-title").val("");

    $("ul#categories").append("<li><span class='category-title'>" + newCategory.categoryTitle + "</span></li>");

    $(".category-title").last().click(function() {

      $("#show-categories").show();
      $("#show-categories h4").text(newCategory.categoryTitle);
      $("form#add-new-product").show();

      $("ul#products").append("<li><span class='product'>" + newProduct.productName + "</span></li>");
      newCategory.products.forEach(function(product) {
        $(".product").last().click(function() {

        $("#products").show();
        $(".price").text(product.productPrice);
        $(".name").text(product.productName);
        $(".description").text(product.productDescription);

      $("form#add-new-product").off("submit")
      $("form#add-new-product").on("submit", function(event) {
        event.preventDefault();

        var inputtedProductName = $("input#new-name").val()
        var inputtedProductDescription = $("input#new-description").val()
        var inputtedProductPrice = $("input#new-price").val()

        $(".new-product").each(function() {
          var newProduct = { productName: inputtedProductName, productDescription: inputtedProductDescription, productPrice: inputtedProductPrice }
          newCategory.products.push(newProduct);
        });
      
        $("input#add-new-product").val("");

        $("ul#products").text("");
        $("input#new-name").val(" ")
        $("input#new-description").val(" ")
        $("input#new-price").val(" ")

        newCategory.products.forEach(function(product) {
          $("ul#products").append("<li><span class='update-product'>" + product.productName + product.productDescription + product.productPrice + "</span></li>");
          $(".update-product").last().click(function() {
            $("#show-products").show();
          });
        });
      });

    });
  });
});
