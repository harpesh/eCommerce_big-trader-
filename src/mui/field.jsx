import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons from react-icons
import { Typography } from '@mui/material';

export default function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const admin_username = "harpesh";
    const admin_password = "harpesh512";

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === admin_username && password === admin_password) {
            navigate('/home');
        } else {
            alert("Invalid username or password. Please try again.");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <form onSubmit={handleLogin}>

                {/* Username Field with Icon */}
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                    <FaUserCircle style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', fontSize: '20px' }} />
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
                    />
                </div>

                {/* Password Field with Icon and Show/Hide Toggle */}
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                    <FaLock style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', fontSize: '20px' }} />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <Typography variant="body2" style={{ margin: '25px 0', color: "gray", fontSize: "15px" }}>
                    <Link to="/forget">Forgot password?</Link>
                </Typography>

                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#DC4326', color: '#fff', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                    Log In
                </button>

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
