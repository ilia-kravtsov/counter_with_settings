import React from 'react';
import s from "../../App.module.css";
import CounterDisplay from "./CounterDisplay";
import CounterActionsStore from "./CounterActionsStore";
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
}

const Counter = (props: CounterCountainerType) => {
    return (
        <div className={s.container}>
            <CounterDisplay countStyle={props.countStyle} stateCounter={props.stateCounter}/>
            <CounterActionsStore onCLickIncHanlder={props.onCLickIncHanlder}
                                 onCLickResHanlder={props.onCLickResHanlder}
                                 incBtnStyle={props.incBtnStyle}
                                 resetBtnStyle={props.resetBtnStyle}
                                 dataStorage={props.dataStorage}
                                 btnInc={props.btnInc}
                                 btnReset={props.btnReset}
                                 btnSet={props.btnSet}
                                 setBtnStyle={props.setBtnStyle}
                                 onCLickSetHandler={props.onCLickSetHandler}
            />
        </div>
    );
};

export default Counter;