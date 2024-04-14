import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name=(form.get('name'));
        const photo_url=(form.get('photo_url'));
        const email=(form.get('email'));
        const password=(form.get('password'));
        console.log(name, photo_url, email, password);

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <Helmet>
                <title>
                    Residential | Register
                </title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center my-10">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photo_url' type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='text-center mt-4'>Already have an account?<Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
                        <Footer></Footer>
        </div>
    );
};

export default Register;