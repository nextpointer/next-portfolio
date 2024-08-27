import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-24 ">
      <h1 className="text-5xl font-thin md:text-[5vw] text-center mb-14 md:m-0">Choose one Mode</h1>
      <div className="w-screen h-[50vh] flex justify-center items-center gap-4 md:gap-12 md:flex-row flex-col">
        <Link href={"/gui"}><div className="circle rounded-full h-52 w-52 md:h-60 md:w-60 bg-white flex justify-center items-center transition duration-500 ease-in-out hover:bg-black hover:text-white">
          <p className="text-2xl md:text-4xl font-thin">GUI</p>
        </div></Link>
        <Link href={"/cli"}><div className="circle rounded-full h-52 w-52 md:h-60 md:w-60 bg-white flex justify-center items-center transition duration-500 ease-in-out hover:bg-black hover:text-white">
          <p className="text-2xl md:text-4xl font-thin">CLI</p>
        </div></Link>
        
      </div>
    </main>
  );
}
