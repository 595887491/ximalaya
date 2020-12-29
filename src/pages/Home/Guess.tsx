import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {IGuess} from '@/models/home';
import Touchable from '@/components/Touchable';
import IconFont from '@/assets/iconfont';

const mapStateToProps = ({home}: RootState) => {
  return {
    guess: home.guess,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  namespace: string;
  goAlbum: (item: IGuess) => void;
}
const Guess: IProps = (props) => {
  const fetch = () => {
    const {dispatch, namespace} = props;
    dispatch({type: namespace + '/fetchGuess'});
  };
  useEffect(fetch, []);
  const {guess} = props;

  const renderItem = ({item}: {item: IGuess}) => {
    const {goAblum} = props;
    return (
      <Touchable style={styles.item} onPress={() => goAblum(item)}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <IconFont name="iconyixianshi-" />
          <Text style={styles.headerTitle}>猜你喜欢</Text>
        </View>
        <View style={styles.headerLeft}>
          <Text style={styles.more}>更多</Text>
          <IconFont name="icontubiao-" />
        </View>
      </View>
      <FlatList
        style={styles.flatList}
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={guess.data}
        renderItem={renderItem}
      />
      <Touchable style={styles.changeGuess} onPress={() => fetch()}>
        <IconFont name="iconhuanyipi" color="red" />
        <Text style={styles.changeGuessText}>换一批</Text>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 5,
    color: '#333',
  },
  more: {
    color: '#999',
  },
  flatList: {
    padding: 10,
  },
  changeGuess: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  changeGuessText: {
    marginLeft: 5,
  },
});

export default connector(Guess);
