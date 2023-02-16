import React from 'react';
import s from "../../App.module.css";
import Button from "../Button";

type CounterButtonsType = {
    btnNames: Array<string>
    onClickInc: () => void
    onClickRes: () => void
    onClickSet: () => void
    disabledInc: boolean
    disabledRes: boolean
    disabledSet: boolean
    incBtnStyle: string
    resBtnStyle: string
    setBtnStyle: string
}

const CounterButtons = (p:CounterButtonsType) => {
    return (
        <div className={s.counterButtons}>
            <Button btnNames={p.btnNames[0]} disabled={p.disabledInc} btnStyle={p.incBtnStyle} onGeneralClick={p.onClickInc}/>
            <Button btnNames={p.btnNames[1]} disabled={p.disabledRes} btnStyle={p.resBtnStyle} onGeneralClick={p.onClickRes}/>
        </div>
    );
};

export default CounterButtons;