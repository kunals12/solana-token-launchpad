import './App.css'
import { useMemo } from "react";
import { TokenLaunchpad } from "./components/TokenLaunchpad";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';


function App() {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <div>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
          <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
              }}>
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
          <TokenLaunchpad />
          </WalletModalProvider>
        </WalletProvider>

      </ConnectionProvider>
    </div>
  )
}

export default App
