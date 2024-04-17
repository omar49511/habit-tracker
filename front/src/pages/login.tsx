import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabase.config";
export default function Login() {
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const result = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#181818] shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16 text-white">
          <p className="focus:outline-none text-2xl font-extrabold leading-6 ">
            Login to your account
          </p>
          <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <Link
              to="/register"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none cursor-pointer"
            >
              Sign up here
            </Link>
          </p>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p className="text-base font-medium ml-4 text-gray-200">
              Continue with Google
            </p>
          </button>
          <button
            onClick={handleSubmit}
            aria-label="Continue with github"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
              alt="github"
            />
            <p className="text-base font-medium ml-4 text-gray-200">
              Continue with Github
            </p>
          </button>
          <button
            aria-label="Continue with twitter"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg"
              alt="twitter"
            />
            <p className="text-base font-medium ml-4 text-gray-200">
              Continue with Twitter
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400" />
          </div>
          <div>
            <label id="email" className="text-sm font-medium leading-none ">
              Email
            </label>
            <input
              aria-labelledby="email"
              type="email"
              className="bg-neutral-800 border rounded text-xs font-medium leading-none  py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6 w-full">
            <label htmlFor="pass" className="text-sm font-medium leading-none ">
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                type="password"
                className="bg-neutral-800 border rounded text-xs font-medium leading-none  py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                  alt="viewport"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 font-medium rounded text-sm leading-none text-white focus:outline-none bg-gradient-to-r from-purple-500 to-violet-500 hover:bg-gradient-to-bl py-4 w-full"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
