import React, {ChangeEvent} from 'react';
import s from "./Settings.module.css";

type SettingsDisplayType = {
    maxValue: number
    startValue: number
    onChangeMaxHandlerCallback: (e: number) => void
    onChangeStartHandlerCallback: (e: number) => void
    inputStartStyle: string
    inputMaxStyle: string
}

const SettingsDisplay = (p: SettingsDisplayType) => {

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => p.onChangeMaxHandlerCallback(+e.currentTarget.value)
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => p.onChangeStartHandlerCallback(+e.currentTarget.value)

    return (
        <div className={s.settingsDisplayElements}>
                <div className={s.MaxElement}>
                    <span className={s.valueMax}>max value: </span>
                    <input value={p.maxValue} onChange={onChangeMaxHandler} type="number" className={p.inputMaxStyle}/>
                </div>
                <div className={s.StartElement}>
                    <span className={s.valuesStart}>start value: </span>
                    <input value={p.startValue} onChange={onChangeStartHandler} type="number" className={p.inputStartStyle}/>
                </div>
        </div>
    );
};

export default SettingsDisplay;