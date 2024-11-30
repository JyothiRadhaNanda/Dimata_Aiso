import Image from "next/image";
import HomeSection from "../home/home";
import Navbar from "../navbar";

export default function SignUpPageSection() {
  return (
    <div className="flex  bg-white ">
      <div className="flex flex-col  w-1/2 min-h-screen p-4 justify-center  text-center px-32">
        <div className="bg-sky-400 p-10 h-4/5 justify-center flex flex-col rounded-2xl ">
          <a href="/">
            <Image
              src="/delete.svg"
              alt="Aiso Image"
              width={30}
              height={30}
              className="mb-20"
            />
          </a>
          <p className=" text-black text-5xl mb-10 font-bold items-center justify-center ">
            Sign Up
          </p>
          <div className="flex flex-col mb-10">
            <p className="text-black text-start">Name</p>
            <input
              className="rounded bg-white text-white py-3 px-4 w-full mb-4"
              type="email"
              placeholder=""
            ></input>
            <p className="text-black mt-5 text-start">Your email</p>
            <input
              className="rounded bg-white py-3 px-4 w-full mb-4"
              type="text"
              placeholder=""
            ></input>
            <p className="text-black mt-5 text-start">Your comfirm email</p>
            <input
              className="rounded bg-white py-3 px-4 w-full mb-4"
              type="text"
              placeholder=""
            ></input>
          </div>
          <div className="mb-10">
            <p>
              Already have an account? Log in
              <span className="text-blue-800">
                <a href="/component/login_page/loginPage"> Here</a>
              </span>
            </p>
          </div>
          <div>
            <button className="bg-blue-800 transition ease-in-out delay-150 hover:scale-110 duration-300 rounded py-2 px-8 font-bold text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/login1.svg" alt="Aiso Image" width={800} height={200} />
      </div>
    </div>
  );
}