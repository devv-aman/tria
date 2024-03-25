import React from "react";
import { useSDK } from "@metamask/sdk-react";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";

import { ReadOnlyProps } from "../../../global.types";

import { ONBOARDING } from "../../constants/strings";

import GoogleLogo from "../../assets/google.svg";
import XLogo from "../../assets/x.svg";

import MetamaskLogo from "../../assets/metamask.svg";
import WalletConnectLogo from "../../assets/walletConnect.svg";

import './socialLogin.css';
import { observable } from "@legendapp/state";

interface SocialLoginProps {}

enableReactTracking({
  auto: true,
});

export const metaMaskAccount$ = observable({ account: "", chainId: "", loading: true, userName: "" });

const SocialLogin: React.FC<ReadOnlyProps<SocialLoginProps>> = () => {
  const { sdk, chainId, account } = useSDK();

  React.useEffect(() => {
    // check, on page load, if metamask is previously connected
    if(account && chainId) {
      metaMaskAccount$.account.set(account)
      metaMaskAccount$.chainId.set(chainId)
    }
  }, [account, chainId]);

  const onMetaMaskLoginClick = async () => {
    try {
      const accounts = await sdk?.connect();
      metaMaskAccount$.account.set(accounts?.[0])
      metaMaskAccount$.chainId.set(chainId)
      metaMaskAccount$.loading.set(false)
    } catch(err) {
      console.warn(`failed to connect..`, err);
    }
  }

  return (
    <div className="onboarding__container__social_buttons">
      <div className="onboarding__container__social_buttons__div btn-primary">
        <img src={GoogleLogo} alt="Continue with google" />
        <button className="onboarding__container__social_buttons__btn">
          {ONBOARDING.CONTINUE_WITH_GOOGLE}
        </button>
      </div>
      <div className="onboarding__container__social_buttons__div btn-secondary">
        <img src={XLogo} alt="Continue with X" />
        <button className="onboarding__container__social_buttons__btn">
          {ONBOARDING.CONTINUE_WITH_X}
        </button>
      </div>
      <div className="onboarding__container__divider">
        <hr />
        <p className="text-align-center onboarding__container__p">
          {ONBOARDING.OR}
        </p>
        <hr />
      </div>
      <div className="onboarding__container__metamask_walletConnect">
        <div onClick={onMetaMaskLoginClick}>
          <img src={MetamaskLogo} alt="Metamask" />
          <button className="onboarding__container__social_buttons__btn metamask_btn">
            {ONBOARDING.METAMASK}
          </button>
        </div>
        <div>
          <img src={WalletConnectLogo} alt="WalletConnect" />
          <button className="onboarding__container__social_buttons__btn walletConnect_btn">
            {ONBOARDING.WALLET_CONNECT}
          </button>
        </div>
      </div>
    </div>
  );
};

SocialLogin.displayName = "SocialLogin";

export default SocialLogin;
