"use client";

import {
  ThirdwebProvider,
  paperWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain="goerli"
      supportedWallets={[
        paperWallet({
          paperClientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID || "",
        }),
        metamaskWallet(),
      ]}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_OPENZEPPELIN_URL || "",
          },
        },
      }}
    >
      {children}
    </ThirdwebProvider>
  );
}