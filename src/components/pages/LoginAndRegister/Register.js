import React from "react";
import SocialMediaSignin from "./SocialMediaSignin";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(user);
  const onSubmit = async (data) => {
      const email = data?.email;
      const password = data?.password;
      const displayName = data?.name;
      const photoURL = 'https://i.ibb.co/Z6Sh6Vj/admin-user-icon-24.png';

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({displayName, photoURL});
  }

  return (
    <section className="my-24">
      <div className="max-w-xs shadow-lg p-5 rounded-lg mx-auto">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center font-bold text-2xl">Register</h2>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <label class="label">
              {errors?.name && (
                <span class="label-text-alt">{errors.name.message}</span>
              )}
            </label>
          </div>

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

          <div className="flex items-center mt-3">
            <h2 className="font-semibold mr-3">Gender : </h2>
            <input type="radio" id='male' name="gender" class="radio radio-primary mr-1" value='male'
            {...register('gender', {
              required : 'Select gender'
            })}   />

            <label htmlFor="male">Male</label>
              <input type="radio" id='female' name="gender" class="radio radio-primary ml-4 mr-1" value='female' {...register('gender', {
                required : 'Select gender'
              })} />
              <label htmlFor="female">Female</label>
          </div>

          <p className="text-sm mt-0 text-red-500 mt-1">{errors?.gender && errors.gender.message}</p>

          <button className="btn btn-primary w-full mt-4">Register</button>
        </form>

        <div>
          <p className="mt-4 mb-2">
            Already have na account?
            <strong>
              <Link to="/login"> Login</Link>
            </strong>
          </p>
        </div>

        <div class="divider">Register With</div>

        <SocialMediaSignin />
      </div>
    </section>
  );
};

export default Register;
