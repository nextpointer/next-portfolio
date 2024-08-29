import { NextPage } from "next";
import Link from "next/link";

const gui: NextPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen flex-col">
        <h1 className="text-5xl text-center font-thin ">Working on this section!!</h1>{" "}
        <Link href={"/"}><button className="p-20 rounded-md font-thin border-red-400">Back</button></Link>
      </div>
    </>
  );
};

export default gui;
