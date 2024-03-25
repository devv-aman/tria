import React from "react";
import Lottie from "lottie-react";
import { ReadOnlyProps } from "../../../global.types";

import { ONBOARDING } from "../../constants/strings";
import HeartAnimation from "../../assets/lottie/little_hearts.json";
import CloseIcon from "../../assets/close-circle.svg";

import { metaMaskAccount$ } from "../SocialLogin/SocialLogin";
import "./createTriaName.css";

interface CreateTriaNameProps {}

const CreateTriaName: React.FC<ReadOnlyProps<CreateTriaNameProps>> = () => {
    const [userName, setUserName] = React.useState("");
    const [inputErrorMessage, setInputErrorMessage] = React.useState("");

    const onNextClick = () => {
        if (userName) {
            metaMaskAccount$.loading.set(true);

            // for fake loader
            setTimeout(() => {
                metaMaskAccount$.userName.set(userName);
            }, 3000);
        } else {
            setInputErrorMessage("Please enter a valid username");
        }
    };

    const onUsernameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputErrorMessage) {
            setInputErrorMessage("");
        }
        setUserName(e.target.value);
    };

    return (
        <div className="onboarding__container__createTriaName">
            <h2>{ONBOARDING.CREATE_YOUR_TRIA_NAME}</h2>
            <div className="flex flex-row align-items-center justify-content-center">
                <div className="onboarding__container__createTriaName_inputContainer">
                    <div>
                        <input
                            onChange={onUsernameInputChange}
                            className="onboarding__container__createTriaName__usernameInput"
                            placeholder={ONBOARDING.USERNAME}
                        />
                    </div>
                    <p className="onboarding__container__createTriaName__tria">
                        {ONBOARDING["@tria"]}
                    </p>
                </div>
                <button
                    onClick={onNextClick}
                    className="btn-primary onboarding__container__createTriaName__nextBtn"
                >
                    {ONBOARDING.NEXT}
                </button>
            </div>
            {inputErrorMessage && (
                <div className="flex align-items-center onboarding__container__createTriaName__errorContainer">
                    <img src={CloseIcon} alt="wrong" />
                    <p className="onboarding__container__createTriaName__error">
                        {inputErrorMessage}
                    </p>
                </div>
            )}
            <div className="flex align-items-center onboarding__container__createTriaName__nextBtn__info">
                <div className="flex onboarding__container__createTriaName__nextBtn__info__lottie">
                    <Lottie animationData={HeartAnimation} loop={true} />
                </div>
                <p>
                    {ONBOARDING.YOUR} <span>{ONBOARDING["@tria"]}</span>{" "}
                    {ONBOARDING.TRIA_INFO}
                </p>
            </div>
        </div>
    );
};

CreateTriaName.displayName = "CreateTriaName";

export default CreateTriaName;
