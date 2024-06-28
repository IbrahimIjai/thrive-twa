"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function Integrations() {
  return (
    <section className="flex flex-col items-center justify-between px-4">
      <p>integrations and partnerships</p>
      <h1>Our ecosystem is powered by the best of the best</h1>

      <div className="">
        {integrations.map((tech, i) => {
          return <Badge key={i}>{tech}</Badge>;
        })}
      </div>
    </section>
  );
}

const integrations = ["Aave", "Biconomy", "Base", "Polygon"];
