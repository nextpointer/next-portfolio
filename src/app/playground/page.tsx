import Link from "next/link";


type Link = {
  title: string,
  description: string,
  link:string
}

const Links: Link[] = [
  {
    title: "Color Wars",
    description: "Multiplayer chain-reaction game",
    link:"https://color-wars.nextpointer.dev"
  },{
    title: "Wordle",
    description: "Multiplayer wordle game",
    link:"https://wordle.nextpointer.dev"
  },
  {
    title: "Morphhy",
    description: "Animated Gradient Blob Generator",
    link:"https://blob.nextpointer.dev"
  },

]

export default function Page() {
  return (
    <>
      <title>playground [nextpointer]</title>
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl h-12 md:h-16 mb-4">Playground</h1>
        {Links.map((link,index) => (
          <Link href={link.link} className="flex flex-row justify-start items-center" key={index}>
            <p className="text-heading-text-color leading-relaxed">{link.title}</p>
            <p className="ml-2 mt-1 text-normral-text-color-text-color text-xs"> {link.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
