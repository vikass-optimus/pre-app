import React, { Component } from "react";
import type { SyntheticEvent } from "react";
import { LoginButton } from "./LoginButton";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 0.5rem;
`;

class LoginClassForm extends Component {

    state = {
        email: "",
        password: "",
    };

    setEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: ev.target.value });
    };

    setPassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: ev.target.value });
    };

    submitForm = (ev: SyntheticEvent) => {
        ev.preventDefault();
        console.log(ev.target, {
            email: this.state.email,
            password: this.state.password,
        });
    };

    render(): React.ReactNode {
        return (
            <StyledForm onSubmit={this.submitForm}>
                <StyledInput
                    onChange={this.setEmail}
                    value={this.state.email}
                    type="email"
                    placeholder="Email"
                    required
                />
                <StyledInput
                    className="border p-2"
                    onChange={this.setPassword}
                    value={this.state.password}
                    type="password"
                    placeholder="Password"
                    required
                />
                <LoginButton text='Login' />
            </StyledForm>
        );
    }
}

export default LoginClassForm;
