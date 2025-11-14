import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.password.value;

    console.log("sign is user : ", { email, pass });

    signInWithEmailAndPassword(auth, email, pass)
      .then((info) => {
        console.log(info.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      onSubmit={handleLogin}
      className="flex items-center justify-center min-h-screen bg-gray-200"
    >
      <form className="w-full max-w-md p-8 rounded-2xl bg-white shadow-xl space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>

        {/* Name */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full rounded-xl border border-gray-300 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-all duration-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="px-4 py-3 w-full rounded-xl border border-gray-300 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-all duration-200"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl text-white font-semibold
                     bg-blue-600 hover:bg-blue-700 active:scale-95
                     transition-all duration-200 shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
