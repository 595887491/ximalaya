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

let Iconshoucang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M774.9 603c-17.6 17.5-25.7 42.4-21.7 66.9L788.6 881c5.6 33.1-29.4 58.2-59 42.2l-159.5-85.8a122.08 122.08 0 0 0-115.6 0L295 923.3c-29.6 15.9-64.5-9.1-59-42.2L271.4 670c4.1-24.5-4-49.4-21.7-66.9L95.4 448.9c-23.5-23.4-10.2-63.6 22.6-68.5l208.7-31.1c26.1-3.7 48.7-20.2 60.3-43.9L475.9 121c14.7-30.5 58.1-30.5 72.8 0l88.9 184.5c11.6 23.7 34.2 40.1 60.3 43.9l208.8 31.1c32.8 4.9 46.1 45.1 22.6 68.5L774.9 603z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshoucang.defaultProps = {
  size: 18,
};

Iconshoucang = React.memo ? React.memo(Iconshoucang) : Iconshoucang;

export default Iconshoucang;
