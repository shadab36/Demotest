$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCart.feature");
formatter.feature({
  "line": 2,
  "name": "Adding product on the cart",
  "description": "",
  "id": "adding-product-on-the-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Addproductchek"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Adding product into the card",
  "description": "",
  "id": "adding-product-on-the-cart;adding-product-into-the-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Hover on primary navigation items.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click any specfic item.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Filter the item to low price.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Select a item from the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Add the product into the cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on the Add to cart bag.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select the country from drop down.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on proceed to checkout button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout_step.hover_on_primary_navigation()"
});
formatter.result({
  "duration": 6301193778,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_step.click_any_specfic_item()"
});
formatter.result({
  "duration": 8431593333,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_step.Filter_from_low()"
});
