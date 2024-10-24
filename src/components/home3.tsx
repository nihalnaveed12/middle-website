import Image from "next/image"

export default function Home3() {
    return (
        <section className="xl:max-w-screen-xl px-4 lg:px-8 mx-auto md:pt-36 pt-40 pb-20">
          <div>
            <h1 className="text-4xl font-bold text-center">What borrowers love about Middle</h1>

            <div className="grid sm:grid-cols-3 grid-cols-1 mx-auto gap-12 mt-16 px-10">
                <div className="flex flex-col items-center sm:items-start gap-3">
                    <Image src="/rocket-middle.webp" height={150} width={150} alt="rocket" className="max-w-[100%] h-auto"></Image>
                    <h2 className="text-2xl font-semibold text-center sm:text-start">Put your best foot forward</h2>
                    <p className="text-center sm:text-start">Middle removes the guesswork by organising and sharing all the information your broker needs to recommend the best home loan for your situation.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-3">
                    <Image src="/hand-middle.webp" height={150} width={150} alt="rocket" className="max-w-[100%] h-auto"></Image>
                    <h2 className="text-2xl font-semibold text-center sm:text-start">Put your best foot forward</h2>
                    <p className="text-center sm:text-start">Middle removes the guesswork by organising and sharing all the information your broker needs to recommend the best home loan for your situation.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-3">
                    <Image src="/security-middle.webp" height={150} width={150} alt="rocket" className="max-w-[100%] h-auto"></Image>
                    <h2 className="text-2xl font-semibold text-center sm:text-start">Put your best foot forward</h2>
                    <p className="text-center sm:text-start">Middle removes the guesswork by organising and sharing all the information your broker needs to recommend the best home loan for your situation.</p>
                </div>   
            </div>
          </div>
        </section>
    )
}