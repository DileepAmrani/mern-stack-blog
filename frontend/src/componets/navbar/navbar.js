import React, { useState } from "react";
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
function Navbar() {
    // global state
    const isLogin = useSelector(state => state.isLogin)
    const [value, setValue] = useState(0)
    return <>
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h4">News App</Typography>
                <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
                    {isLogin &&
                        <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                            <Tab label="Posts" LinkComponent={Link} to="/posts" />
                            <Tab label="My Posts" LinkComponent={Link} to="/my-posts" />
                        </Tabs>
                    }
                </Box>
                <Box display={'flex'} marginLeft={'auto'}>
                    {
                        isLogin ?
                            <Button sx={{ margin: 1, color: "white" }}>Logout</Button>
                            :
                            <>
                                <Button sx={{ margin: 1, color: "white" }} LinkComponent={Link} to="/login">Login</Button>
                                <Button sx={{ margin: 1, color: "white" }} LinkComponent={Link} to="/register">Register</Button>
                            </>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    </>;
}

export default Navbar;
