import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RootState} from '@/models/index';
import {IProgram} from '@/models/album';
import Touchable from '@/components/Touchable';
import Iconfont from '@/assets/iconfont';

interface IProps {
  data: IProgram;
  index: number;
  onPress: (data: IProgram) => void;
}
class Item extends React.Component<IProps> {
  onPress = () => {
    const {onPress, data} = this.props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };
  render() {
    const {data, index} = this.props;
    return (
      <Touchable style={styles.item} onPress={this.onPress}>
        <Text style={styles.serial}>{index + 1}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.info}>
            <View style={styles.playVolume}>
              <Iconfont
                name="iconerji"
                color="#939393"
                size={16}
                style={{marginVertical: 2}}
              />
              <Text style={styles.iconText}>{data.playVolume}</Text>
            </View>
            <View style={styles.duration}>
              <Iconfont
                name="iconshijian"
                color="#939393"
                size={16}
                style={{marginVertical: 2}}
              />
              <Text style={styles.iconText}>{data.duration}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.date}>{data.data}</Text>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serial: {
    fontSize: 14,
    color: '#838383',
    fontWeight: '800',
  },
  content: {
    flex: 1,
    marginHorizontal: 25,
  },
  title: {
    fontWeight: '500',
  },
  info: {
    flexDirection: 'row',
    marginTop: 7,
  },
  playVolume: {
    flexDirection: 'row',
    marginRight: 10,
  },
  duration: {
    flexDirection: 'row',
  },
  playIcon: {
    color: '#939393',
    width: 20,
    height: 20,
  },
  durationIcon: {
    color: '#939393',
    width: 20,
    height: 20,
  },
  iconText: {
    marginHorizontal: 5,
    color: '#939393',
  },
  date: {
    color: '#939393',
  },
});
export default Item;
