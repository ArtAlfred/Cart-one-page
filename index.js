let cartItems = {
  cartArr: [],

  item_f() {
    const cart = document.querySelector("#cart");
    let itemInCart = "";
    let overAllCost = 0;

    cartItems.cartArr.forEach((item) => {
      itemInCart += `<li> 
        <div class="d-flex gap-2 align-items-center justify-content-between">
            <div>
                <img
                    class="cart-img"
                    src=${item.image}
                    alt="item-1"
                />
            </div>

            <div class="d-flex align-items-center gap-3">
                <div class="d-grid gap-2">
                    <h2 class="fs-6 fw-bold">${item.item}</h2>
                    <p class="fs-6 normal-font text-warning">$ ${item.price}</p>
                </div>
            </div>

            <div class=''>
                <button class="btn btn-danger text-light" onclick={cartItems.deleteItem()}>Delete</button>
            </div>
        </div> 
    </li>`;

      overAllCost += item.price;
    });

    cart.innerHTML = itemInCart;
    document.querySelector("#total").innerHTML = `Total: ₱${overAllCost}`;

    const length =
      cartItems.cartArr.length == 0
        ? (document.querySelector("#dot").style.display = "none")
        : (document.querySelector("#dot").style.display = "block");
  },

  deleteItem(index) {
    cartItems.cartArr.splice(index, 1);
    cartItems.item_f();
  },
};

cartItems.item_f();

const addItemToCart = (buttonId, titleId, price, image) => {
  const button = document.querySelector(`#${buttonId}`);
  const titleEl = document.querySelector(`#${titleId}`);

  if (!button || !titleEl) {
    return console.log(
      //   `Could not find element with ID ${buttonId} or ${titleId}`
      `Hello`
    );
  }

  button.addEventListener("click", () => {
    const title = titleEl.innerText;
    cartItems.cartArr.push({ item: title, price: price, image: image });
    cartItems.item_f();
  });
};

addItemToCart();

// BTN 1
addItemToCart("btn_1", "title-1", 5999, "./img/item/1.png");
// BTN 2
addItemToCart("btn_2", "title-2", 3700, "./img/item/2.png");
// BTN 3
addItemToCart("btn_3", "title-3", 8000, "./img/item/3.png");
// BTN 4
addItemToCart("btn_4", "title-4", 12000, "./img/item/4.png");
// BTN 5
addItemToCart("btn_5", "title-5", 4800, "./img/item/5.png");
// BTN 6
addItemToCart("btn_6", "title-6", 3400, "./img/item/6.png");
// BTN 7
addItemToCart("btn_7", "title-7", 8300, "./img/item/7.png");
// BTN 8
addItemToCart("btn_8", "title-8", 9700, "./img/item/8.png");
