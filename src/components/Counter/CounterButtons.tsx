import React from 'react';
import s from "../../App.module.css";
import Button from "../Button";
import {dataStorageType} from "../../App";

type CounterActionsStoreType = {
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    onCLickSetHandler: () => void
    dataStorage: dataStorageType
    resetBtnStyle: string
    setBtnStyle: string
    incBtnStyle: string
    btnReset: string
    btnInc: string
    btnSet: string
}

const CounterButtons = (p: CounterActionsStoreType) => {

    let buttonGenerator;

    buttonGenerator = p.dataStorage.counter.map( button => <Button key={button.id}
                                                                       buttonNameMap={button.buttonName}
                                                                       onCLickIncHanlder={p.onCLickIncHanlder}
                                                                       incBtnStyle={p.incBtnStyle}
                                                                       onCLickResHanlder={p.onCLickResHanlder}
                                                                       resetBtnStyle={p.resetBtnStyle}
                                                                       btnInc={p.btnInc}
                                                                       btnReset={p.btnReset}
                                                                       btnSet={p.btnSet}
                                                                       setBtnStyle={p.setBtnStyle}
                                                                       onCLickSetHandler={p.onCLickSetHandler}
    />)
    return (
        <div className={s.parentIncRes}>
            {buttonGenerator}
        </div>
    );
};

export default CounterButtons;