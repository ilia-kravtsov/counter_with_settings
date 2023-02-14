import React from 'react';

type CounterDisplayType = {
    stateCounter: number
    countStyle: string
}

const CounterDisplay = (props: CounterDisplayType) => {
    return (
            <div className={props.countStyle}>
                <div>{props.stateCounter}</div>
            </div>
    );
};

export default CounterDisplay;