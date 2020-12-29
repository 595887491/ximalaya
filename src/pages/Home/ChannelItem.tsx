import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IChannel} from '@/models/home';
import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';

interface IProps {
  data: IChannel;
  goAlbum: (data: IChannel) => void;
}
const ChannelItem: IProps = (props) => {
  const {data, goAlbum} = props;
  const onPresss = () => {
    if (typeof goAlbum === 'function') {
      goAlbum(data);
    }
  };

  // console.log(data);
  return (
    <Touchable onPress={onPresss}>
      <View style={styles.container}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {data.title}
          </Text>
          <Text style={styles.remark} numberOfLines={2}>
            {data.remark}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.playedView}>
              <IconFont name="icontingshu" size={14} />
              <Text style={styles.number}>{data.played}</Text>
            </View>

            <View style={styles.playingView}>
              <IconFont
                name="iconfenghuangxiangmutubiao_yinpinbofang"
                size={14}
              />
              <Text style={styles.number}>{data.playing}</Text>
            </View>
          </View>
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    //android
    elevation: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#dedede',
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    backgroundColor: '#f8f8f8',
    padding: 5,
    marginBottom: 5,
  },
  bottom: {
    flexDirection: 'row',
  },
  playedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginLeft: 5,
  },
});

export default ChannelItem;
