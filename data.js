const items = [
  {
    id: 1,
    title: "Shadow Timepiece",
    price: 5999,
    description: "A sleek black watch.",
    img: "./img/item/1.png",
  },
  {
    id: 2,
    title: "Gilded Timekeeper",
    price: 8000,
    description: "A black watch with gold.",
    img: "./img/item/2.png",
  },
  {
    id: 3,
    title: "Midnight Gold watch",
    price: 4000,
    description: "A black watch with gold.",
    img: "./img/item/3.png",
  },
  {
    id: 4,
    title: "Lunar Chronometer",
    price: 12000,
    description: "A silver and gold.",
    img: "./img/item/4.png",
  },
  {
    id: 5,
    title: "Snowy Chronograph",
    price: 4800,
    description: "A clean and simple white.",
    img: "./img/item/5.png",
  },
  {
    id: 6,
    title: "Leatherback keeper",
    price: 3400,
    description: "Its leather strap adds.",
    img: "./img/item/6.png",
  },
  {
    id: 7,
    title: "Mahogany Straps",
    price: 8399,
    description: "Its leather strap and simple.",
    img: "./img/item/7.png",
  },
  {
    id: 8,
    title: "Midnight Leather",
    price: 5999,
    description: "Its leather strap and gold.",
    img: "./img/item/8.png",
  },
];

let totalPrice = 0;

function getItemById(id) {
  return items.find((item) => item.id === id);
}

let cartItems = {
  cartArr: [],

  arr: [
    {
      id: 1,
      title: "Shadow Timepiece",
      price: 5999,
      description: "A sleek black watch.",
      img: "./img/item/1.png",
    },
    {
      id: 2,
      title: "Gilded Timekeeper",
      price: 8000,
      description: "A black watch with gold.",
      img: "./img/item/2.png",
    },
    {
      id: 3,
      title: "Midnight Gold watch",
      price: 4000,
      description: "A black watch with gold.",
      img: "./img/item/3.png",
    },
    {
      id: 4,
      title: "Lunar Chronometer",
      price: 12000,
      description: "A silver and gold.",
      img: "./img/item/4.png",
    },
    {
      id: 5,
      title: "Snowy Chronograph",
      price: 4800,
      description: "A clean and simple white watch.",
      img: "./img/item/5.png",
    },
    {
      id: 6,
      title: "Leatherback keeper",
      price: 3400,
      description: "Its leather strap adds a touch.",
      img: "./img/item/6.png",
    },
    {
      id: 7,
      title: "Mahogany Straps",
      price: 8399,
      description: "Its leather strap and simple.",
      img: "./img/item/7.png",
    },
    {
      id: 8,
      title: "Midnight Leather",
      price: 5999,
      description: "Its leather strap and gold.",
      img: "./img/item/8.png",
    },
  ],

  item_f() {
    const cart = document.querySelector("#cart");
    const itemCount = document.querySelector("#item-count");
    let itemInCart = "";

    cartItems.cartArr.forEach((item) => {
      itemInCart += `<li>
          <div class="d-flex gap-4 align-items-center">
              <div>
                  <img
                      class="cart-img"
                      src=${item.image}
                      alt="item-1"
                  />
              </div>

              <div class="d-flex align-items-center gap-3">
                  <div class="d-grid gap-1">
                      <h5 class="fw-light f-sm">${item.name}</h5>
                      <p class="normal-font f-sm text-dark" id="priceTotal-${item.id}">₱${item.price}</p>
                      <button class="text-dark fw-light text-decoration-underline remove" onclick={cartItems.deleteItem()}>Remove</button>
                  </div>
              </div>

                <div class="border d-flex align-items-center gap-3 p-1">
                    <button id="decrement" onclick="decrement('${item.id}', ${item.price})" style="background: #fff;">
                        <ion-icon name="remove-sharp"></ion-icon>
                    </button>
                    <h6 class="normal-font m-0" id="quantity-${item.id}">${item.quantity}</h6>
                    <button id="increment-btn" onclick="increment('${item.id}', ${item.price})" style="background: #fff;">
                        <ion-icon name="add-sharp"></ion-icon>
                    </button>
                </div>
          </div>
      </li>`;

      itemCount.innerHTML = this.cartArr.length + " item";
    });

    cart.innerHTML = itemInCart;

    const length =
      cartItems.cartArr.length == 0
        ? (document.querySelector("#dot").style.display = "none")
        : (document.querySelector("#dot").style.display = "block");
  },

  deleteItem(index) {
    cartItems.cartArr.splice(index, 1);
    cartItems.item_f();

    updateTotal();
  },

  findItemIndexById(id) {
    return this.cartArr.findIndex((item) => item.id === id);
  },
};

const updateTotal = () => {
  let overAllCost = 0;

  cartItems.cartArr.forEach((item) => {
    overAllCost += item.price;
  });

  document.querySelector("#total").innerHTML = `Total: ₱${overAllCost}`;
};

function increment(id, price) {
  const index = cartItems.findItemIndexById(id);

  cartItems.cartArr[index].quantity += 1;
  cartItems.cartArr[index].price += items.reduce((total, item) => {
    if (id.includes(item.id)) {
      return total + item.price;
    }
    return total;
  }, 0);

  cartItems.item_f();
  updateTotal();
}

function decrement(id, price) {
  const index = cartItems.findItemIndexById(id);

  if (cartItems.cartArr[index].quantity > 1) {
    cartItems.cartArr[index].quantity -= 1;
    cartItems.cartArr[index].price -= items.reduce((total, item) => {
      if (id.includes(item.id)) {
        return total + item.price;
      }
      return total;
    }, 0);
  } else {
    cartItems.deleteItem(index);
  }
  cartItems.item_f();
  updateTotal();
}

const addToCart = (name, price, img, id) => {
  const index = cartItems.findItemIndexById(id);

  if (index !== -1) {
    cartItems.cartArr[index].quantity += 1;
    cartItems.cartArr[index].price = price * cartItems.cartArr[index].quantity;
  } else {
    cartItems.cartArr.push({
      name: name,
      price: price,
      image: img,
      id: id,
      quantity: 1,
    });
  }

  updateTotal();

  const alertContent = `<div class="alert rounded-0 p-5 alert-dismissible fade show text-light" role="alert">
  <h6 class="text-center">Success! Your item has been added to the cart.</h6> 
  </div>`;

  const alertContainer = document.getElementById("alert-container");
  alertContainer.innerHTML = alertContent;

  setTimeout(() => {
    alertContainer.innerHTML = "";
  }, 400);

  cartItems.item_f();
};

const row = document.querySelector("#row");

items.map((item) => {
  const card = `
  <div class="col-6 col-md-4 col-lg-3">
  <div class="card rounded-0">
  <div>
    <img src="${item.img}" class="card-img-top" alt="..." />
  </div>
    <div class="card-body p-0 mt-3">
      
        <h5 class="card-title text-center" id="title-1">${item.title}</h5>
        
      
      <p class="card-text text-secondary desc normal-font text-center">
        ${item.description}
      </p>
      <h6
          class="text-dark fs-5 text-center mt-3"
          id="price"
          style="
            font-family: 'Courier New', Courier, monospace;
            font-weight: 600;
          "
          >₱${item.price}</
        >
      <div class="d-flex justify-content-center mt-4">
        <button
          class="btn btn-outline-dark py-2 w-100 rounded-0 border"
          onclick="addToCart('${item.title}', ${item.price}, '${item.img}', '${item.id}')"
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  </div>
</div>
  `;

  row.innerHTML += card;
});

cartItems.item_f();
