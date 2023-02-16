import React, {useState, useEffect, ChangeEvent} from 'react';
import s from './App.module.css';
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";

function App() {

    let btnNames = ['inc', 'reset', 'set', 'set']

    let [displayCounter, setDisplayCounter] = useState<number | string>('')
    let [stateCounter, setStateCounter] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    useEffect(() => {

        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStateCounter(newValue)
        }

        let newStartValue = localStorage.getItem('minValue')
        if (newStartValue) {
            let newValue = JSON.parse(newStartValue)
            setMinValue(newValue)
        }

        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            let newValue = JSON.parse(newMaxValue)
            setMaxValue(newValue)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(stateCounter))
    }, [stateCounter])

    const onClickInc = () => {
        if(stateCounter === maxValue) return
        setStateCounter(stateCounter+1)
    }
    const onClickRes = () => {setStateCounter(minValue)}

    const onClickSet = () => {

    }

    const onClickSetSettings = () => {
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            let newValue = JSON.parse(newMaxValue)
            setStateCounter(newValue)
        }
        let newStartValue = localStorage.getItem('minValue')
        if (newStartValue) {
            let newValue = JSON.parse(newStartValue)
            setStateCounter(newValue)
            setDisplayCounter(newValue)
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        setMaxValue(event)
        if (event < 0) {
            setDisplayCounter('Incorrect value!')
        }
        if (event >= 0) {
            setDisplayCounter('enter values and press "set"')
        }
        localStorage.setItem('maxValue', JSON.stringify(event))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let event = +e.currentTarget.value
        setMinValue(event)
        if (event < 0) {
            setDisplayCounter('Incorrect value!')
        }
        if (event > 0) {
            setDisplayCounter('enter values and press "set"')
        }
        if (event === 0) {
            setDisplayCounter('enter values and press "set"')
        }
        localStorage.setItem('minValue', JSON.stringify(event))
    }

    const maxArrowUpClick = () => {
        setMaxValue(maxValue+1)
        if (maxValue < 0) {
            setDisplayCounter('Incorrect value!')
        }
        if (maxValue >= 0) {
            setDisplayCounter('enter values and press "set"')
        }
        localStorage.setItem('maxValue', JSON.stringify(maxValue+1))
    }

    const maxArrowDownClick = () => {
        setMaxValue(maxValue-1)
        if (maxValue < 0) {
            setDisplayCounter('Incorrect value!')
        }
        if (maxValue >= 0) {
            setDisplayCounter('enter values and press "set"')
        }
        localStorage.setItem('maxValue', JSON.stringify(maxValue-1))
    }

    const minArrowUpClick = () => {
        if (minValue < 0) {
            setDisplayCounter('Incorrect value!')
        }
        if (minValue >= 0) {
            setDisplayCounter('enter values and press "set"')
        }
        setMinValue(minValue+1)
        localStorage.setItem('minValue', JSON.stringify(minValue+1))
    }

    const minArrowDownClick = () => {
        if (minValue < 0) {
            setDisplayCounter('Incorrect value!')
        }
        if (minValue >= 0) {
            setDisplayCounter('enter values and press "set"')
        }
        setMinValue(minValue-1)
        localStorage.setItem('minValue', JSON.stringify(minValue-1))
    }

    let final_image: string | number = stateCounter
    let incBtnStyle = `${s.incBtn} ${s.pointer}`
    let resBtnStyle = `${s.resBtn} ${s.pointer}`
    let setBtnStyle = `${s.setBtn} ${s.pointer}`
    let final_image_style = s.finalImageDefault
    let settingsDisplay = s.settingsDisplay
    let counterDisplay = s.counterDisplay
    let settingsStyle = s.settings
    let inputMinStyle = s.startInput
    let counterStyle = s.container
    let inputMaxStyle = s.maxInput
    let disabledSet = false
    let disabledInc = false
    let disabledRes = false

    if (stateCounter === minValue) {
        resBtnStyle = `${s.resBtn} ${s.disabled}`
        disabledRes = true
    }

    if (stateCounter === maxValue) {
        incBtnStyle = `${s.incBtn} ${s.disabled}`
        disabledInc = true
        counterDisplay = `${s.counterDisplay} ${s.red}`
    }

    if (minValue < 0) {
        displayCounter = 'Incorrect value!'
        setBtnStyle = `${s.setBtn} ${s.disabled}`
        disabledSet = true
        inputMinStyle = `${s.startInput} ${s.startInputLessThenZero}`
    }

    if (maxValue < 0) {
        displayCounter = 'Incorrect value!'
        disabledSet = true
        setBtnStyle = `${s.setBtn} ${s.disabled}`
        inputMaxStyle = `${s.maxInput} ${s.startInputLessThenZero}`
    }

    if (minValue >= maxValue) {
        displayCounter = 'Incorrect value!'
        disabledSet = true
        setBtnStyle = `${s.setBtn} ${s.disabled}`
        inputMinStyle = `${s.startInput} ${s.startInputLessThenZero}`
        inputMaxStyle = `${s.maxInput} ${s.startInputLessThenZero}`
    }

    if (displayCounter === 'Incorrect value!') {
        final_image = displayCounter
        final_image_style = s.finalImageLessZero
        disabledInc = true
        disabledRes = true
        resBtnStyle = `${s.resBtn} ${s.disabled}`
        incBtnStyle = `${s.incBtn} ${s.disabled}`
    }

    if (displayCounter === 'enter values and press "set"') {
        final_image = displayCounter
        final_image_style = s.finalImageGreaterZero
        disabledInc = true
        disabledRes = true
        resBtnStyle = `${s.resBtn} ${s.disabled}`
        incBtnStyle = `${s.incBtn} ${s.disabled}`
    }

    return (
        <div className={s.App}>
            <Settings onChangeStartValue={onChangeStartValue}
                      onClickSetSettings={onClickSetSettings}
                      maxArrowDownClick={maxArrowDownClick}
                      minArrowDownClick={minArrowDownClick}
                      onChangeMaxValue={onChangeMaxValue}
                      maxArrowUpClick={maxArrowUpClick}
                      minArrowUpClick={minArrowUpClick}
                      settingsDisplay={settingsDisplay}
                      settingsStyle={settingsStyle}
                      inputMaxStyle={inputMaxStyle}
                      inputMinStyle={inputMinStyle}
                      disabledSet={disabledSet}
                      setBtnStyle={setBtnStyle}
                      maxValue={maxValue}
                      minValue={minValue}
                      btnNames={btnNames}
            />
            <Counter final_image_style={final_image_style}
                     counterDisplay={counterDisplay}
                     counterStyle={counterStyle}
                     disabledInc={disabledInc}
                     disabledRes={disabledRes}
                     disabledSet={disabledSet}
                     incBtnStyle={incBtnStyle}
                     resBtnStyle={resBtnStyle}
                     setBtnStyle={setBtnStyle}
                     final_image={final_image}
                     onClickInc={onClickInc}
                     onClickRes={onClickRes}
                     onClickSet={onClickSet}
                     btnNames={btnNames}
            />
        </div>
    );
}

export default App;
