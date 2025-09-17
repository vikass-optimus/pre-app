import { useState } from "react";
import type { SyntheticEvent } from "react";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submitForm = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        console.log(target, { email, password });
    };

    return <form onSubmit={submitForm} className="flex flex-col gap-4">
        <input className="border p-2" onChange= {(ev) => setEmail(ev.target.value)} value={email} type="email" placeholder="Email" required />
        <input className="border p-2" onChange= {(ev) => setPassword(ev.target.value)} value={password} type="password" placeholder="Password" required />
        <button className="bg-blue-500 text-white p-2" type="submit">Login</button>
    </form>
};

export default LoginForm;

