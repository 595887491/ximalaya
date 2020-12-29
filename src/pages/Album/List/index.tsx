import React from 'react';
import {
  View,
  Text,
  ListRenderItem,
  ListRenderItemInfo,
  Alert,
  StyleSheet,
} from 'react-native';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {IProgram} from '@/models/album';
import Item from './item';

const mapStateToProps = ({album}: {album: RootState}) => {
  return {
    list: album.list,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {}

class List extends React.Component<IProps> {
  onPress = (data: IProgram) => {
    console.log('节目');
  };
  keyExtractor = (item: IProgram) => item.id;
  renderItem = ({item, index}: ListRenderItemInfo<IProgram>) => {
    return <Item data={item} index={index} onPress={this.onPress} />;
  };

  render() {
    const {list} = this.props;
    console.log('list', list);
    return (
      <FlatList
        data={list}
        style={styles.container}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
export default connector(List);
