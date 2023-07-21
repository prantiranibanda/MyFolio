import Image from "next/image";
import pic from "../../public/prog2.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#143e53] sm:flex items-center justify-center">
      <div className="sm:flex justify-center bg-blue-600">
        <Image
          className="bg-pink-400 w-full sm:hidden"
          src={pic}
          alt="Picture of the author"
        />

        <div className="bg-blue-400">
          <div>Hi, my name is </div>
          <div>PRANTI RANI BANDA</div>
          <div>
            I like coding and building websites. I have a keen interest in UI/UX
            design.
          </div>
        </div>

        <Image
          className="bg-pink-100 hidden sm:block"
          src={pic}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
