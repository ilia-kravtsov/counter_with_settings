import React from 'react';
import s from "../../App.module.css";
import Button from "../Button";

type SettingsButtonsType = {
    onClickSetSettings: () => void
    btnNames: Array<string>
    disabledSet: boolean
    setBtnStyle: string
}

const SettingsButtons = (p: SettingsButtonsType) => {
    return (
        <div className={s.settingsButtons}>
            <Button onGeneralClick={p.onClickSetSettings}
                    disabled={p.disabledSet}
                    btnStyle={p.setBtnStyle}
                    btnNames={p.btnNames[3]}
            />
        </div>
    );
};

export default SettingsButtons;