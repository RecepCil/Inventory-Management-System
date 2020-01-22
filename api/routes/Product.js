const express = require("express");
const router = express.Router();
const { GetProduct, CreateOrUpdateProduct, DeleteProduct } = require('../controllers/productController');

// /product – GET all products
router.get("/", async (req, res, next) => {

  GetProduct(req.params.id).then(data => {
    const product = JSON.parse(data);
    res.send({
      status: "success",
      data: product
    })
    return data;
  }).catch(err => console.log(err))

});

// /product/:id – GET a product by Id
router.get("/:id", async (req, res, next) => {

  GetProduct(req.params.id).then(data => {
    const product = JSON.parse(data);
    res.send({
      status: "success",
      data: product
    })
    return data;
  }).catch(err => console.log(err))

})


// /product – POST a product
router.post("/", async (req, res, next) => {

  CreateOrUpdateProduct(req.body).then(data => {
    const product = JSON.parse(data);
    res.send({
      status: "success",
      data: product
    })
    return data;
  }).catch(err => console.log(err))

});

// /product/:id – UPDATE a product by Id
router.put("/:id", async (req, res, next) => {

  const product = CreateOrUpdateProduct(req.body, req.params.id);
  product
    .then(product => {
      return res.status(201).send({
        status: "success",
        data: product
      });
    })
    .catch(err => {
      return res.status(400).send({
        status: "fail",
        data: {
          error: err.message,
          errorMessage: "Girilen bilgileri tekrar kontrol edin."
        }
      });
    });

});

// /product/:id – DELETE a product by Id
router.delete("/:id", async (req, res, next) => {

  DeleteProduct(req.params.id).then(data => {
    const employee = JSON.parse(data);
    res.send({
      status: "success",
      data: "Item with Id " + req.params.id + " is deleted successfully!"
    })
    return data;
  })

});

module.exports = router;