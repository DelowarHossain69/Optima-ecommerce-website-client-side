import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMediaSignin from "./SocialMediaSignin";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import auth from './../../../firebase.init';
import Loading from "../../shared/Loading/Loading";
import useToken from './../../../hooks/useToken';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, loginError] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;

    signInWithEmailAndPassword(email, password);
  };
  const [token] = useToken(user);


  if(token){
    console.log('ok', from)
    navigate(from, {replace: true});
  }

  if(loading){    
    return <Loading />
  }

  return (
    <section className="my-24">
      <div className="max-w-xs shadow-lg p-5 rounded-lg mx-auto">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center font-bold text-2xl">Login</h2>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <label class="label">
              {errors?.email && (
                <span class="label-text-alt">{errors.email.message}</span>
              )}
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Password"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <label class="label">
              {errors?.password && (
                <span class="label-text-alt">{errors.password.message}</span>
              )}
            </label>
          </div>
            
            <p className="mb-3 text-red-500">{loginError?.message}</p>

          <button className="btn btn-primary w-full">Login</button>
        </form>

        <div>
          <p className="mt-4 mb-2">
            Forget <strong><Link to="/register"> password?</Link></strong>
          </p>
          <p className="">
            Need an account? <strong><Link to="/register"> register</Link></strong>
          </p>
        </div>
            
        <div class="divider">Login With</div>

        <SocialMediaSignin />
      </div>
    </section>
  );
};

export default Login;
