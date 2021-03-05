var calculate = document.getElementById("calculate");
var nameInput = document.getElementById("name__input");
var customIngredient = document.getElementsByClassName("custom-ingredient");
var total = document.getElementById("total");
var coupon = document.getElementById('coupon__input');
// coupons array
var coupons = ["BestDietEva", "mustard-friendly", "junk101", "cheeseaholic"];
console.log(coupons);

// 1. adding the event on the button
calculate.addEventListener("click",
  function() {
    // console.log(calculate);
    //2. control on the input name of the burger
    if (nameInput.value != "") {
      // console.log(nameInput.value);
      // 3. checking which element is selected through the list
      var sum = 50;
      for (var i = 0; i < customIngredient.length; i++) {
        if (customIngredient[i].checked) {
          sum += parseInt(customIngredient[i].value);
        }
      }
      // 4. adding 20% discount if the user has a coupon
      if (coupons.includes(coupon.value)) {
        sum -= sum * 0.2;
        // 5.bonus - making sure the user cannot use the same coupon twice
        var indexCoupon = coupons.indexOf(coupon.value);
        console.log(indexCoupon);
        coupons.splice(indexCoupon, 1);
        console.log(coupons);
      }
      // 5. printing on screen the total sum
      total.innerHTML = sum.toFixed(2);
    } else {
      alert("Name your burger first!");
    }
  }
);
