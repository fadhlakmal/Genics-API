const Product = require('../models/Product');
const User = require('../models/User');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Get products success",
      data: products
    });
  } catch (error) {
    res.status(500).json({  
      message: "Get products failed",
      data: error
    });
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.status(201).json({
      message: "Save product success",
      data: savedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: "Save product failed",
      data: error
    });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Update product success",
      data: updatedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: "Update product failed",
      data: error
    });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Delete product success",
      data: deletedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete product failed",
      data: error
    });
  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
};
