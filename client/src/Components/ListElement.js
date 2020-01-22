import React, { Fragment, useState, Component } from 'react';
import { connect } from "react-redux";
import { fetchAllProducts } from '../redux/actions';

class ListElement extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        props.fetchAllProductsFn();
    }

    componentDidMount() {

        fetchAllProducts().then(
            result => {
                result.map((item) => {
                    this.setState({
                        products: [...this.state.products, (<li key={item.id} >{item.name}</li>)]
                    })
                })
            })
    }

    render() {
        return (
            <ul>
                {this.state.products}
            </ul>
        );
    }
}

// Note to self: search what dispatch do again.

function mapDispatchToProps() {
    return {
        fetchAllProductsFn: () => fetchAllProducts()
    };
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);