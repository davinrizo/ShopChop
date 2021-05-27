import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found!');
  }
});

export { getProduct, getProductById };