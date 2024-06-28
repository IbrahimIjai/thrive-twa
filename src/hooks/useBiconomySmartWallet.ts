"use client";

import { useConnect, useAccount, useDisconnect, useWalletClient } from "wagmi";
import {
  createSmartAccountClient,
  createECDSAOwnershipValidationModule,
  IPaymaster,
  createPaymaster,
  IBundler,
  createBundler,
} from "@biconomy/account";
import { baseSepolia } from "viem/chains";
import { useState } from "react";
import { Address } from "viem";

export const useBiconomySmartWallet = () => {
  const { data: walletClient } = useWalletClient();
  const [smartAccountAddress, setSmartAccountAddress] =
    useState<Address | null>(null);
  const createSmartAccount = async () => {
    if (!walletClient) return;

    const biconomySmartAccount = await createSmartAccountClient({
      signer: walletClient,
      bundlerUrl: `https://bundler.biconomy.io/api/v2/${baseSepolia.id}/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
      biconomyPaymasterApiKey:
        "https://paymaster.biconomy.io/api/v1/84532/GvOZU_RJF.dc5685be-6bfe-4ebf-be29-417a31121a0c",
    });
    console.log({ biconomySmartAccount });
    const saAddress = await biconomySmartAccount.getAccountAddress();
    setSmartAccountAddress(saAddress);
  };

  return { createSmartAccount, smartAccountAddress };
};
