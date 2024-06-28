import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="flexflex-col items-center justify-between p-24">

        <h1 className="text-2xl font-bold">
          A Better way to Save and Invest Onchain
        </h1>
        <p>
          Thrive is helping you achieve your financial goals by helping you save
          with ease while earning interest
        </p>
        <div className="flex items-center">
          <Button>Start Saving Now</Button>
          <Button>Learn More</Button>
        </div>
     
    </main>
  );
}
