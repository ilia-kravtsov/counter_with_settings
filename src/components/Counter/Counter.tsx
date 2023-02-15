import React from 'react';
import s from "../../App.module.css";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import {dataStorageType} from "../../App";

export type CounterCountainerType = {
    countStyle: string
    stateCounter: number
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    onCLickSetHandler: () => void
    incBtnStyle: string
    resetBtnStyle: string
    dataStorage: dataStorageType
    btnInc: string
    btnReset: string
    btnSet: string
    setBtnStyle: string
    displayTitle: string | number
    startValue: number
}

const Counter = (p: CounterCountainerType) => {
    return (
        <div className={s.container}>
            <CounterDisplay countStyle={p.countStyle} stateCounter={p.stateCounter} displayTitle={p.displayTitle} startValue={p.startValue}/>
            <CounterButtons onCLickIncHanlder={p.onCLickIncHanlder}
                            onCLickResHanlder={p.onCLickResHanlder}
                            incBtnStyle={p.incBtnStyle}
                            resetBtnStyle={p.resetBtnStyle}
                            dataStorage={p.dataStorage}
                            btnInc={p.btnInc}
                            btnReset={p.btnReset}
                            btnSet={p.btnSet}
                            setBtnStyle={p.setBtnStyle}
                            onCLickSetHandler={p.onCLickSetHandler}
            />
        </div>
    );
};

export default Counter;