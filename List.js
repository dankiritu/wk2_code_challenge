document.addEventListener('DOMContentLoaded', () => {
  const itemInput = document.getElementById('item-input');
  const addButton = document.getElementById('add-button');
  const shoppingList = document.getElementById('shopping-list');
  const clearButton = document.getElementById('clear-button');

  let items = [];

  addButton.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
     const newItem = {
     text: itemText,
     purchased: false
    };
     items.push(newItem);
     addItemToDOM(newItem);
     itemInput.value = '';
    }
  });

  clearButton.addEventListener('click', () => {
    items = [];
    shoppingList.innerHTML = '';
  });

  function addItemToDOM(item) {
    const listItem = document.createElement('li');
      
    const itemText = document.createElement('span');
     itemText.textContent = item.text;
     if (item.purchased) {
      itemText.classList.add('purchased');
    }
      
    const purchaseButton = document.createElement('button');
     purchaseButton.textContent = 'Mark Purchased';
     purchaseButton.addEventListener('click', () => {
     item.purchased = !item.purchased;
     itemText.classList.toggle('purchased');
    });

    listItem.appendChild(itemText);
    listItem.appendChild(purchaseButton);
    shoppingList.appendChild(listItem);
  }
});

