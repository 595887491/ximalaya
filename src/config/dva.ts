import {create, Model} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/models/index';
import modelExtend from 'dva-model-extend';
import homeModel from '@/models/home';
//创建实例
const app = create();
//加载model 对象
models.forEach((model) => {
  app.model(model);
});
app.use(createLoading());
//启动dva
app.start();

//导出dva的数据
export default app._store;

interface Cached {
  [key: string]: boolean;
}
const cashed: Cached = {
  home: true,
};
function registerModel(model: Model) {
  if (!cashed[model.namespace]) {
    app.model(model);
    cashed[model.namespace] = true;
  }
}

export const createHomeModel = (namespace: string) => {
  const model = modelExtend(homeModel, {namespace});
  registerModel(model);
};
