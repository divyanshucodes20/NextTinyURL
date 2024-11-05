import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <main className="bg-orange-50">
    <section className="grid grid-cols-2 h-[50vh]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-5xl font-bold">
        Your Own URL Shortener
        </p>
        <p className="px-56 text-center">
          Easy and simple URL Shortener
        </p>
        <div className='flex gap-3 justify-start'>
      <Link href="/shorten"><button className='bg-orange-300 shadow-lg p-3 rounded-lg font-bold py-1'>Try Now</button></Link>
      <Link href="/github"><button className='bg-orange-300 shadow-lg p-3 rounded-lg font-bold py-1'>Github</button></Link>
      </div>
      </div>
      <div className=" flex justify-start relative">
      <Image className="mix-blend-darken" src={"/vector.jpg"}  fill={true} alt=""></Image>
      </div>
    </section>
   </main>
  );
}
