import { EthosConnectProvider } from "ethos-connect";
import ExampleIcon from "../icons/ExampleIcon";
import "../styles/globals.css";
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  const ethosConfiguration = {
    // When testing, use our staging link. When in production you may comment this line out.
    // walletAppUrl: 'https://sui-wallet-staging.onrender.com',
    apiKey: "ethos-example-app",
  };

  return (
    <EthosConnectProvider
      ethosConfiguration={ethosConfiguration}
      dappName="EthosConnect Example App"
      dappIcon={<ExampleIcon />}
      connectMessage="Select or Install Sui Wallet Chome Extension for Best Experience. Refresh after sign-in if no puzzle appears!"
    >
      <Component {...pageProps} />
    </EthosConnectProvider>
  );
}

export default MyApp;
