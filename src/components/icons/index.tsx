import { CardIcon } from './card-icon';
import { UserIcon } from './user-icon';
import { TelegramIcon } from './telegram-icon';
import { VkIcon } from './vk-icon';
import { TIconProps } from './utils';
import React from 'react';

export type TICons = {
    UserIcon: React.FC<TIconProps>;
    CardIcon: React.FC<TIconProps>;
    TelegramIcon: React.FC<TIconProps>;
    VkIcon: React.FC<TIconProps>;
};

export {
    UserIcon,
    CardIcon,
    TelegramIcon,
    VkIcon
};
