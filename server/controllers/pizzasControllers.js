const Pizza = require('../models/pizzaModel');

exports.getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({});

    res.status(200).json({
      success: true,
      pizzas,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
};
