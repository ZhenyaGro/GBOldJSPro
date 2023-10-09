class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `
      <div class="goods-item">
        <h3>${this.product_name}</h3>
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

  fetchGoods(callback) {
    service(url, (data) => {
      this.items = data
      callback();
    });
  }

  render() {
    let listHtml = '';
    this.items.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  calculateCost() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

function service(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    const result = JSON.parse(xhr.response);
    callback(result);
  };
  xhr.send();
}

const URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = '/catalogData.json';
const url = `${URL}${GOODS}`

const list = new GoodsList();
list.fetchGoods(() => list.render());


console.log(list.calculateCost());