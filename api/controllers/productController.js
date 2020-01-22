const Product = require('./../models/ProductSchema');

var connectionString = "postgres://postgres:cilrecep.3@localhost:5432/Trial"; // TODO: Bunu nasıl gizleyelim?
const { Client } = require('pg');
const client = new Client({
  connectionString: connectionString
});
client.connect();

function GetProduct(id) {

  if (id == null)
    var product = Product.findAll();
  else {
    var product = Product.findAll(
      {
        where: {
          id: id
        }
      }
    );
  }

  return new Promise((resolve, reject) => {
    product.then(function (result, err) {
      err ? reject(err) : resolve(JSON.stringify(result));
    });
  });

}

function CreateOrUpdateProduct(product) {

  var product = Product.create({
    sku: product.sku,
    name: product.name,
    company_id: product.company_id,
    created_on: product.created_on,
    last_modified: product.last_modified
  });

  return new Promise((resolve, reject) => {
    product.then(function (result, err) {
      err ? reject(err) : resolve(JSON.stringify(result));
    });
  });

}

function DeleteProduct(id) {

  var product = Product.destroy({
    where: {
      id: id
    }
  });

  return new Promise((resolve, reject) => {
    product.then(function (result, err) {
      err ? reject(err) : resolve(JSON.stringify(result));
    });
  });

}

module.exports.GetProduct = GetProduct;
module.exports.CreateOrUpdateProduct = CreateOrUpdateProduct;
module.exports.DeleteProduct = DeleteProduct;