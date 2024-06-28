"use client";

import { Button } from "@/components/ui/button";
import { useBiconomySmartWallet } from "@/hooks/useBiconomySmartWallet";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { shortenAddress } from "@/lib/address";
export default function Header() {
  const { createSmartAccount, smartAccountAddress } = useBiconomySmartWallet();
  const { isConnected } = useAccount();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav className="fixed top-0  left-0 right-0 w-full flex  items-center justify-between px-8 py-4 border-b bg-background/15 backdrop-blur-md">
      <div className="flex  items-center">
        <Image src="/logo.svg" height={38} width={38} alt="thrive logo" />
        <span>Thrive</span>
      </div>
      <div>
        {!mounted ? (
          <Button variant="outline">Loading...</Button>
        ) : isConnected ? (
          <>
            {smartAccountAddress ? (
              <Button variant="outline">
                {shortenAddress(smartAccountAddress, 3)}
              </Button>
            ) : (
              <Button onClick={createSmartAccount}>Create Smart Account</Button>
            )}
          </>
        ) : (
          <ConnectKitButton />
        )}
      </div>
    </nav>
  );
}
