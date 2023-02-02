"use strict";

// ClassExtends
// Jan 25
// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.
// Зміниться метод повернути інформацію про товар.

class Product {
  constructor(name, price, currency, quantity) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("name must be string");
    }
    if (value.length === 0) {
      throw new RangeError("can not be empty");
    }
    this._name = value;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      throw new TypeError("price must be number");
    }
    if (value < 0) {
      throw new RangeError("price can not be negative");
    }
    this._price = value;
  }

  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (typeof value !== "string") {
      throw new TypeError("currency must be string");
    }
    if (value.length === 0) {
      throw new RangeError("can not be emplty");
    }
    this._currency = value;
  }

  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (typeof value !== "number") {
      throw new TypeError("quantity must be number");
    }
    if (value < 0) {
      throw new RangeError("quantity can not be negative");
    }
    this._quantity = value;
  }

  // і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

  productInfo() {
    return `Product name: ${this.name}, price: ${this.price} ${this.currency}, quantity: ${this.quantity}`;
  }
  buyProduct(value) {
    if (value < 0) {
      throw new RangeError("amount can not be negative");
    } else if (this.quantity - value < 0) {
      throw new RangeError("not enough quantity");
    } else {
      this.quantity -= value;
    }
    return value * this.price;
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, currency, quantity, weight) {
    super(name, price, currency, quantity);
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(value) {
    if (value <= 0) {
      throw new RangeError("weight cannot be 0 or less");
    }
    this._weight = value;
  }
  productInfo() {
    return `Physical product name: ${this.name}, price: ${this.price} ${this.currency}, quantity: ${this.quantity}, weight: ${this._weight}`;
  }
}

class VirtualProduct extends Product {
  constructor(name, price, currency, quantity, memorySize) {
    super(name, price, currency, quantity);
    this.memorySize = memorySize;
  }
  get memorySize() {
    return this._memorySize;
  }
  set memorySize(value) {
    if (value <= 0) {
      throw new RangeError("memory cannot be 0 or less");
    }
    this._memorySize = value;
  }
  productInfo() {
    return `Virtual product name: ${this.name}, price: ${this.price} ${this.currency}, quantity: ${this.quantity}, memory: ${this.memorySize}`;
  }
}

try {
  const product1 = new PhysicalProduct("Coffee", 50, "USD", 30, 1);
  console.log(product1.buyProduct(10));
  const product2 = new VirtualProduct("Google Drive", 10, "USD", 5, 128);
  console.log(product1.buyProduct(2));
  console.log(product2.buyProduct(4));
  console.log(product1.productInfo());
  console.log(product2.productInfo());
} catch (error) {
  console.log(error);
}