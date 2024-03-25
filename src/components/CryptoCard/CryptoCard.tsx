import React from "react";
import { ReadOnlyProps } from "../../../global.types";

import "./cryptoCard.css";
import { CURRENCY } from "../../constants/configs";

interface Coin {
    icon?: string;
    symbol?: string;
    chainIcon?: string;
    netWorth: string;
    chainLabel?: string;
    quantity: number;
}

interface CryptoCardProps {
    icon?: string;
    symbol: string;
    netWorth: string;
    quantity: number;
    percentageChange: string;
    chainLabel?: string;
    coinsList: Coin[];
}

const CryptoCard: React.FC<ReadOnlyProps<CryptoCardProps>> = ({
    icon,
    symbol,
    netWorth,
    quantity,
    chainLabel,
    percentageChange,
    coinsList,
}) => {
    const renderCoin = ({ symbol, chainIcon, chainLabel }: Coin, index: number) => {
        return (
            <div key={`${symbol}-${chainLabel}-${index}`} className="cryptoCard__container__coinContainer flex align-items-center">
                <img src={chainIcon} alt={chainIcon} />
                <div>
                    <p>{symbol}</p>
                </div>
            </div>
        );
    };

    const renderCoinsList = React.useMemo(() => {
        return coinsList?.map((coin, index) => {
            return renderCoin(coin, index);
        });
    }, []);

    return (
        <div className="cryptoCard__container flex justify-between">
            <div className="flex align-items-center">
              <img src={icon} alt={icon} />
              <div className="cryptoCard__container__chain">
                  <p>{symbol}</p>
                  <div className="flex align-items-center">{renderCoinsList}</div>
              </div>
            </div>
            <div>
              <div className="cryptoCard__container__Networth__container">
                <p className="embeddedWallet__container__assetsCard__assetsValuePerChange">{percentageChange}</p>
                <p className="cryptoCard__container__Networth">{CURRENCY}{netWorth}</p>
              </div>
              <p className="cryptoCard__container__quantity">{quantity} {chainLabel}</p>
            </div>
        </div>
    );
};

CryptoCard.displayName = "CryptoCard";

export default CryptoCard;
