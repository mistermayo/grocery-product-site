var thisCategory = {}

$(document).ready(function() {

  $("form#new-category").submit(function(event) {
    event.preventDefault();

    var inputtedCategoryTitle = $("input#new-category-title").val();
    var newCategory = { categoryTitle: inputtedCategoryTitle, products: [] }

    $("input#new-category-title").val("");

    $("ul#categories").append("<li><span class='category-title'>" + newCategory.categoryTitle + "</span></li>");

    $(".category-title").last().click(function() {

      $("#show-categories").show();
      $("#show-categories h4").text(newCategory.categoryTitle);


      $("ul#products").text("");
      newCategory.products.forEach(function(product) {
        $("ul#products").append("<li><span class= 'update-product'>" + product.productName + product.productDescription + product.productPrice + "</span></li>")
      });


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
