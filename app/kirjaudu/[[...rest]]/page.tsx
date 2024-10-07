import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="pb-4">
      <div className="flex justify-center items-center flex-grow p-12">
        <Link className="text-5xl font-mono font-bold text-white" href={"/"}>
          IlmoApp
        </Link>
      </div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
