import React from "react";
import { ReadOnlyProps } from "../../../global.types";

import AvatarImg from "../../assets/avatar.svg";
import BottomArrowIcon from "../../assets/bottom-arrow.svg";
import CopyIcon from "../../assets/copy.svg";
import PolygonIcon from "../../assets/polygon.svg";
import RefreshIcon from "../../assets/refresh.svg";
import BuyCryptoIcon from "../../assets/buy-crypto.svg";
import DirectSendIcon from "../../assets/direct-send.svg";

import "./embeddedWallet.css";
import CryptoCard from "../../components/CryptoCard/CryptoCard";
import { COINS } from "../../data/coins";
import { CURRENCY } from "../../constants/configs";
import { metaMaskAccount$ } from "../../components/SocialLogin/SocialLogin";

interface EmbeddedWalletProps {}

const EmbeddedWallet: React.FC<ReadOnlyProps<EmbeddedWalletProps>> = () => {
  const userName = metaMaskAccount$.userName.get();

  return (
    <div className="container">
      <div className="embeddedWallet__container">
        <div className="flex align-items-center justify-between embeddedWallet__container__header">
          <div className="flex align-items-center embeddedWallet__container__avatarContainer cursor-pointer">
            <img
              className="embeddedWallet__container__avatarContainer__avatar"
              src={AvatarImg}
              alt="thekaypo"
            />
            <p>{userName ?? "na"}@tria</p>
            <img src={BottomArrowIcon} alt="Bottom arrow" />
          </div>
          <div className="flex align-items-center embeddedWallet__container__copyContainer">
            <img className="cursor-pointer" src={CopyIcon} alt="copy" />
            <img className="cursor-pointer" src={PolygonIcon} alt="polygon" />
          </div>
        </div>
        <div className="embeddedWallet__container__assetsCard">
          <div className="flex align-items-center embeddedWallet__container__assetsCard__div">
            <p className="embeddedWallet__container__assetsCard__assetsValueTitle">
              Assets Up
            </p>
            <p className="embeddedWallet__container__assetsCard__assetsValuePerChange">
              +2.5%
            </p>
          </div>
          <div className="flex align-items-center embeddedWallet__container__assetsCard__assetsValue__container">
            <p className="embeddedWallet__container__assetsCard__assetsValue">
              {CURRENCY}1838.83
            </p>
            <img src={RefreshIcon} alt="refresh" />
          </div>
          <div className="flex align-items-center justify-between">
            <button className="flex align-items-center cursor-pointer assetCard-btn embeddedWallet__container__assetsCard__buyCryptoBtn justify-content-center">
              <img src={BuyCryptoIcon} alt="buy crypto" />
              <p>Buy</p>
            </button>
            <button className="flex align-items-center cursor-pointer assetCard-btn embeddedWallet__container__assetsCard__directSendBtn justify-content-center">
              <img src={DirectSendIcon} alt="buy crypto" />
              <p>Send</p>
            </button>
          </div>
        </div>
        <p className="embeddedWallet__container__cryptoTitle">Crypto</p>
        {
          COINS?.map((coin, index) => {
            return (
              <CryptoCard
                key={`cryptoCard-${coin.symbol}-${index}`}
                icon={coin.icon}
                symbol={coin.symbol}
                netWorth={coin.netWorth}
                quantity={coin.quantity}
                percentageChange={coin.percentageChange}
                coinsList={coin.coinsList}
                chainLabel={coin.chainLabel}
              />
            )
          })
        }
      </div>
    </div>
  );
};

EmbeddedWallet.displayName = "EmbeddedWallet";

export default EmbeddedWallet;
