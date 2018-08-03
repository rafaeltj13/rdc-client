import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ProductList extends Component {
    productsMock = [
        {
            name: "Teste 1",
            brand: "Testando 1",
            price: 21.7
        },
        {
            name: "Testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee 2",
            brand: "Testando 2",
            price: 8
        },
        {
            name: "Teste 3",
            brand: "Testando 1",
            price: 11.35
        }
    ];

    listProduts() {
        return this.productsMock.map((product, index) => {
            console.log(product);
            return(
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                </tr>
            );
        })
    }
    
    render() {
        return (
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>nº</th>
                        <th>Produto</th>
                        <th>Marca</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {this.listProduts()}
                </tbody>
            </Table>
        );
    }
}

export default ProductList;