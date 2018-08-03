import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../Login.css';

class Login extends Component {
    render() {
        const imageUrl = require(`../background.jpg`);

        return (
            <div className="page" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div style={{ padding: 20 }}>
                    <Form className="loginForm">
                        <h3 id="headerLogin">Bem vindo ao RDC!</h3>
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" id="login" placeholder="Digite o login" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Senha</Label>
                            <Input type="password" name="password" id="password" placeholder="Digite sua senha" />
                        </FormGroup>
                        <div id="submitBtn">
                            <Button outline color="secondary">Entrar</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;