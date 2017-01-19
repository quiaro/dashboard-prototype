import items from '../__mocks__/items'
import * as utils from '../common/utils'
import { appLoadTime } from '../common/config'

const time = appLoadTime;

export const fetchItems = () =>
  utils.serverDelay(time).then(() => {
    return items;
  });
