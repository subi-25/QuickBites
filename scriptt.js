const menu = [
  {
    category: "🍔 Burgers",
    items: [
      { name: "Zinger Burger", price: 120, img: "https://indofoody.com/wp-content/uploads/2020/11/chicken-zinger-burger--scaled.jpg"},
      { name: "Tower Burger", price: 180, img: "https://i.pinimg.com/736x/9f/31/38/9f3138efec3b9b48187021486be774a5.jpg" },
      { name: "Veggie Burger", price: 100, img: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg" },
      { name: "Double Crunch", price: 150, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNfspNmfawtdeyLfFZ_89D2AeysrxpNCQwQ&s" },
    ]
  },
  {
    category: "🍗 Chicken & Buckets",
    items: [
      { name: "Hot Wings (6 pcs)", price: 180, img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/30/0/0182146_hot-wings_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1382543453894.webp" },
      { name: "Chicken Bucket (5 pcs)", price: 520 ,img:"https://www.shutterstock.com/image-photo/hot-wings-fried-chicken-pieces-600nw-2496588819.jpg"},
      { name: "Popcorn Chicken", price: 90, img:"https://www.recipetineats.com/tachyon/2025/01/Popcorn-chicken_2-close-up.jpg" },
      { name: "Grilled Chicken", price: 200, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMozkkZv6pQonP3nn1BlXT2uLTWJxeshxYA&s"},
    ]
  },
  {
    category: "🍟 Sides",
    items: [
      { name: "French Fries", price: 80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s" },
      { name: "Cheesy Fries", price: 110, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95PlvlAM-G-CgXSkSNvdhV1q4I0VHHBD7lA&s" },
      { name: "Aloo Gobi", price: 50, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXzGI9vkVxIBqEQs3pExVrrOUE7xj1uFaoQ&s" },
      { name: "Mashed Potatoes", price: 70,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSesa_VMbgYpzuErZHipIznsBkSTB6TzZVw&s" }
    ]
  },
  {
    category: "🥤 Drinks",
    items: [
      { name: "Pepsi", price: 50, img:"https://www.pepsicopartners.com/medias/300Wx300H-1-HYK-39194.jpeg?context=bWFzdGVyfHJvb3R8NDQwNjN8aW1hZ2UvanBlZ3xhR1F5TDJnM1pDOHhNRFkzTWpnME9EWXpNemc0Tmk4ek1EQlhlRE13TUVoZk1TMUlXVXN0TXpreE9UUXVhbkJsWnd8NzhlMWI3YmIyMzdkOTE5OGI1M2RiM2FjODhmZWZiNDg2YzBmMzM5NjlkZDVkZWQ5YjU2YWEwYmNkNzY0YTJmMg"},
      { name: "Mountain Dew", price: 60, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQdWxMfXXd2qQfxVVJzHPiONpOGWKY8KMvw&s" },
      { name: "Mineral Water", price: 30, img:"https://www.bottlingindia.com/wp-content/uploads/2017/12/min-water.jpg" },
      { name: "coke", price: 90,img:"https://5.imimg.com/data5/SELLER/Default/2022/9/RI/RZ/QZ/47977595/300-ml-paper-coke-glasses.jpg" }
    ]
  },
  {
    category: "🍰 Desserts",
    items: [
      { name: "Chocolate Lava Cake", price: 100, img:"https://daddysbakery.in/wp-content/uploads/2019/01/Choco-Lava-Cake.jpg" },
      { name: "Ice Cream Cone", price: 40, img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/4/12/1/FNK_Caramel-Macchiato-Dipped-Ice-Cream-Cones_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1460481963007.webp"},
      { name: "Brownie", price: 90,img:"https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder.jpg" },
      { name: "Sundae", price: 70, img:"https://www.carnation.co.uk/sites/default/files/2020-03/Raspberry_Crush_Sundae%20mobile.jpg" }
    ]
  }
];
function renderOrder() {
  orderListEl.innerHTML = "";
  let total = 0;
  order.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    li.classList.add("added"); 
    orderListEl.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total.toFixed(2);
}


function renderMenu() {
  menuItemsEl.innerHTML = ""; 

  menu.forEach((section) => {
    const header = document.createElement("h3");
    header.textContent = section.category;
    header.style.marginTop = "30px";
    header.style.color = "#d32f2f";
    menuItemsEl.appendChild(header);

    section.items.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "item";

      div.innerHTML = `
        ${item.img ? `<img src="${item.img}" alt="${item.name}" />` : ""}
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)}</p>
          <button onclick="addToOrderByName('${item.name}')">Add</button>
        </div>
      `;
      menuItemsEl.appendChild(div);
    });
  });
}

function addToOrderByName(name) {
  for (const section of menu) {
    const item = section.items.find(i => i.name === name);
    if (item) {
      order.push(item);
      break;
    }
  }
  renderOrder();
}

const menuItemsEl = document.getElementById("menuItems");
const orderListEl = document.getElementById("orderList");
const totalEl = document.getElementById("total");
let order = [];

renderMenu();

function placeOrder() {
  if (order.length === 0) {
    alert("Your order is empty!");
    return;
  }

  let orderSummary = "You ordered:\n";
  let total = 0;

  order.forEach(item => {
    orderSummary += `- ${item.name}: $${item.price.toFixed(2)}\n`;
    total += item.price;
  });

  orderSummary += `\nTotal: $${total.toFixed(2)}`;

  alert(orderSummary);
    order = [];
  renderOrder();
}
 