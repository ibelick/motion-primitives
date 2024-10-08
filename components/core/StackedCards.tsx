import { cn } from '@/lib/utils';
import React from 'react';

type StackedCardsProps = {
    className?: string;
    stack: {
        card1?: React.ReactNode;
        card2?: React.ReactNode;
        card3?: React.ReactNode;
    };
    verticalGap?: number;
    order?: 'start' | 'end';
};

export const StackedCards = ({ className, stack, verticalGap, order }: StackedCardsProps) => {

    verticalGap = verticalGap || 56;
    order = order || 'start';

    // Determine the z-index and hover transformations based on the order
    const zIndex = {
        card1: order === 'start' ? 'z-30' : 'z-10',
        card2: 'z-20',
        card3: order === 'start' ? 'z-10' : 'z-30',
    };
    
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='relative w-72 h-48 group'>
                {/* Conditionally render Card One if available */}
                {stack.card1 && (
                    <div className={cn(`absolute w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center text-xl text-gray-800 top-${stack.card3 || stack.card2 ? '4' : '2'} left-${stack.card3 || stack.card2 ? '4' : '2'} ${zIndex.card1} transition-all duration-300 group-hover:${stack.card3 || stack.card2 ? `-translate-y-${verticalGap}` : '-translate-y-0'} group-hover:${stack.card3 || stack.card2 ? '-translate-x-2' : '-translate-x-0'} group-hover:z-20`, className)}>
                        {stack.card1}
                    </div>
                )}

                {/* Conditionally render Card Two if available */}
                {stack.card2 && (
                    <div className={cn(`absolute w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center text-xl text-gray-800 top-2 left-2 ${zIndex.card2} transition-all duration-300 group-hover:translate-y-0`, className)}>
                        {stack.card2}
                    </div>
                )}

                {/* Conditionally render Card Three if available */}
                {stack.card3 && (
                    <div className={cn(`absolute w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center text-xl text-gray-800 top-0 left-0 ${zIndex.card3} transition-all duration-300 group-hover:${`translate-y-${verticalGap}`} group-hover:translate-x-2 group-hover:z-20`, className)}>
                        {stack.card3}
                    </div>
                )}
            </div>
        </div>
    );
};
