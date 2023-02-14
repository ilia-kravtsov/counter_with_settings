import React, {useState, MouseEvent} from 'react';
import s from './App.module.css';
import {v1} from "uuid";
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";


export type CounterDataType = {
    id: string
    buttonName: 'inc' | 'reset' | 'set'
}

export type dataStorageType = {
    counter: Array<CounterDataType>
    settings: Array<CounterDataType>
}

function App() {

    let dataStorage: dataStorageType = {
        counter : [
            {id: v1(), buttonName: 'inc'},
            {id: v1(), buttonName: 'reset'},
        ],
        settings : [
            {id: v1(), buttonName: 'set'},
        ]
    }

    let [stateCounter, setStateCounter] = useState<number>(0)

    const MAX_VALUE = 5

    let countStyle = s.counterShower
    let incBtnStyle = `${s.increaseButtonBlock} ${s.pointer}`
    let resetBtnStyle = `${s.resetButtonBlock} ${s.pointer}`
    let setBtnStyle = `${s.setBtn} ${s.pointer}`

    let btnInc = dataStorage.counter[0].buttonName
    let btnReset = dataStorage.counter[1].buttonName
    let btnSet = dataStorage.settings[0].buttonName

    const onCLickIncHanlder = () => {
        if (stateCounter === MAX_VALUE) {return}
        setStateCounter( stateCounter + 1 )
    }
    const onCLickResHanlder = () => setStateCounter(0)

    if (stateCounter === 0) resetBtnStyle = `${s.resetButtonBlock} ${s.disabled}`

    if (stateCounter === MAX_VALUE) {
        incBtnStyle = `${s.increaseButtonBlock} ${s.disabled}`
        countStyle = `${s.counterShower} ${s.red}`
    }

    return (
        <div className={s.App}>
            <Settings dataStorage={dataStorage}
                      countStyle={countStyle}
                      onCLickResHanlder={onCLickResHanlder}
                      onCLickIncHanlder={onCLickIncHanlder}
                      resetBtnStyle={resetBtnStyle}
                      incBtnStyle={incBtnStyle}
                      btnInc={btnInc}
                      btnReset={btnReset}
                      btnSet={btnSet}
                      setBtnStyle={setBtnStyle}/>
            <Counter dataStorage={dataStorage}
                     stateCounter={stateCounter}
                     onCLickResHanlder={onCLickResHanlder}
                     onCLickIncHanlder={onCLickIncHanlder}
                     resetBtnStyle={resetBtnStyle}
                     incBtnStyle={incBtnStyle}
                     countStyle={countStyle}
                     btnInc={btnInc}
                     btnReset={btnReset}
                     btnSet={btnSet}
                     setBtnStyle={setBtnStyle}/>
        </div>
    );
}

export default App;
