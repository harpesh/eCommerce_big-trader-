import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); // You may want to handle passwords as well.
    
    const navigate = useNavigate();
    
    const adminUsername = 'admin'; // Set your admin username here.
    const adminPassword = 'password'; // Set your admin password here (if needed).

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Check if the entered username and password match the admin credentials
        if (username === adminUsername && password === adminPassword) {
            // Redirect to the home route if login is successful
            navigate('/home'); // Adjust the route as needed
        } else {
            alert('Invalid credentials. Please try again.'); // Simple alert for invalid login
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '0px', textAlign: 'center' }}>
            <form onSubmit={handleLogin}>
                <TextField
                    label="Username"
                    variant="outlined"
                    placeholder='Enter Username'
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                    slotProps={{
                        input: {
                            startAdornment: (
                                <AccountCircleIcon style={{ marginRight: '8px' }} />
                            ),
                            style: { paddingLeft: '40px' }, // Padding for the icon
                        },
                    }}
                />

                <TextField
                    label="Password"
                    variant="outlined"
                    placeholder='Enter Password'
                    fullWidth
                    margin="normal"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    slotProps={{
                        input: {
                            startAdornment: (
                                <LockIcon style={{ marginRight: '8px' }} />
                            ),
                            style: { paddingLeft: '40px' }, // Padding for the icon
                        },
                        endAdornment: (
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        ),
                    }}
                />

                <Typography variant="body2" style={{ margin: '25px 0', color: "gray", fontSize: "15px" }}>
                    <Link to="/forget">Forgot password?</Link>
                </Typography>

                <Button
                    type="submit" // Submit the form
                    variant="contained"
                    style={{ fontSize: "18px", fontWeight: "bold", borderRadius: "10px", backgroundColor: "#DC4326", padding: "15px", marginTop: '10px' }}
                    fullWidth>
                    Log In
                </Button>

                <Typography variant="body2" style={{ marginTop: '25px', color: "gray", fontSize: "15px" }}>
                    Don't have an Account?
                    <Link to="/createAccount">
                        <span className='text-orange-700 font-bold text-lg ml-2'>Create Account</span>
                    </Link>
                    <div className='mt-3'>
                        <Link to="/guest">Login
                            <span className='text-orange-700 font-bold text-lg'> As guest</span>
                        </Link>
                    </div>
                </Typography>
            </form>
        </div>
    );
}
