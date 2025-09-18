import { useState } from "react";
import type { SyntheticEvent } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submitForm = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        console.log(target, { email, password });
    };

    return (
    <Box
        component="form"
        onSubmit={submitForm}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
    >
        <Typography variant="h6">Material UI Login Form</Typography>
        <TextField onChange={(ev) => setEmail(ev.target.value)} value={email} label="Email" placeholder="Enter Email" variant="outlined" required/>
        <TextField onChange={(ev) => setPassword(ev.target.value)} value={password} label="Password" placeholder="Enter Password" required variant="outlined" />
        <Button type="submit" variant="contained">Submit</Button>
    </Box>
)};

export default LoginForm;

