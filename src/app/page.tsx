import About from "@/components/About";
import Image from "next/image";
import TaiyakiImg from "../../public/assets/taiyaki.jpg";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <div className="relative h-screen w-full">
        <Image
          src={TaiyakiImg}
          alt="Taiyaki background"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 sm:items-start sm:justify-start md:p-32">
          <h1 className="mt-10 text-3xl font-bold text-white md:text-6xl">
            Entdecken Sie Taiyaki bei uns!
          </h1>
          <p className="mt-4 text-base text-white md:text-xl">
            Taiyaki ist ein traditionelles japanisches Gebäck in Form eines
            Fisches, gefüllt mit süßer roter Bohnenpaste. Entdecken Sie den
            einzigartigen Geschmack und die charmante Form dieses köstlichen
            Snacks, der perfekt zu jedem Anlass passt!
          </p>
          <div className="mt-8 flex w-[70%] justify-center sm:w-full">
            <Link
              href="/#contact"
              className="rounded-lg bg-gray-300 bg-opacity-50 px-20 py-4 text-3xl font-bold text-white backdrop-blur-lg backdrop-filter hover:bg-opacity-70 sm:px-32"
            >
              Bestellen Sie jetzt
            </Link>
          </div>
        </div>
      </div>
      <Products />
      <About />
      <Contact />
    </div>
  );
}
