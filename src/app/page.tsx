import About from "@/components/About";
import Main from "@/components/Products";
import Image from "next/image";
import TaiyakiImg from "../../public/assets/taiyaki.jpg";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <div className="relative w-full h-screen">
        <Image
          src={TaiyakiImg}
          alt="Taiyaki background"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-4 md:p-32 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl md:text-6xl font-bold mt-10">
            Entdecken Sie Taiyaki bei uns!
          </h1>
          <p className="text-white text-base md:text-xl mt-4">
            Taiyaki ist ein traditionelles japanisches Gebäck in Form eines
            Fisches, gefüllt mit süßer roter Bohnenpaste. Entdecken Sie den
            einzigartigen Geschmack und die charmante Form dieses köstlichen
            Snacks, der perfekt zu jedem Anlass passt!
          </p>
        </div>
      </div>
      <Products />
      <About />
      <Contact />
    </div>
  );
}
