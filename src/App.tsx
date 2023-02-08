import React, {useState, MouseEvent} from 'react';
import s from './App.module.css';

function App() {

    let [stateCounter, setStateCounter] = useState<number>(0)

    const MAX_VALUE = 5

    let countStyle = s.counterShower
    let incBtnStyle = `${s.increaseButtonBlock} ${s.pointer}`
    let resetBtnStyle = `${s.resetButtonBlock} ${s.pointer}`

    const onCLickIncHanlder = () => {
        if (stateCounter === MAX_VALUE) {return}
        setStateCounter( stateCounter + 1 )
        //setStateCounter(stateCounter < 4 ? stateCounter + 1 : 5)
    }
    const onCLickResHanlder = () => setStateCounter(0)

    if (stateCounter === 0) resetBtnStyle = `${s.resetButtonBlock} ${s.disabled}`

    if (stateCounter === MAX_VALUE) {
        incBtnStyle = `${s.increaseButtonBlock} ${s.disabled}`
        countStyle = `${s.counterShower} ${s.red}`
    }

    return (
        <div className={s.App}>
            <div className={s.container}>
                <div className={countStyle}>
                    <div>{stateCounter}</div>
                </div>
                <div className={s.parentIncRes}>
                    <div onClick={onCLickIncHanlder} className={incBtnStyle}>
                        <div>inc</div>
                    </div>
                    <div onClick={onCLickResHanlder} className={resetBtnStyle}>
                        <div>reset</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
