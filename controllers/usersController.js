const User = require('../models/User');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Get users success",
      data: users
    });
  } catch (error) {
    res.status(500).json({  
      message: "Get users failed",
      data: error
    });
  }
};

// Save a user
const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "Save user success",
      data: savedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Save user failed",
      data: error
    });
  }
};

module.exports = {
  getUsers,
  saveUser
};
