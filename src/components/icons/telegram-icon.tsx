import React from 'react';
import { getIconColor, TIconProps } from './utils';

export const TelegramIcon = ({ type }: TIconProps) => {
    return (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            fill={getIconColor(type)}
        >
            <path d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z" stroke="#21212C" strokeLinejoin="round" />
        </svg>
    );
};

