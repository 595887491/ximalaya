/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconshijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 512a384 384 0 1 0-384 384 384 384 0 0 0 384-384z m64 0A448 448 0 1 1 512 64a448 448 0 0 1 448 448z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M544 498.88l118.72 118.4a32 32 0 0 1-45.44 45.44l-128-128A32 32 0 0 1 480 512V224a32 32 0 0 1 64 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconshijian.defaultProps = {
  size: 18,
};

Iconshijian = React.memo ? React.memo(Iconshijian) : Iconshijian;

export default Iconshijian;
