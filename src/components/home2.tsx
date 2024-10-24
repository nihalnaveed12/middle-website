import Image from "next/image";

export default function Home2() {
  return (
    <section className="xl:max-w-screen-xl px-4 lg:px-8 mx-auto md:pt-32 pt-36">
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">What is Middle for borrowers?</h1>
          <p className="text-lg mt-3 mb-24">
            Middle lets you securely share all the details your Broker needs in
            minutes, so they can provide you with the best home loan advice.
          </p>
        </div>
      </div>


      <div className="relative pb-[50%]">
        <div className="absolute left-[16%] top-[8%] w-[65%] ">
          
            <Image src="/middle-app.webp" width={1000} height={1000} alt="middle" className="max-w-[100%] h-auto shadow-lg"></Image>
  
        </div>

        <div className="absolute left-[38%] top-[17%] w-[21%]">
          <Image src="/mobile-middle.webp" width={1000} height={100} alt="mobile" className="max-w-[100%] h-auto shadow-lg"></Image>
        </div>

        <div className="absolute left-[9%] top-[18%] w-[23%]">
          <Image src="/feat.webp" width={1000} height={100} alt="mobile" className="max-w-[100%] h-auto shadow-lg"></Image>
        </div>
        <div className="absolute left-[15%] top-[43%] w-[24%]">
          <Image src="/feat.webp" width={1000} height={100} alt="mobile" className="max-w-[100%] h-auto shadow-lg"></Image>
        </div>
        <div className="absolute left-[11%] top-[64%] w-[22%]">
          <Image src="/feat.webp" width={1000} height={100} alt="mobile" className="max-w-[100%] h-auto shadow-lg"></Image>
        </div>
        <div className="absolute right-[10%] top-[15%] w-[22%]">
          <Image src="/feat.webp" width={1000} height={100} alt="mobile" className="max-w-[100%] h-auto shadow-lg"></Image>
        </div>
        <div className="absolute right-[25%] top-[35%] w-[22%]">
          <Image src="/feat.webp" width={1000} height={100} alt="mobile" className="max-w-[100%] h-auto shadow-lg"></Image>
        </div>
        <div className="absolute right-[11%] top-[55%] w-[22%]">
          <Image src="/feat.webp" width={1000} height={100} alt="mobile" className="max-w-[100%] h-auto shadow-lg"></Image>
        </div>
      </div>
  </section>
  )
}