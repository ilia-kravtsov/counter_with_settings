import React from 'react';
import s from "../../App.module.css";
import Button from "../Button";
import {CounterDataType, dataStorageType} from "../../App";

type CounterActionsStoreType = {
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    incBtnStyle: string
    resetBtnStyle: string
    dataStorage: dataStorageType
    btnInc: string
    btnReset: string
    btnSet: string
    setBtnStyle: string
}

const CounterActionsStore = (props: CounterActionsStoreType) => {

    let buttonGenerator;

    buttonGenerator = props.dataStorage.counter.map( button => <Button key={button.id}
                                                                       buttonNameMap={button.buttonName}
                                                                       onCLickIncHanlder={props.onCLickIncHanlder}
                                                                       incBtnStyle={props.incBtnStyle}
                                                                       onCLickResHanlder={props.onCLickResHanlder}
                                                                       resetBtnStyle={props.resetBtnStyle}
                                                                       btnInc={props.btnInc}
                                                                       btnReset={props.btnReset}
                                                                       btnSet={props.btnSet}
                                                                       setBtnStyle={props.setBtnStyle}/>)
    return (
        <div className={s.parentIncRes}>
            {buttonGenerator}
        </div>
    );
};

export default CounterActionsStore;