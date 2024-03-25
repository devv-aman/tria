import React from "react";
import { useSelector } from "@legendapp/state/react";

import { OnboardingLayout } from "../../HOC";
import { SocialLogin } from "../../components";

import { CreateTriaName } from "../../components/CreateTriaName";
import { EmbeddedWallet } from "../EmbeddedWallet";
import { metaMaskAccount$ } from "../../components/SocialLogin/SocialLogin";

const Onboarding = () => {
    const [onboardingStep, setOnboardingStep] = React.useState(0);

    const metaMaskAccount = useSelector(metaMaskAccount$.account);
    const userName = useSelector(metaMaskAccount$.userName);

    React.useEffect(() => {
        if (metaMaskAccount) {
            setOnboardingStep(1);
        }
    }, [metaMaskAccount]);

    const renderOnboardStep = () => {
        const onboardingSteps: { [key: number]: JSX.Element } = {
            0: <SocialLogin />,
            1: <CreateTriaName />,
        };

        return onboardingSteps[onboardingStep];
    };

    if (userName) {
        return <EmbeddedWallet />;
    }

    return <OnboardingLayout>{renderOnboardStep()}</OnboardingLayout>;
};

export default Onboarding;
