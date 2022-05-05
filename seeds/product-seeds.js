const { Product } = require('../models');

const productData = [
  {
    product_name: 'Graphic T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 25.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Jeans',
    price: 50.0,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Mini Dress',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
