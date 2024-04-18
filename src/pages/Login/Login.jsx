import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page:', location);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)

                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then( result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <Helmet>
                <title>
                    Residential | Login
                </title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center my-10">Please Login</h2>
            <div className='flex'>
                <div className='w-1/2'><form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative mb-4">
                        <input className=" border border-red-950 w-full py-2 px-4" type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="" required />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>{
                            showPassword ?
                                <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                        }</span>
                    </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center mt-4'>Do not have an account?<Link className='text-blue-600 font-bold' to="/register">Register</Link></p>
                </div>
                <div className="w-1/4">
                    <div className='p-4 space-y-3 mb-6'>

                        <h2 className="text-3xl">Login With</h2>

                        <button className="btn btn-outline w-full" onClick={handleGoogleSignIn}>Google login</button>
                        <button className="btn btn-outline w-full" onClick={handleGithubSignIn}>Github Login</button>

                      
                    </div>
                </div>
            </div>
            

            <Footer></Footer>
        </div>
    );
};

export default Login;