import React, { memo } from 'react';

const components = {
};

const Icon = ({ id, w: width, h: height, m: margin, className, onClick, htmlFor }) => {

  const Component = components[id];
  const wP = width ? { width } : null;
  const hP = height ? { height } : null;
  const mP = margin ? { margin } : null;

  const styleProp = wP || hP || mP ? { style: { ...wP, ...hP, ...mP } } : null;

  const onClickProp = onClick ? { onClick } : null;
  const htmlForProp = htmlFor ? { htmlFor } : null;

  return (
    Component
      ? (
        <Component
          className={className || undefined}
          {...styleProp}
          {...onClickProp}
          {...htmlForProp}
        />
      ) : null
  );
};

export default memo(Icon);