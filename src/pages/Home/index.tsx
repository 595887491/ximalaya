import React, {useEffect, useState, Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import Carousel, {sliderHeight} from './Carrousel';
import Guess from './Guess';
import ChannelItem from './ChannelItem';
import {IChannel, IGuess} from '@/models/home';
import {RouteProp} from '@react-navigation/native';
import {HomeParamList} from '@/navigator/HomeTabs';
import {ICategory} from '@/models/category';

const mapStateToProps = (
  state: RootState,
  {route}: {route: RouteProp<HomeParamList, string>},
) => {
  const {namespace} = route.params;
  const modelState = state[namespace];
  return {
    namespace,
    carousels: modelState.carousels,
    channels: modelState.channels,
    hasMore: modelState.pagination.hasMore,
    gradientVisible: modelState.gradientVisible,
    loading: state.loading.effects[namespace + '/fetchChannels'],
  };
};

const connector = connect(mapStateToProps);
type MadelState = ConnectedProps<typeof connector>;
interface Iprops extends MadelState {
  navigation: RootStackNavigation;
}

interface IState {
  refreshing: boolean;
}
class Home extends React.Component<Iprops, IState> {
  state = {
    refreshing: false,
  };
  componentDidMount() {
    const {dispatch, namespace} = this.props;
    dispatch({type: namespace + '/fetchCarousels'});
    dispatch({type: namespace + '/fetchChannels'});
  }

  goAlbum = (data: IChannel | IGuess) => {
    const {navigation} = this.props;
    navigation.navigate('Album', {item: data});
  };
  renderItem = ({item}: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem data={item} goAlbum={this.goAlbum} />;
  };

  keyExtractor = (item: IChannel) => {
    return item.id;
  };
  get header() {
    const {namespace} = this.props;
    return (
      <View>
        <Carousel />
        <View style={styles.background}>
          <Guess namespace={namespace} goAblum={this.goAlbum} />
        </View>
      </View>
    );
  }

  get footer() {
    const {hasMore, loading, channels} = this.props;

    if (!hasMore) {
      return (
        <View style={styles.loading}>
          <Text>--我是有底线的--</Text>
        </View>
      );
    }
    if (loading && channels.length > 0) {
      return (
        <View style={styles.loading}>
          <Text>正在加载中。。。</Text>
        </View>
      );
    }
  }
  get empty() {
    const {loading} = this.props;
    if (loading) {
      return;
    }
    return (
      <View style={styles.empty}>
        <Text>暂无数据~</Text>
      </View>
    );
  }
  onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = nativeEvent.contentOffset.y; //获取滚动的Y轴高度
    let newGradientVisible = offsetY < sliderHeight;
    const {dispatch, gradientVisible, namespace} = this.props;
    if (gradientVisible !== newGradientVisible) {
      dispatch({
        type: namespace + '/setState',
        payload: {
          gradientVisible: newGradientVisible,
        },
      });
    }
  };
  //上拉刷新
  onRefresh = () => {
    //1.修改刷新状态为true
    this.setState({
      refreshing: true,
    });

    //2.获取数据
    const {dispatch, namespace} = this.props;
    dispatch({
      type: namespace + '/fetchChannels',
      callback: () => {
        //3.修改刷新状态为false
        this.setState({
          refreshing: false,
        });
      },
    });
  };
  //加载更多
  onEndReached = () => {
    const {dispatch, loading, hasMore, namespace} = this.props;
    if (loading || !hasMore) {
      return;
    }
    console.log('--加载更多');
    dispatch({
      type: namespace + '/fetchChannels',
      payload: {loadMore: true},
    });
  };

  render() {
    const {channels} = this.props;
    const {refreshing} = this.state;
    return (
      <FlatList
        ListHeaderComponent={this.header}
        ListFooterComponent={this.footer}
        ListEmptyComponent={this.empty}
        data={channels}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.2}
        onScroll={this.onScroll}
      />
    );
  }
}

const styles = StyleSheet.create({
  end: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  loading: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 100,
  },
  background: {
    backgroundColor: '#fff',
  },
});
export default connector(Home);
