import React from 'react';
import { iconsConfig } from '../iconsConfig.js';

const Icon = ({ name, ...props }) => {
  const IconC = iconsConfig[name];
  return (
    <IconC {...props} />
  );
};

export default Icon;