import React from 'react';
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

type CounterType = {
    final_image: string | number
    final_image_style: string
    btnNames: Array<string>
    onClickInc: () => void
    onClickRes: () => void
    onClickSet: () => void
    counterDisplay: string
    disabledInc: boolean
    disabledRes: boolean
    disabledSet: boolean
    counterStyle: string
    incBtnStyle: string
    resBtnStyle: string
    setBtnStyle: string
}

const Counter = (p: CounterType) => {
    return (
        <div className={p.counterStyle}>
            <CounterDisplay final_image_style={p.final_image_style}
                            counterDisplay={p.counterDisplay}
                            final_image={p.final_image}/>
            <CounterButtons disabledInc={p.disabledInc}
                            disabledRes={p.disabledRes}
                            disabledSet={p.disabledSet}
                            incBtnStyle={p.incBtnStyle}
                            resBtnStyle={p.resBtnStyle}
                            setBtnStyle={p.setBtnStyle}
                            onClickInc={p.onClickInc}
                            onClickRes={p.onClickRes}
                            onClickSet={p.onClickSet}
                            btnNames={p.btnNames}
            />
        </div>
    );
};

export default Counter;