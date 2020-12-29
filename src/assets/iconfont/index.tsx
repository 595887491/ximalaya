/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconerji from './Iconerji';
import Iconshijian from './Iconshijian';
import IconfenghuangxiangmutubiaoYinpinbofang from './IconfenghuangxiangmutubiaoYinpinbofang';
import Icontingshu from './Icontingshu';
import Icontubiao from './Icontubiao';
import Iconhuanyipi from './Iconhuanyipi';
import Iconyixianshi from './Iconyixianshi';
import IconmineRed from './IconmineRed';
import Iconshoucang from './Iconshoucang';
import Icondanyehuaban from './Icondanyehuaban';
import Iconhome from './Iconhome';

export type IconNames = 'iconerji' | 'iconshijian' | 'iconfenghuangxiangmutubiao_yinpinbofang' | 'icontingshu' | 'icontubiao-' | 'iconhuanyipi' | 'iconyixianshi-' | 'iconmine-red' | 'iconshoucang' | 'icondanyehuaban' | 'iconhome';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconerji':
      return <Iconerji key="1" {...rest} />;
    case 'iconshijian':
      return <Iconshijian key="2" {...rest} />;
    case 'iconfenghuangxiangmutubiao_yinpinbofang':
      return <IconfenghuangxiangmutubiaoYinpinbofang key="3" {...rest} />;
    case 'icontingshu':
      return <Icontingshu key="4" {...rest} />;
    case 'icontubiao-':
      return <Icontubiao key="5" {...rest} />;
    case 'iconhuanyipi':
      return <Iconhuanyipi key="6" {...rest} />;
    case 'iconyixianshi-':
      return <Iconyixianshi key="7" {...rest} />;
    case 'iconmine-red':
      return <IconmineRed key="8" {...rest} />;
    case 'iconshoucang':
      return <Iconshoucang key="9" {...rest} />;
    case 'icondanyehuaban':
      return <Icondanyehuaban key="10" {...rest} />;
    case 'iconhome':
      return <Iconhome key="11" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
