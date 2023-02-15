import React, {ChangeEvent, useState} from 'react';
import s from "./Settings.module.css";
import Button from "../Button";
import {dataStorageType} from "../../App";

type SettingsType = {
    countStyle: string
    dataStorage: dataStorageType
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    onCLickSetHandler: () => void
    onChangeMaxHandlerCallback: (e: number) => void
    onChangeStartHandlerCallback: (e: number) => void
    incBtnStyle: string
    resetBtnStyle: string
    btnInc: string
    btnReset: string
    btnSet: string
    setBtnStyle: string
    inputStartStyle: string
    inputMaxStyle: string
    maxValue: number
    startValue: number
}

const Settings = (props: SettingsType) => {

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMaxHandlerCallback(+e.currentTarget.value)
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChangeStartHandlerCallback(+e.currentTarget.value)

    return (
        <div className={s.settingsContainer}>
            <div className={s.settingsDisplay}>
                <div className={s.settingsDisplayElemetns}>
                    <span className={s.values}>max value:  </span>
                    <input value={props.maxValue} onChange={onChangeMaxHandler} type="number" className={props.inputMaxStyle}/>
                    <span className={s.values}>start value: </span>
                    <input value={props.startValue} onChange={onChangeStartHandler} type="number" className={props.inputStartStyle}/>
                </div>
            </div>
            <div className={s.btnSet}>
                {props.dataStorage.settings.map(button => <Button key={button.id}
                                                                  buttonNameMap={button.buttonName}
                                                                  onCLickIncHanlder={props.onCLickIncHanlder}
                                                                  incBtnStyle={props.incBtnStyle}
                                                                  onCLickResHanlder={props.onCLickResHanlder}
                                                                  onCLickSetHandler={props.onCLickSetHandler}
                                                                  resetBtnStyle={props.resetBtnStyle}
                                                                  btnInc={props.btnInc}
                                                                  btnReset={props.btnReset}
                                                                  btnSet={props.btnSet}
                                                                  setBtnStyle={props.setBtnStyle}
                />)}
            </div>
        </div>
    );
};

export default Settings;