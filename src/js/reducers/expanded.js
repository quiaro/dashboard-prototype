import { ACTIONS } from '../actions/constants'

function expanded(state = null, action) {
  switch (action.type) {
    case ACTIONS.EXPAND_DASHBOARD_ITEM:
      const itemId = action.payload.id;

      if (state !== itemId) {
        return itemId;
      }

      // If the current state is equal to the itemId then the item will be collapsed
      return null;

    default:
      return state
  }
}

export default expanded
