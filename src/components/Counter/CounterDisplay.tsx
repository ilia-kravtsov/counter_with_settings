import React from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayType = {
    stateCounter: number
    countStyle: string
    displayTitle: string | number
    startValue: number
}

const CounterDisplay = (props: CounterDisplayType) => {

    let final_image: string | number = props.stateCounter
    let final_image_style = s.finalImageDefault

    if (props.displayTitle === 'Incorrect value!') {
        final_image = props.displayTitle
        final_image_style = s.finalImageLessZero
    }

    if (props.displayTitle === 'enter values and press "set"') {
        final_image = props.displayTitle
        final_image_style = s.finalImageGreaterZero
    }

    return (
            <div className={props.countStyle}>
                <div className={final_image_style}>{final_image}</div>
            </div>
    );
};

export default CounterDisplay;