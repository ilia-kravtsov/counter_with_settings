import React from 'react';

type CounterDisplay = {
    final_image: string | number
    final_image_style: string
    counterDisplay: string
}

const CounterDisplay = (p: CounterDisplay) => {
    return (
        <div className={p.counterDisplay}>
            <div className={p.final_image_style}>{p.final_image}</div>
        </div>
    );
};

export default CounterDisplay;