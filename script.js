class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
    `
  }
}

class GoodsList {
  items = [];

  constructor() {
    this.items = [];
  }

  fetchGoods() {
    this.items = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 }
    ]
  }

  render() {
    let listHtml = '';
    this.items.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  calculateCost() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

class Cart {
  constructor() {

  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

console.log(list.calculateCost());