import React from "react";
import Image from "next/image";
import AboutImg from "../../public/assets/taiyakiInv.jpeg";
import MyselfImg from "../../public/assets/myPhoto.jpeg";

function TaiyakiDescription() {
  return (
    <div>
      <h2 className="py-4 text-gray-700 text-xl">Was ist Taiyaki?</h2>
      <p className="py-2 text-gray-600">
        Taiyaki ist ein traditionelles japanisches Gebäck, das in Form eines
        Fisches gebacken wird. Es ist ein beliebter Straßenimbiss in Japan und
        wird oft bei Festen und in speziellen Taiyaki-Läden verkauft.
      </p>
      <p className="py-2 text-gray-600">
        Die typische Füllung für Taiyaki ist süße rote Bohnenpaste, bekannt als
        Anko. Heutzutage gibt es jedoch viele verschiedene Füllungen, darunter
        Vanillepudding, Schokolade, Käse und sogar herzhafte Varianten wie Wurst
        oder Pizza.
      </p>
      <p className="py-2 text-gray-600">
        {`Der Teig für Taiyaki ähnelt dem von Pfannkuchen oder Waffeln und
            wird in einer speziellen Form gebacken, die dem Gebäck seine
            charakteristische Fischform verleiht. Der Name "Taiyaki" setzt sich
            aus den Wörtern "tai" (Meerbrasse) und "yaki" (gebacken) zusammen.`}
      </p>
      <p className="py-2 text-gray-600">
        Taiyaki hat nicht nur einen einzigartigen und köstlichen Geschmack,
        sondern ist auch ein visuelles Vergnügen. Es ist ein Muss für jeden, der
        die japanische Küche erkunden möchte.
      </p>
      <p className="cursor-pointer py-2 text-gray-600">
        Probieren Sie Taiyaki und erleben Sie ein Stück japanischer Kultur!
      </p>
    </div>
  );
}

function Myself() {
  return (
    <div>
      <div className="m-auto max-w-[1240px]">
        <h2 className="py-4 text-gray-700 text-xl">Wer bin ich?</h2>
        <p className="py-2 text-gray-600">
          Mein Name ist Katsumi aus Tokio, Japan. Einer meiner Lieblingssnacks
          ist Taiyaki, gefüllt mit süßer roter Bohnenpaste (Anko) und
          Vanillepudding. Es gibt jedoch viele verschiedene Füllungen wie
          Vanillepudding, Schokolade oder Käse. Taiyaki ist nicht nur lecker,
          sondern auch ein visuelles Vergnügen und ein Symbol der japanischen
          Straßenküche. Probieren Sie Taiyaki und erleben Sie ein Stück
          japanischer Kultur!
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="flex w-full items-center p-2 py-16 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#990000]">
            Über Uns
          </p>
          <TaiyakiDescription />
          <Myself />
        </div>
        <div
          className="m-auto flex h-auto w-full items-center justify-center rounded-xl 
          p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 flex-col space-y-16 py-8"
        >
          <Image src={AboutImg} className="rounded-xl" alt="Taiyaki" />
          <Image src={MyselfImg} className="rounded-xl" alt="Taiyaki" />
        </div>
      </div>
    </div>
  );
}
export default About;
