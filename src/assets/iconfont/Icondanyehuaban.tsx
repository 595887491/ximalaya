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

let Icondanyehuaban: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 938.666667a426.666667 426.666667 0 1 1 426.666667-426.666667 426.666667 426.666667 0 0 1-426.666667 426.666667z m0-810.666667a384 384 0 1 0 384 384A384 384 0 0 0 512 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M666.453333 328.106667L591.146667 576a3.84 3.84 0 0 1-1.493334 1.92l-232.106666 117.973333L432.853333 448a3.84 3.84 0 0 1 1.493334-1.92l232.106666-117.12m16.213334-52.906667a39.253333 39.253333 0 0 0-17.706667 4.266667l-249.813333 126.933333a46.293333 46.293333 0 0 0-23.253334 27.52L310.613333 704a34.346667 34.346667 0 0 0 9.386667 36.693333 31.36 31.36 0 0 0 21.333333 7.253334 39.253333 39.253333 0 0 0 17.706667-4.266667l250.88-126.72a46.293333 46.293333 0 0 0 23.253333-27.52L713.386667 320a34.346667 34.346667 0 0 0-9.386667-36.693333 31.36 31.36 0 0 0-21.333333-7.253334z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icondanyehuaban.defaultProps = {
  size: 18,
};

Icondanyehuaban = React.memo ? React.memo(Icondanyehuaban) : Icondanyehuaban;

export default Icondanyehuaban;
