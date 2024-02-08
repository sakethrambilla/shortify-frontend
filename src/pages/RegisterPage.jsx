import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      const res = await axios.post("/user/register", {
        name,
        email,
        password,
      });

      toast.success(`${res.data.message}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setRedirect(true);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(`${message}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  if (redirect) {
    return <Navigate to={"/account"} />;
  }
  return (
    <div className="    bg-gray-50 h-screen flex flex-col grow items-center justify-center">
      <div className=" p-8 shadow-md flex-wrap bg-white pt-10 rounded-3xl flex  flex-col items-center justify-center">
        <h1 className="text-5xl  font-semibold text-center mb-4">Register</h1>
        <div className="flex flex-col items-center gap-2">
          <form
            className="  mt-8 flex flex-col items-center "
            onSubmit={registerUser}
          >
            <input
              type="text"
              placeholder="John"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              className="w-96 bg-gray-50 border"
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="w-96 bg-gray-50 border"
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="w-96 bg-gray-50 border"
            />
            <button className="w-96 mt-8 bg-[#f5385d] p-2 rounded-lg text-white mx-auto">
              Register
            </button>
          </form>
          <div className="justify-center gap-2 flex py-2 text-gray-500 ">
            Already a member?
            <Link className="underline text-blue-500" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
