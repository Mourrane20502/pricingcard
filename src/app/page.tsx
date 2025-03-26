import { Button } from "@/components/ui/button";
import { subscriptionsArray } from "@/data/subcriptions";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "./_components/Navbar";
import PricingCard from "./_components/PricingCard";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth transition-all duration-300 dark:bg-black ">
      <Navbar />
      <main className="pt-40 max-md:pt-28 text-balance pb-12 px-6">
        <h1 className="text-5xl max-md:text-3xl font-bold text-center mb-6">
          Welcome to Our Pricing Page!
        </h1>
        <p className="text-lg text-center dark:text-white text-gray-600">
          Choose from a range of plans that suit your needs. Browse our various
          options and select the perfect one for you.
        </p>
        <div className="flex justify-center">
          <Button className="bg-black mt-4 flex items-center justify-center dark:bg-white dark:border dark:border-black dark:text-black text-white text-lg w-[200px] py-6">
            <Link href="#pricing" className="flex items-center gap-2">
              Get Started <ChevronRightIcon size={24} />
            </Link>
          </Button>
        </div>
      </main>

      <section id="pricing" className="px-24 max-md:px-16 py-20 mx-auto">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {subscriptionsArray.map((tier) => (
            <PricingCard key={tier.id} {...tier} />
          ))}
        </div>
      </section>
      <footer className="dark:text-white text-gray-600 text-lg flex justify-center">
        Created and developped by Mourrane Mohamed
      </footer>
    </div>
  );
}
