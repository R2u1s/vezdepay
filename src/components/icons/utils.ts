type TIconTypes = 'inputs' | 'inputs_background' | 'socials' ;

export type TIconProps = { type: TIconTypes; onClick?: () => void };

export const getIconColor = (type: TIconTypes) => {
    return `${
        type === 'inputs'
            ? '#8585AD'
            : type === 'inputs_background'
            ? '#21212C'
            : type === 'socials'
            ? '#FFF'
            : '#FFF'
    }`;
};
