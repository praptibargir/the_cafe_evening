
document.getElementById('drinks').onchange = function() {
    handleDrinkSelection(this);
};

document.getElementById('drink-quantity').onchange = function() {
    handleDrinkQuantityChange(this.value);
};

document.getElementById('food').onchange = function() {
    handleFoodSelection(this);
};

document.getElementById('food-quantity').onchange = function() {
    handleFoodQuantityChange(this.value);
};

document.getElementById('submitOrder').onclick = function() {
    handleSubmitOrder();
};

document.getElementById('placeOrder').onclick = function() {
    handlePlaceOrder();
};

let orders = JSON.parse(localStorage.getItem('orders')) || [];
let selectedDrink = null;
let selectedFood = null;
let drinkQuantity = 0;
let foodQuantity = 0;

const prices = {
    "Cold Coffee": 80,
    "Mocktail": 120,
    "Pizza": 250,
    "Burger": 350,
    "Rolls": 150,
    "Fries": 150
};

function handleDrinkSelection(selectElement) {
    const item = selectElement.value;
    if (item) {
        selectedDrink = item;
        document.getElementById('drink-quantity-section').style.display = 'block';
    } else {
        document.getElementById('drink-quantity-section').style.display = 'none';
    }
}

function handleDrinkQuantityChange(quantity) {
    if (quantity > 0) {
        drinkQuantity = parseInt(quantity);
        document.getElementById('food-section').style.display = 'block';
    }
}

function handleFoodSelection(selectElement) {
    const item = selectElement.value;
    if (item) {
        selectedFood = item;
        document.getElementById('food-quantity-section').style.display = 'block';
    } else {
        document.getElementById('food-quantity-section').style.display = 'none';
    }
}

function handleFoodQuantityChange(quantity) {
    if (quantity > 0) {
        foodQuantity = parseInt(quantity);
    }
}

function handleSubmitOrder() {
    if (selectedDrink && drinkQuantity > 0) {
        const drinkOrder = {
            item: selectedDrink,
            quantity: drinkQuantity,
            cost: prices[selectedDrink] * drinkQuantity
        };
        orders.push(drinkOrder);
    }

    if (selectedFood && foodQuantity > 0) {
        const foodOrder = {
            item: selectedFood,
            quantity: foodQuantity,
            cost: prices[selectedFood] * foodQuantity
        };
        orders.push(foodOrder);
    }

    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
    selectedDrink = null;
    selectedFood = null;
    drinkQuantity = 0;
    foodQuantity = 0;
    document.getElementById('drinks').value = '';
    document.getElementById('food').value = '';
    document.getElementById('drink-quantity-section').style.display = 'none';
    document.getElementById('food-section').style.display = 'none';
    document.getElementById('food-quantity-section').style.display = 'none';
}

function renderOrders() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.item}</td>
            <td>${order.quantity}</td>
            <td>₹${order.cost}</td>
            <td><button class="btn btn-danger" onclick="deleteOrder(${index})">Delete</button></td>
        `;
        orderList.appendChild(row);
    });
}

function deleteOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
}

function handlePlaceOrder() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;

    if (orders.length > 0) {
        document.getElementById('orderMessage').textContent = `Dear ${name}, your order is placed.`;
        
        const summaryList = document.getElementById('summaryList');
        summaryList.innerHTML = '';
        orders.forEach((order, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${order.item}</td>
                <td>${order.quantity}</td>
                <td>₹${order.cost}</td>
            `;
            summaryList.appendChild(row);
        });

        document.getElementById('orderSummary').style.display = 'block';
        orders = [];
        localStorage.setItem('orders', JSON.stringify(orders));
        renderOrders();
        document.getElementById('orderForm').reset();
    } else {
        alert('Please add items to your order.');
    }
}

window.onload = function() {
    renderOrders();
};