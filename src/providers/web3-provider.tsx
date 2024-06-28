import { WagmiProvider, createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";


const config = createConfig(
  getDefaultConfig({
    chains: [baseSepolia],
    transports: {
      [baseSepolia.id]: http(
        `https://lb.drpc.org/ogrpc?network=base-sepolia&dkey=${process.env.NEXT_PUBLIC_DRPC_ID}`,
      ),
    },

    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    appName: "Thrive",

    // Optional App Info
    appDescription: "Save,achieve your financial goals onchain",
    appUrl: "https://thrive.co",
    appIcon: "https://thrive-twa.vercel.app/logo.svg",
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
