import Image from "next/image";

export default function Hero() {
  return (
    <section className="xl:max-w-screen-xl px-4 lg:px-8 mx-auto md:pt-32 pt-40">
      <div className=" flex justify-center items-center  gap-10 lg:flex-row flex-col">
        <div className=" flex flex-col gap-6 text-center lg:text-start">
          <h1 className="font-bold text-5xl leading-[70px]">Middle, helping you<span className="bg-purple-600 text-white text-4xl rounded-full px-4 text-center">home</span></h1>
          <p className="font-medium">
            Slash the mortgage admin with Middle. Deliver everything your broker
            needs in minutes.
          </p>
          <p>Don't have a Middle invite?</p>
        </div>
        <div>
          <Image
            src="/middle-hero.webp"
            width={500}
            height={500}
            alt="Hero image"
            priority= {true}
          ></Image>
        </div>
      </div>
    </section>
  );
}
