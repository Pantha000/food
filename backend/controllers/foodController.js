const Food = require("../models/foodModel.js");
const ApiFetaures = require("../utils/apiFeatures.js");
const catchAsyncError = require("../middlewares/catchAsyncError.js");

//Create Product ---Admin
exports.createProduct = catchAsyncError(async (req, res) => {
  await Food.create(req.body);
  res.status(201).json({
    success: true,
    message: "Successfully Product Created",
  });
});

//Get All Product
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler("Temporary Error", 500));

  const apifeatures = new ApiFetaures(Food.find(), req.query).search().filter();
  const products = await apifeatures.query;
  res.status(200).json({
    success: true,
    foods: products,
  });
});

//Get Single Product
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  let product = await Food.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    food: product,
  });
});

//Update Product --Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Food.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  } else {
    product = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      food: product,
    });
  }
});

//Delete Product --Admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  let product = await Food.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  } else {
    await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product Sucessfully Deleted",
    });
  }
});
