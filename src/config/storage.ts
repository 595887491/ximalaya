import AsyncStorage from '@react-native-community/async-storage';
import Storage, {LoadParams} from 'react-native-storage';

const storage = new Storage({
  size: 1000, //最大容量
  storageBackend: AsyncStorage, //数据引擎，浏览器使用:window.localStorage
  defaultExpires: 1000 * 3600 * 24 * 7, //过期时间
  enableCache: true, //缓存
  sync: {},
});

const load = (params: LoadParams) => {
  return storage.load(params);
};

export {load};

export default storage;
