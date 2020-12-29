import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
// import {State} from 'react-native-gesture-handler';
import {RootState} from './index';
const CAROUSEL_URL = '/mock/11/bear/carousel';
const GUESS_URL = '/mock/11/bear/guess';
const CHANNER_URL = '/mock/11/bear/channel';
export interface ICarousel {
  id: string;
  image: string;
  colors: string[];
}

export interface IGuess {
  id: string;
  title: string;
  image: string;
}
export interface IChannel {
  id: string;
  title: string;
  image: string;
  remark: string;
  played: number;
  playing: number;
}

export interface IPagination {
  current: number;
  total: number;
  hasMore: boolean;
}
export interface HomeState {
  carousels: ICarousel[];
  activeCarouseIndex: number; //当前轮播图的下标
  guess: IGuess[];
  gradientVisible: boolean; //渐变色组件是否显示状态
  channels: IChannel[];
  pagination: IPagination;
}
interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuess: Effect;
    fetchChannels: Effect;
  };
}
const initialState: HomeState = {
  carousels: [],
  activeCarouseIndex: 0,
  gradientVisible: true,
  guess: [],
  channels: [],
  pagination: {
    current: 1,
    total: 0,
    hasMore: true,
  },
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousels(_, {call, put}) {
      let {data} = yield call(axios.get, CAROUSEL_URL);
      console.log('数据', data);
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
    *fetchGuess(_, {call, put}) {
      let data = yield call(axios.get, GUESS_URL);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
    *fetchChannels({callback, payload}, {call, put, select}) {
      const {channels, pagination} = yield select(
        (State: RootState) => State.home,
      );
      console.log('cc', channels);
      let page = 1;
      if (payload && payload.loadMore) {
        page = pagination.current + 1;
      }
      let {data} = yield call(axios.get, CHANNER_URL, {
        params: {
          page,
        },
      });
      let newChannels = data.results;
      if (payload && payload.loadMore) {
        newChannels = channels.concat(newChannels);
      }
      yield put({
        type: 'setState',
        payload: {
          channels: newChannels,
          pagination: {
            current: data.pagination.current,
            total: data.pagination.total,
            hasMore: newChannels.length < data.pagination.total,
          },
        },
      });

      if (typeof callback === 'function') {
        callback();
      }
    },
  },
};

export default homeModel;
