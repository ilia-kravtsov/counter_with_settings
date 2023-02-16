import React, {ChangeEvent} from 'react';
import s from "../../App.module.css";

type SettingsDisplayType = {
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    maxArrowDownClick: () => void
    minArrowDownClick: () => void
    maxArrowUpClick: () => void
    minArrowUpClick: () => void
    settingsDisplay: string
    inputMaxStyle: string
    inputMinStyle: string
    settingsStyle: string
    maxValue: number
    minValue: number
}

const SettingsDisplay = (p: SettingsDisplayType) => {
    return (
        <div className={p.settingsDisplay}>
            <div className={s.maxBlock}>
                <div>
                    <span className={s.maxSpan}>max value : </span>
                    <input value={p.maxValue} onChange={p.onChangeMaxValue} type="number" className={p.inputMaxStyle}/>
                </div>
                <div className={s.arrows}>
                    <button onClick={p.maxArrowUpClick} className={s.arrowUp}>↑</button>
                    <button onClick={p.maxArrowDownClick} className={s.arrowDown}>↓</button>
                </div>
            </div>
            <div className={s.minBlock}>
                <div>
                    <span className={s.startSpan}>start value :</span>
                    <input value={p.minValue} onChange={p.onChangeStartValue} type="number" className={p.inputMinStyle}/>
                </div>
                <div className={s.arrows}>
                    <button onClick={p.minArrowUpClick} className={s.arrowUp}>↑</button>
                    <button onClick={p.minArrowDownClick} className={s.arrowDown}>↓</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsDisplay;