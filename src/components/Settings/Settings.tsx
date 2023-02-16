import React, {ChangeEvent} from 'react';
import SettingsDisplay from "./SettingsDisplay";
import SettingsButtons from "./SettingsButtons";

type SettingsType = {
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onClickSetSettings: () => void
    maxArrowDownClick: () => void
    minArrowDownClick: () => void
    maxArrowUpClick: () => void
    minArrowUpClick: () => void
    settingsDisplay: string
    btnNames: Array<string>
    inputMaxStyle: string
    inputMinStyle: string
    settingsStyle: string
    disabledSet: boolean
    setBtnStyle: string
    maxValue: number
    minValue: number
}

const Settings = (p: SettingsType) => {
    return (
        <div className={p.settingsStyle}>
            <SettingsDisplay onChangeStartValue={p.onChangeStartValue}
                             minArrowDownClick={p.minArrowDownClick}
                             maxArrowDownClick={p.maxArrowDownClick}
                             onChangeMaxValue={p.onChangeMaxValue}
                             settingsDisplay={p.settingsDisplay}
                             minArrowUpClick={p.minArrowUpClick}
                             maxArrowUpClick={p.maxArrowUpClick}
                             inputMaxStyle={p.inputMaxStyle}
                             inputMinStyle={p.inputMinStyle}
                             settingsStyle={p.settingsStyle}
                             maxValue={p.maxValue}
                             minValue={p.minValue}
            />
            <SettingsButtons onClickSetSettings={p.onClickSetSettings}
                             disabledSet={p.disabledSet}
                             setBtnStyle={p.setBtnStyle}
                             btnNames={p.btnNames}
            />
        </div>
    );
};

export default Settings;