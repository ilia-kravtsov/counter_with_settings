import React from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayType = {
    displayTitle: string | number
    stateCounter: number
    countStyle: string
    startValue: number
}

const CounterDisplay = (p: CounterDisplayType) => {

    let final_image: string | number = p.stateCounter
    let final_image_style = s.finalImageDefault

    if (p.displayTitle === 'Incorrect value!') {
        final_image = p.displayTitle
        final_image_style = s.finalImageLessZero
    }

    if (p.displayTitle === 'enter values and press "set"') {
        final_image = p.displayTitle
        final_image_style = s.finalImageGreaterZero
    }

    return (
            <div className={p.countStyle}>
                <div className={final_image_style}>{final_image}</div>
            </div>
    );
};

export default CounterDisplay;