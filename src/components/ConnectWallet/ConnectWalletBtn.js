import React, { useState } from "react";
import ConnectWallect from "./ConnectWallect";

const ConnectWalletBtn = () => {
  const [walletConnect, setWalletConnect] = useState(false);

  const toggleHandleWallet = () => {
    setWalletConnect(!walletConnect);
  };
  return (
    <>
      <button
        href=""
        className="custom-btn-alt"
        onClick={toggleHandleWallet}
      >
        <span>Connect Wallet</span>
      </button>

      <ConnectWallect
        setWalletConnect={walletConnect}
        walletConnect={walletConnect}
        toggleHandleWallet={toggleHandleWallet}
      />
    </>
  );
};

export default ConnectWalletBtn;
