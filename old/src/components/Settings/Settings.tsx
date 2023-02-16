import React from 'react';
import s from "./Settings.module.css";
import {dataStorageType} from "../../App";
import SettingsDisplay from "./SettingsDisplay";
import SettingsButtons from "./SettingsButtons";

type SettingsType = {
    onChangeMaxHandlerCallback: (e: number) => void
    onChangeStartHandlerCallback: (e: number) => void
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    onCLickSetHandler: () => void
    dataStorage: dataStorageType
    inputStartStyle: string
    resetBtnStyle: string
    inputMaxStyle: string
    incBtnStyle: string
    setBtnStyle: string
    countStyle: string
    startValue: number
    btnReset: string
    maxValue: number
    btnInc: string
    btnSet: string
}

const Settings = (p: SettingsType) => {

    return (
        <div className={s.settingsContainer}>
            <SettingsDisplay onChangeStartHandlerCallback={p.onChangeStartHandlerCallback}
                             onChangeMaxHandlerCallback={p.onChangeMaxHandlerCallback}
                             inputStartStyle={p.inputStartStyle}
                             inputMaxStyle={p.inputMaxStyle}
                             startValue={p.startValue}
                             maxValue={p.maxValue}/>
            <SettingsButtons onCLickIncHanlder={p.onCLickIncHanlder}
                             onCLickResHanlder={p.onCLickResHanlder}
                             onCLickSetHandler={p.onCLickSetHandler}
                             resetBtnStyle={p.resetBtnStyle}
                             dataStorage={p.dataStorage}
                             incBtnStyle={p.incBtnStyle}
                             setBtnStyle={p.setBtnStyle}
                             btnReset={p.btnReset}
                             btnInc={p.btnInc}
                             btnSet={p.btnSet}/>
        </div>
    );
};

export default Settings;