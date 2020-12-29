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

let IconfenghuangxiangmutubiaoYinpinbofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z m0 785.066667c-197.546667 0-358.4-160.853333-358.4-358.4s160.853333-358.4 358.4-358.4 358.4 160.853333 358.4 358.4-160.853333 358.4-358.4 358.4z"
        fill={getIconColor(color, 0, '#4C4C4C')}
      />
      <Path
        d="M512 716.8c-18.773333 0-34.133333-15.36-34.133333-34.133333V341.333333c0-18.773333 15.36-34.133333 34.133333-34.133333s34.133333 15.36 34.133333 34.133333v341.333334c0 18.773333-15.36 34.133333-34.133333 34.133333zM665.6 716.8c-18.773333 0-34.133333-15.36-34.133333-34.133333v-221.866667c0-18.773333 15.36-34.133333 34.133333-34.133333s34.133333 15.36 34.133333 34.133333v221.866667c0 18.773333-15.36 34.133333-34.133333 34.133333zM358.4 716.8c-18.773333 0-34.133333-15.36-34.133333-34.133333v-119.466667c0-18.773333 15.36-34.133333 34.133333-34.133333s34.133333 15.36 34.133333 34.133333v119.466667c0 18.773333-15.36 34.133333-34.133333 34.133333z"
        fill={getIconColor(color, 1, '#4C4C4C')}
      />
    </Svg>
  );
};

IconfenghuangxiangmutubiaoYinpinbofang.defaultProps = {
  size: 18,
};

IconfenghuangxiangmutubiaoYinpinbofang = React.memo ? React.memo(IconfenghuangxiangmutubiaoYinpinbofang) : IconfenghuangxiangmutubiaoYinpinbofang;

export default IconfenghuangxiangmutubiaoYinpinbofang;
