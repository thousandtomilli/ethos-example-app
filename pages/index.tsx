import type { NextPage } from "next";
import { SignInButton, ethos } from "ethos-connect";
import { useCallback, useEffect, useState } from "react";
import { Disconnect, Fund, Mint, WalletActions } from "../components";
import Script from 'next/script';
import Image from 'next/image';

const Home: NextPage = () => {

  const { status, wallet } = ethos.useWallet();

  const [version, setVersion] = useState<number>(0);
  
  const reset = useCallback(() => {
    setVersion(prev => prev + 1)
  }, []);

  useEffect(reset, [wallet?.address, reset])

  return (
    <div className="flex justify-between items-start">

      <div className="p-12 flex-1"><p></p></div>

      <div id="main-container" className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex-6">
        {wallet ? (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 id="headline" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Solve the Puzzle to Mint
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div id="canvas-container">
                <div id="sound-canvas">
                </div>
                <div id="overlay-image">
                  <Image 
                    id="validated-canvas-overlay" 
                    src="/arion_guardians.jpg"
                    width={455}
                    height={455}
                    alt="Arion (Guardians NFT)"
                  /> 
                </div>
              </div>
  
              <Mint
                version={version}
                reset={reset}
              />
              or access Sui faucet:
              <Fund
                version={version}
                reset={reset}
              />
              or
              <Disconnect reset={reset} />
              <Script src="../headbreaker.js"/>
            </div>
          </div>
        ) : (
          <SignInButton className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Connect to Mint!
          </SignInButton>
        )}
      </div>

      <div className="p-12 flex-1 flex justify-end">
        <ethos.components.AddressWidget />
      </div>
    </div>
  );
};

export default Home;
