import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {userInfo}=useSelector(state=>state.auth)
  console.log(userInfo);
  
 
  
  console.log(email, password);

  const dispatch = useDispatch();

  const navigate=useNavigate()

  const [login] = useLoginMutation();
  const submitHander = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate("/")
    } catch (error) {
      alert(error?.data?.message);
    }
  };


  useEffect(()=>{
    if(userInfo){
      navigate("/")
    }
  },[userInfo,navigate])




  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Log In</h2>

          <form className="space-y-4" onSubmit={submitHander}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
              Log In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <Link to={"/sign"}>
              <p className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
