import React from 'react'
import { StackedCards } from '../core/StackedCards';
import { InfiniteSlider } from '../core/infinite-slider';

export const StackedCardsExample = () => {

    const data = [
        {
            card1: 'Card One',
            card2: 'Card Two',
            card3: 'Card Three'
        },
        {
            card1: 'Card One',
            card2: 'Card Two',
        },
        {
            card1: 'Card One',
        },
        {
            card1: 'Card One',
            card2: 'Card Two',
        },
        {
            card1: 'Card One',
            card2: 'Card Two',
            card3: 'Card Three'
        },
        {
            card1: 'Card One',
            card2: 'Card Two',
        },
    ];

    return (
        <div className=''>
            <InfiniteSlider gap={24}>
                {
                    data.map((stack, index) => (
                        <StackedCards key={index} stack={stack} verticalGap={56} order={"start"} />
                    ))
                }
            </InfiniteSlider>
        </div>
    )
}
