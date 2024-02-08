import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });
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
    <div className=" bg-gray-50 h-screen flex flex-col grow items-center  justify-center">
      <div className="justify-center shadow-md bg-white  pt-10 rounded-3xl flex  flex-col items-center">
        <h1 className="mb-4  text-5xl font-semibold ">Login</h1>
        <form
          className="mx-4 w-full p-2 flex flex-col items-center"
          onSubmit={handleLogin}
        >
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
            Login
          </button>
          <div className="py-2 text-center text-gray-500 flex gap-2">
            Not a member yet?
            <Link className="text-blue-500 underline" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
