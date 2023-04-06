import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handdleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={650}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    margin="auto"
                    marginTop={5}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    borderRadius={4}
                >
                    <Typography
                        variant="h4"
                        padding={3}
                        sx={{ textTransform: "uppercase" }}
                    >
                        Register
                    </Typography>
                    <TextField
                        placeholder="Name"
                        name="name"
                        margin="normal"
                        type="text"
                        value={inputs.name}
                        onChange={handdleChange}
                        required
                    />
                    <TextField
                        placeholder="Email"
                        name="email"
                        margin="normal"
                        type="text"
                        value={inputs.email}
                        onChange={handdleChange}
                        required
                    />
                    <TextField
                        placeholder="Password"
                        name="password"
                        margin="normal"
                        type="password"
                        value={inputs.password}
                        onChange={handdleChange}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 3, marginTop: 3 }}
                    >
                        Submit
                    </Button>
                    <Button
                        type="submit"
                        color="primary"
                        sx={{ borderRadius: 3, marginTop: 3 }}
                        onClick={() => navigate("/login")}
                    >
                        Already Registed ? Please Login
                    </Button>
                </Box>
            </form>
        </>
    );
}

export default Register;
