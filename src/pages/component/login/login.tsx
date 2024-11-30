import Image from "next/image";
import Link from "next/link";
export default function LoginSection() {
  return (
    <section
      id="login"
      className="p-14   bg-white pt-48 items-center text-center justify-center flex pb-36 h-screen"
    >
      <div className=" text-[#569DD7] flex items-center text-center justify-center  flex-row">
        <div className="w-full">
          <p className="text-7xl ">
            <b>Still don’t have an account?</b>
          </p>
          <p className="text-7xl">
            <b>Sign up now for free!</b>
          </p>
          <Link href="/component/signup_page/signup">
            <button className="bg-blue-800 p-5 text-white rounded-lg mt-14 px-20 text-6xl ">
              <b>Sign Up</b>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
