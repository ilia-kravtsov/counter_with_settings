import React, {useState, MouseEvent, useEffect, ChangeEvent} from 'react';
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

    let [startValue, setStartValue] = useState<number>(0)

    useEffect(() => {
        setStateCounter(startValue)
    }, [startValue])

    let [maxValue, setMaxValue] = useState<number>(startValue)
    let [stateCounter, setStateCounter] = useState<number>(startValue)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStateCounter(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(stateCounter))
    }, [stateCounter])

    let countStyle = s.counterShower
    let incBtnStyle = `${s.increaseButtonBlock} ${s.pointer}`
    let resetBtnStyle = `${s.resetButtonBlock} ${s.pointer}`
    let setBtnStyle = `${s.setBtn} ${s.pointer}`

    let btnInc = dataStorage.counter[0].buttonName
    let btnReset = dataStorage.counter[1].buttonName
    let btnSet = dataStorage.settings[0].buttonName

    const onCLickIncHanlder = () => {
        if (stateCounter === maxValue) {return}
        setStateCounter( stateCounter + 1 )
    }
    const onCLickResHanlder = () => setStateCounter(startValue)

    const onCLickSetHandler = () => {
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            let newValue = JSON.parse(newMaxValue)
            setMaxValue(newValue)
        }
        let newStartValue = localStorage.getItem('startValue')
        if (newStartValue) {
            let newValue = JSON.parse(newStartValue)
            setStartValue(newValue)
        }
    }

    const onChangeMaxHandlerCallback = (e: number) => {
        // setMaxValue(e)
        localStorage.setItem('maxValue', JSON.stringify(e))
    }

    const onChangeStartHandlerCallback = (e: number) => {
        // setMinValue(e)
        localStorage.setItem('startValue', JSON.stringify(e))
    }

    if (stateCounter === 0) resetBtnStyle = `${s.resetButtonBlock} ${s.disabled}`

    if (stateCounter === maxValue) {
        incBtnStyle = `${s.increaseButtonBlock} ${s.disabled}`
        countStyle = `${s.counterShower} ${s.red}`
    }

    return (
        <div className={s.App}>
            <Settings dataStorage={dataStorage}
                      countStyle={countStyle}
                      onCLickResHanlder={onCLickResHanlder}
                      onCLickIncHanlder={onCLickIncHanlder}
                      onCLickSetHandler={onCLickSetHandler}
                      onChangeMaxHandlerCallback={onChangeMaxHandlerCallback}
                      onChangeStartHandlerCallback={onChangeStartHandlerCallback}
                      resetBtnStyle={resetBtnStyle}
                      incBtnStyle={incBtnStyle}
                      btnInc={btnInc}
                      btnReset={btnReset}
                      btnSet={btnSet}
                      setBtnStyle={setBtnStyle}
                      />
            <Counter dataStorage={dataStorage}
                     stateCounter={stateCounter}
                     onCLickResHanlder={onCLickResHanlder}
                     onCLickIncHanlder={onCLickIncHanlder}
                     onCLickSetHandler={onCLickSetHandler}
                     resetBtnStyle={resetBtnStyle}
                     incBtnStyle={incBtnStyle}
                     countStyle={countStyle}
                     btnInc={btnInc}
                     btnReset={btnReset}
                     btnSet={btnSet}
                     setBtnStyle={setBtnStyle}
            />
        </div>
    );
}

export default App;
