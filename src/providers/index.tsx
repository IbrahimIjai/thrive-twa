"use client";

import { FC, ReactNode } from "react";
import { Web3Provider } from "./web3-provider";

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return <Web3Provider>{children}</Web3Provider>;
};
