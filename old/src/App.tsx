import React from 'react';

const App = () => {
    return (
        <div>

        </div>
    );
};

export default App;

// import React, {useState, useEffect} from 'react';
// import s from './App.module.css';
// import ss from './components/Settings/Settings.module.css'
// import {v1} from "uuid";
// import Counter from "./components/Counter/Counter";
// import Settings from "./components/Settings/Settings";
//
// export type CounterDataType = {
//     id: string
//     buttonName: 'inc' | 'reset' | 'set'
// }
//
// export type dataStorageType = {
//     counter: Array<CounterDataType>
//     settings: Array<CounterDataType>
// }
//
// function App() {
//
//     let dataStorage: dataStorageType = {
//         counter : [
//             {id: v1(), buttonName: 'inc'},
//             {id: v1(), buttonName: 'reset'},
//         ],
//         settings : [
//             {id: v1(), buttonName: 'set'},
//         ]
//     }
//
//     let [startValue, setStartValue] = useState<number>(0)
//     let [maxValue, setMaxValue] = useState<number>(5)
//     let [stateCounter, setStateCounter] = useState<number>(0)
//     let [displayTitle, setDisplayTitle] = useState<string | number>('')
//
//     useEffect(() => {
//
//         let valueAsString = localStorage.getItem('counterValue')
//         if (valueAsString) {
//             let newValue = JSON.parse(valueAsString)
//             setStateCounter(newValue)
//         }
//
//         let newStartValue = localStorage.getItem('startValue')
//         if (newStartValue) {
//             let newValue = JSON.parse(newStartValue)
//             setStartValue(newValue)
//         }
//
//         let newMaxValue = localStorage.getItem('maxValue')
//         if (newMaxValue) {
//             let newValue = JSON.parse(newMaxValue)
//             setMaxValue(newValue)
//         }
//
//     }, [])
//
//     useEffect(() => {
//         localStorage.setItem('counterValue', JSON.stringify(stateCounter))
//     }, [stateCounter])
//
//     const onCLickIncHanlder = () => {
//         if (stateCounter === maxValue) {return}
//         setStateCounter( stateCounter + 1 )
//         setDisplayTitle(stateCounter + 1)
//     }
//     const onCLickResHanlder = () => setStateCounter(startValue)
//
//     const onCLickSetHandler = () => {
//         let newMaxValue = localStorage.getItem('maxValue')
//         if (newMaxValue) {
//             let newValue = JSON.parse(newMaxValue)
//             setMaxValue(newValue)
//         }
//         let newStartValue = localStorage.getItem('startValue')
//         if (newStartValue) {
//             let newValue = JSON.parse(newStartValue)
//             setStartValue(newValue)
//             setStateCounter(newValue)
//             setDisplayTitle(newValue)
//         }
//     }
//
//     const onChangeMaxHandlerCallback = (e: number) => {
//         setMaxValue(e)
//         if (e >= 0) {
//             setDisplayTitle('enter values and press "set"')
//         }
//         if (e < 0) {
//             setDisplayTitle('Incorrect value!')
//         }
//         localStorage.setItem('maxValue', JSON.stringify(e))
//     }
//
//     const onChangeStartHandlerCallback = (e: number) => {
//         setStartValue(e)
//         if (e >= 0) {
//             setDisplayTitle('enter values and press "set"')
//         }
//         if (e < 0) {
//             setDisplayTitle('Incorrect value!')
//         }
//         localStorage.setItem('startValue', JSON.stringify(e))
//     }
//
//     let countStyle = s.counterShower
//     let incBtnStyle = `${s.increaseButtonBlock} ${s.pointer}`
//     let resetBtnStyle = `${s.resetButtonBlock} ${s.pointer}`
//     let setBtnStyle = `${s.setBtnDefault} ${s.disabled}`
//     let inputStartStyle = ss.inputStartSettingsDispay
//     let inputMaxStyle = ss.inputMaxSettingsDispay
//     let btnInc = dataStorage.counter[0].buttonName
//     let btnReset = dataStorage.counter[1].buttonName
//     let btnSet = dataStorage.settings[0].buttonName
//
//     if (displayTitle === 'Incorrect value!') {
//          setBtnStyle = `${s.setBtnDefault} ${s.disabled}`
//          inputStartStyle = `${ss.inputStartSettingsDispay} ${ss.inputStartLessZero}`
//     }
//
//     if (stateCounter === startValue) {
//         resetBtnStyle = `${s.resetButtonBlock} ${s.disabled}`
//     }
//
//     if (stateCounter === maxValue) {
//         incBtnStyle = `${s.increaseButtonBlock} ${s.disabled}`
//         countStyle = `${s.counterShower} ${s.red}`
//     }
//
//     if (startValue < 0) {
//         displayTitle = 'Incorrect value!'
//         setBtnStyle = `${s.setBtnDefault} ${s.disabled}`
//         inputStartStyle = `${ss.inputStartSettingsDispay} ${ss.inputStartLessZero}`
//     }
//
//     if (maxValue < 0) {
//         displayTitle = 'Incorrect value!'
//         setBtnStyle = `${s.setBtnDefault} ${s.disabled}`
//         inputMaxStyle = `${ss.inputMaxSettingsDispay} ${ss.inputStartLessZero}`
//     }
//
//     if (startValue >= maxValue) {
//         displayTitle = 'Incorrect value!'
//         setBtnStyle = `${s.setBtnDefault} ${s.disabled}`
//         inputStartStyle = `${ss.inputStartSettingsDispay} ${ss.inputStartLessZero}`
//         inputMaxStyle = `${ss.inputMaxSettingsDispay} ${ss.inputStartLessZero}`
//     }
//
//     if (displayTitle === 'enter values and press "set"') {
//         setBtnStyle = `${s.setBtnWork} ${s.pointer}`
//         incBtnStyle = `${s.increaseButtonBlock} ${s.disabled}`
//         resetBtnStyle = `${s.resetButtonBlock} ${s.disabled}`
//     }
//
//     return (
//         <div className={s.App}>
//             <Settings dataStorage={dataStorage}
//                       countStyle={countStyle}
//                       onCLickResHanlder={onCLickResHanlder}
//                       onCLickIncHanlder={onCLickIncHanlder}
//                       onCLickSetHandler={onCLickSetHandler}
//                       onChangeMaxHandlerCallback={onChangeMaxHandlerCallback}
//                       onChangeStartHandlerCallback={onChangeStartHandlerCallback}
//                       resetBtnStyle={resetBtnStyle}
//                       incBtnStyle={incBtnStyle}
//                       btnInc={btnInc}
//                       btnReset={btnReset}
//                       btnSet={btnSet}
//                       setBtnStyle={setBtnStyle}
//                       inputStartStyle={inputStartStyle}
//                       inputMaxStyle={inputMaxStyle}
//                       maxValue={maxValue}
//                       startValue={startValue}
//                       />
//             <Counter dataStorage={dataStorage}
//                      stateCounter={stateCounter}
//                      onCLickResHanlder={onCLickResHanlder}
//                      onCLickIncHanlder={onCLickIncHanlder}
//                      onCLickSetHandler={onCLickSetHandler}
//                      resetBtnStyle={resetBtnStyle}
//                      incBtnStyle={incBtnStyle}
//                      countStyle={countStyle}
//                      btnInc={btnInc}
//                      btnReset={btnReset}
//                      btnSet={btnSet}
//                      setBtnStyle={setBtnStyle}
//                      displayTitle={displayTitle}
//                      startValue={startValue}
//             />
//         </div>
//     );
// }
//
// export default App;
