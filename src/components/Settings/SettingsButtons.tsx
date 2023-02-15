import React from 'react';
import s from "./Settings.module.css";
import Button from "../Button";
import {dataStorageType} from "../../App";

type SettingsButtonsType = {
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    onCLickSetHandler: () => void
    dataStorage: dataStorageType
    resetBtnStyle: string
    incBtnStyle: string
    setBtnStyle: string
    btnReset: string
    btnInc: string
    btnSet: string
}

const SettingsButtons = (p: SettingsButtonsType) => {
    return (
        <div className={s.btnSet}>
            {p.dataStorage.settings.map(button => <Button key={button.id}
                                                          buttonNameMap={button.buttonName}
                                                          onCLickIncHanlder={p.onCLickIncHanlder}
                                                          incBtnStyle={p.incBtnStyle}
                                                          onCLickResHanlder={p.onCLickResHanlder}
                                                          onCLickSetHandler={p.onCLickSetHandler}
                                                          resetBtnStyle={p.resetBtnStyle}
                                                          btnInc={p.btnInc}
                                                          btnReset={p.btnReset}
                                                          btnSet={p.btnSet}
                                                          setBtnStyle={p.setBtnStyle}
            />)}
        </div>
    );
};

export default SettingsButtons;