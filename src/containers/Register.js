import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import { loginChanged, passwordChanged, confirmPasswordChanged, registerUser } from '../actions/register';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Loader from 'react-loader-spinner';
import '../style/Login.css';

class Register extends Component {
    onLoginChange(event) {
        this.props.loginChanged(event.target.value);
    }

    onPasswordChange(event) {
        this.props.passwordChanged(event.target.value);
    }

    onConfirmPasswordChange(event) {
        this.props.confirmPasswordChanged(event.target.value);
    }

    renderButton() {
        if (this.props.loading) return <Loader type="Oval" color="#6c757d" height={40} width={40} />;

        return <Button type="submit" outline color="secondary">Cadastrar-se</Button>
    }

    onFormSubmit(event) {
        event.preventDefault();
        const { login, password, confirmPassword } = this.props;

        this.props.registerUser(login, password, confirmPassword);
    }

    render() {
        const imageUrl = require(`../background.jpg`);

        return (
            <div className="page" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div style={{ padding: 20 }}>
                    <Form className="loginForm" onSubmit={this.onFormSubmit.bind(this)}>
                        <h3 id="headerLogin">Cadastro</h3>
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" id="login" placeholder="Digite seu login" value={this.props.login} onChange={this.onLoginChange.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Senha</Label>
                            <Input type="password" name="password" id="password" placeholder="Digite sua senha" value={this.props.password} onChange={this.onPasswordChange.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirmar Senha</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua senha" value={this.props.confirmPassword} onChange={this.onConfirmPasswordChange.bind(this)} />
                        </FormGroup>
                        <div id="errorMsg">
                            {this.props.error}
                        </div>
                        <div>
                            <p>Já possui uma conta? <Link to="/login">Entre aqui!</Link></p>
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
    const { login, password, confirmPassword, error, loading } = state.register;

    return { login, password, confirmPassword, error, loading };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ loginChanged, passwordChanged, confirmPasswordChanged, registerUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);