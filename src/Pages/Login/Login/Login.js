import React from 'react';
import { useAPI } from '../../../Context/apiContext';

const Login = () => {
    const { signInUsingGoogle, user } = useAPI();
    return (
        <div>
            <h2>Please Log in</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;