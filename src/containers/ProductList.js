import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Table, Button, ButtonGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { LETTERS } from '../constants';
import '../style/ProductList.css';
import { fetchAllProducts, fetchProducts } from '../actions/producList';
import Loader from 'react-loader-spinner';

import Navbar from '../components/NavBar';

class ProductList extends Component {
    componentWillMount() {
        this.props.fetchAllProducts();
    }

    listProduts() {
        return this.props.products.map((product) => {
            return (
                <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>R$ {product.price.toFixed(2)}</td>
                </tr>
            );
        })
    }

    loadPaginatedProducts(letter) {
        this.props.fetchProducts(letter);
    }

    renderPagination() {
        return LETTERS.split('').map((letter, index) => {
            return <Button key={index} onClick={e => this.loadPaginatedProducts(letter)}>{letter}</Button>
        });
    }

    renderLoading() {
        if (this.props.loading) return <Loader type="Oval" color="#6c757d" height={60} width={60} />;
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="width-90">
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="">Produtos</a></BreadcrumbItem>
                            <BreadcrumbItem active>Listagem de Produtos</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div id="mainContent">
                        <ButtonGroup id="pagination">
                            {this.renderPagination()}
                        </ButtonGroup>
                        <div id="spinner">
                            {this.renderLoading()}
                        </div>
                        <Table hover responsive id="productTable">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Produto</th>
                                    <th>Marca</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.listProduts()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { products, error, loading } = state.productList;

    return { products, error, loading };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchAllProducts, fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);