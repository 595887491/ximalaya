// import {AlbumModel} from '@/models/album';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
// import {RootProp} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';
import {BlurView} from '@react-native-community/blur'; //图片模糊插件
import Tab from './Tab';

const mapStateToProps = ({album}: RootState) => {
  return {
    summary: album.summary,
    author: album.author,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  headerHeight: number;
  // navigation: any;
  route: RouteProp<RootStackParamList, 'Album'>;
}

export class AlbumComponent extends React.Component<IProps> {
  componentDidMount() {
    // console.log('props', this.props);
    const {route, dispatch} = this.props;
    // const {dispatch} = navigation;
    const {id} = route.params.item;
    dispatch({
      type: 'album/fetchAlbum',
      payload: {
        id,
      },
    });
  }
  render() {
    const {headerHeight, summary, author, route} = this.props;
    const {title, image} = route.params.item;
    return (
      <View style={styles.container}>
        <View style={[styles.header, {paddingTop: headerHeight}]}>
          <BlurView
            blurAmount={10}
            blurType="light"
            style={StyleSheet.absoluteFill}
          />
          <Image source={{uri: image}} style={styles.background} />
          <View style={styles.leftView}>
            <Image source={{uri: image}} style={styles.thumbnail} />
            {/* <Image source={{}}/> */}
          </View>
          <View style={styles.rightView}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.summary}>
              <Text numberOfLines={1} style={styles.summaryText}>
                {summary}
              </Text>
            </View>
            <View style={styles.author}>
              <Image source={{uri: author.avatar}} style={styles.avatar} />
              <Text style={styles.name}>{author.name}</Text>
            </View>
          </View>
        </View>
        <Tab />
      </View>
    );
  }
}
const Wrapper = (props: IProps) => {
  const headerHeight = useHeaderHeight();
  return <AlbumComponent {...props} headerHeight={headerHeight} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 260,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
  },
  leftView: {
    marginRight: 26,
  },
  thumbnail: {
    width: 98,
    height: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  avatar: {
    height: 26,
    width: 26,
    borderRadius: 13,
    marginRight: 8,
  },
  summaryText: {
    color: '#fff',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
  },
  rightView: {
    flex: 1,
  },
});
export default connector(Wrapper);
