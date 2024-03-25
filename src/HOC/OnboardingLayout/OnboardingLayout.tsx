import React from "react";
import Lottie from "lottie-react";
import { useSelector } from "@legendapp/state/react";
import { useSDK } from "@metamask/sdk-react";

import { Layout } from "../Layout";

import TriaLogo from "../../assets/tria_logo.svg";
import TriaGrey from "../../assets/tria_grey.svg";
import GridLoader from "../../assets/lottie/grid_loader.json";

import { ReadOnlyProps } from "../../../global.types";
import { ONBOARDING } from "../../constants/strings";

import { metaMaskAccount$ } from "../../components/SocialLogin/SocialLogin";
import "./onboardingLayout.css";

interface OnboardingLayoutProps {
    children: React.ReactNode;
}

const OnboardingLayout: React.FC<ReadOnlyProps<OnboardingLayoutProps>> = ({
    children,
}) => {
    const { connected } = useSDK();

    React.useEffect(() => {
        if (connected) {
            metaMaskAccount$.loading.set(false);
        } else {
            setTimeout(() => {
                metaMaskAccount$.loading.set(false);
            }, 2000);
        }
    }, [connected]);

    const loading = useSelector(metaMaskAccount$.loading);

    return (
        <Layout>
            <div className="layoutContainer">
                {loading && (
                    <div className="onboarding__container__loaderContainer">
                        <Lottie animationData={GridLoader} loop={true} />
                    </div>
                )}

                <div className="onboarding__container">
                    <img
                        className="onboarding__container__logo"
                        src={TriaLogo}
                        alt="Tria"
                    />
                    <p className="text-align-center onboarding__container__p">
                        {ONBOARDING.LOGIN_TO}
                    </p>
                    <p className="text-align-center onboarding__container__p">
                        <span>{ONBOARDING.TRIA}</span> {ONBOARDING.DEMO}
                    </p>
                    {!loading && children}
                    {loading && <div className="loading__emptyPlaceholder" />}
                    <div className="onboarding__container__powered_by_tria">
                        <img src={TriaGrey} alt="Tria" />
                        <p className="text-align-center onboarding__container__p">
                            {ONBOARDING.POWERED_BY_TRIA}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

OnboardingLayout.displayName = "OnboardingLayout";

export default OnboardingLayout;
