import Link from "next/link";

export default function Footer() {
  const footer1 = [
    {
      name: "Company",
      href: "/",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Security",
      href: "/",
    },
  ];
  const footer2 = [
    {
      name: "Who we help",
      href: "/",
    },
    {
      name: "Customers",
      href: "/contact",
    },
    {
      name: "Brokers",
      href: "/",
    },
    {
      name: "Lenders",
      href: "/lenders",
    },
  ];
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="xl:max-w-screen-xl px-4 lg:px-8 mx-auto md:pt-20 pt-28 pb-12">
        <div className="flex md:gap-20 gap-14 font-semibold md:flex-row flex-col divide-y-[1px] md:divide-y-0 ">
          <div className="flex flex-col md:max-w-[35%]">
            <h1 className="text-3xl font-bold pb-2 hover:text-zinc-50">Middle</h1>
            <p>Join the revolution and see how easy Middle makes home loans.</p>
          </div>
    
          <div className="flex flex-col gap-3 pt-4">
            {footer1.map((footer) => (
              <Link href={footer.href} key={footer.name} className="hover:text-zinc-50">
                {footer.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4">
            {footer2.map((footer) => (
              <Link href={footer.href} key={footer.name} className="hover:text-zinc-50">
                {footer.name}
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <p className="text-2xl pb-2 hover:text-zinc-50">Follow us</p>
            <Link href="https://linkedin.com/nihalnaveed" className="hover:text-zinc-50">Linkedin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
