import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Lenders() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-zinc-50 pb-20">
    <div className="xl:max-w-screen-xl px-4 lg:px-20 mx-auto md:pt-24 pt-36 ">
      <div className="flex justify-center items-center  lg:flex-row flex-col ">
        <div className="flex flex-col gap-4 text-center lg:text-start md:items-start items-center px-6">
          <h1 className="text-5xl font-bold">Powering digital home loans</h1>
          <p>
            Middle allows lenders to instantly launch and manage digital home
            loans
          </p>
          <div className="flex items-center gap-3 bg-zinc-50 w-[70%] px-2 py-1">
            <Image
              className="rounded-full bg-zinc-100 p-2"
              src="/finger-middle.webp"
              height={40}
              width={40}
              alt="hand-pic"
            ></Image>
            <span>Coming soon! Get in touch for more details.</span>
          </div>
          <Button className="hover:bg-purple-600">Get in touch</Button>
        </div>
        <div>
          <Image
            className="w-[90%] h-[90%]"
            src="/bank-middle.webp"
            height={700}
            width={700}
            alt="Bank Pic"
            priority= {true}
          ></Image>
        </div>
      </div>
      </div>
    </div>
  );
}
