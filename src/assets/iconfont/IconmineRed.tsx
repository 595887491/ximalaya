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

let IconmineRed: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M65.157487 923.403884c0 0-14.546298-130.74067 94.262874-187.874925 107.389846-56.393381 243.522316-58.169841 243.522316-101.065813 0-33.976836-46.826492-43.645033-80.254835-95.205339-16.768919-25.871227-57.044204-64.46829-61.618383-199.966311C256.158612 193.980993 361.217367 86.079494 510.017344 86.079494c160.761404 0 248.587682 127.360689 248.587682 253.212002 0 125.845173-50.749848 201.406103-88.660272 233.645364-37.903262 32.235169-79.150688 65.98176-21.243837 90.749864 40.016389 17.114796 184.870498 44.079938 247.498884 95.737458 62.627363 51.656497 63.61076 141.013641 59.573817 163.979702L65.157487 923.403884zM903.591141 923.403884"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconmineRed.defaultProps = {
  size: 18,
};

IconmineRed = React.memo ? React.memo(IconmineRed) : IconmineRed;

export default IconmineRed;
