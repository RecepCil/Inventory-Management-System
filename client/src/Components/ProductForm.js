import React, { Fragment, Component } from 'react';
import Button from './Button';

class ProductFormElement extends Component {

    createNewProduct(sku, name) {

        // get date
        let date = new Date().getFullYear()+ "/" + (new Date().getMonth() + 1)+ "/" + new Date().getDate();

        // get data from API
        const response = fetch("http://localhost:3001/product/", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "sku": sku,
            "name": name,
            "company_id": 0,
            "created_on": date,
            "last_modified": date
          })
        }).then(res => { return (res.json()) })
          .then(
            this.refs.sku.value = null,
            this.refs.name.value = null
            );

            alert("New Product is successfully created!");
      }

    handleSubmit(e) {
        e.preventDefault()
         let sku = this.refs.sku.value
         let name = this.refs.name.value

        this.createNewProduct(sku, name);
      }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>
                        Add New Product!
                    </h3>
                    SKU: <input type="text" ref="sku" placeholder="enter the sku" /> <br />
                    Name: <input type="text" ref="name" placeholder="enter the name" /> <br />
                    <Button title="Submit" />
                </form>
            </Fragment>
         )
     }
 }

export default ProductFormElement;