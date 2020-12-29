import React from 'react';
import Carousel, {
  ParallaxImage,
  Pagination,
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';
import {wp, hp, viewportWidth} from '@/utils/index';
import {StyleSheet, View, Text} from 'react-native';
import {ICarousel} from '@/models/home';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';

const sliderWidth = viewportWidth;
const sliderwidth = wp(90);
export const sliderHeight = hp(26);
const itemWidth = sliderwidth + wp(2) * 2;

const mapStateToProps = ({home}: RootState) => ({
  data: home.carousels,
  activeCarouseIndex: home.activeCarouseIndex,
});

const connector = connect(mapStateToProps);
type MadelState = ConnectedProps<typeof connector>;
interface Iprops extends MadelState {
  // navigation: RootStackNavigation;
}
class Carousels extends React.Component<Iprops> {
  // state = {
  //   activeSlider: 0,
  // };
  // const [activeSlider, setActiveSlider] = useState(0);
  renderItem = (
    {item}: {item: ICarousel},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor="rgba(0,0,0,0.25)"
        {...parallaxProps}
      />
    );
  };
  onSnapToItem = (index: number) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/setState',
      payload: {
        activeCarouseIndex: index,
      },
    });
    // this.setState({activeSlider: index});
  };
  get pagination() {
    const {data, activeCarouseIndex} = this.props;
    // console.log('data11', data);
    // const {activeSlider} = this.state;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={data.length}
          activeDotIndex={activeCarouseIndex}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  }

  render() {
    const {data} = this.props;
    return (
      <View>
        <Carousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          onSnapToItem={this.onSnapToItem}
          loop={true}
          autoplay={true}
        />
        {this.pagination}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: sliderHeight,
    borderRadius: 8,
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0,0,0,.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,.9)',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
export default connector(Carousels);
