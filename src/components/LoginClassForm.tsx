import React, { Component } from "react";
import type { SyntheticEvent } from "react";

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
            <form onSubmit={this.submitForm} className="flex flex-col gap-4">
                <input
                    className="border p-2"
                    onChange={this.setEmail}
                    value={this.state.email}
                    type="email"
                    placeholder="Email"
                    required
                />
                <input
                    className="border p-2"
                    onChange={this.setPassword}
                    value={this.state.password}
                    type="password"
                    placeholder="Password"
                    required
                />
                <button className="bg-gray-500 text-white p-2" type="submit">
                    Login
                </button>
            </form>
        );
    }
}

export default LoginClassForm;
