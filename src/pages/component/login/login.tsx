import Link from "next/link";

export default function LoginSection() {
  return (
    <section
      id="login"
      className="px-6 md:px-14 bg-white pt-32 md:pt-48 flex items-center justify-center text-center pb-20"
    >
      <div className="text-[#569DD7] flex items-center justify-center text-center flex-col w-full">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
          Still don’t have an account?
        </p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold mb-12">
          Sign up now for free!
        </p>
        <Link href="/component/signup_page/signup">
          <button className="bg-blue-800 text-white rounded-lg px-8 py-4 md:px-16 md:py-5 text-xl md:text-3xl lg:text-5xl font-bold">
            Sign Up
          </button>
        </Link>
      </div>
    </section>
  );
}
