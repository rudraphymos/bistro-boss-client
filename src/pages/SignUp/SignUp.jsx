import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import bgImg from '../../assets/others/authentication2.png'

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={bgImg} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" name="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    },)}
                                    placeholder="Password"
                                    name="password"
                                    className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">6 char required</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">20 char exceeded</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">must have 1 uppercase, 1 lowercase, 1 number, 1 special character</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-[#D1A054] text-center'>Already registered? <Link to="/login"><span className='font-semibold'>Go to log in</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;