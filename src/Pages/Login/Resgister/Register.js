import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAPI } from '../../../Context/apiContext';

const Register = () => {
    const { signInUsingGoogle, registrationUsingEmail, handleEmailChange, handlePasswordChange, email, password } = useAPI();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }

    const handleRegistration = e => {
        registrationUsingEmail()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            });

        e.preventDefault();

    }





    console.log(email, password)
    return (

        <div className="container-fluid bg-light p-3">
            <div className="d-flex justify-content-center">
                <div className="card login-form p-2">
                    <div className="card-body">
                        <h3 className="card-title text-center">Register to WeCare</h3>
                        <div className="card-text">

                            {
                                !error ? '' : <div className="alert alert-danger alert-dismissible fade show" role="alert">{error}</div>
                            }


                            <form onSubmit={handleRegistration}>

                                <div className="form-group mt-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input onBlur={handleEmailChange} type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" required />
                                </div>
                                <div className="form-group mt-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input onBlur={handlePasswordChange} type="password" className="form-control form-control-sm mb-4" id="exampleInputPassword1" placeholder="Your Password" required />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary mb-3">Create Account</button>
                                </div>
                                <div className="sign-up">
                                    Already have an account? <Link to="/login">Sign in</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-center mt-3">
                <button onClick={handleGoogleLogin} className="btn btn-warning"><i class="fab fa-google text-success me-3"></i>
                    Sign in with Google</button>

            </div>


        </div>
    );
};

export default Register;