import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Loader from 'react-loader-spinner';
import { loginUser, loginChanged, passwordChanged } from '../actions/auth';
import '../style/Login.css';

class Login extends Component {
    onLoginChange(event) {
        console.log(event.target.value);
        this.props.loginChanged(event.target.value);
    }

    onPasswordChange(event) {
        this.props.passwordChanged(event.target.value);
    }

    renderButton() {
        if(this.props.loading) return <Loader type="Oval" color="#6c757d" height={40} width={40} />;

        return <Button type="submit" outline color="secondary">Entrar</Button>
    }

    onFormSubmit(event) {
        event.preventDefault();
        const { login, password } = this.props;

        this.props.loginUser(login, password);
    }

    render() {
        const imageUrl = require(`../background.jpg`);

        return (
            <div className="page" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div style={{ padding: 20 }}>
                    <Form className="loginForm" onSubmit={this.onFormSubmit.bind(this)}>
                        <h3 id="headerLogin">Bem vindo ao RDC!</h3>
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" id="login" placeholder="Digite seu login" value={this.props.login} onChange={this.onLoginChange.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Senha</Label>
                            <Input type="password" name="password" id="password" placeholder="Digite sua senha" value={this.props.password} onChange={this.onPasswordChange.bind(this)} />
                        </FormGroup>
                        <div id="errorMsg">
                            {this.props.error}
                        </div>
                        <div id="submitBtn">
                            {this.renderButton()}
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { login, password, error, loading } = state.auth;

    return { login, password, error, loading };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ loginUser, loginChanged, passwordChanged }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);