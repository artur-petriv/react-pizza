const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const calcCartTotals = (pizzas) => {
  const concatAllPizzas = [].concat.apply([], Object.values(pizzas));
  const totalCount = concatAllPizzas.length;
  const totalPrice = concatAllPizzas.reduce((sum, obj) => obj.price + sum, 0);

  return {
    totalCount,
    totalPrice,
  };
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]: state.items[action.payload.id]
          ? [...state.items[action.payload.id], action.payload]
          : [action.payload],
      };

      const { totalCount, totalPrice } = calcCartTotals(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_CART": {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };

      delete newItems[action.payload];

      const { totalCount, totalPrice } = calcCartTotals(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "PLUS_PIZZA_COUNT": {
      const newItems = {
        ...state.items,
      };

      // newItems[action.payload].push(newItems[action.payload][0]);

      const { totalCount, totalPrice } = calcCartTotals(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_PIZZA_COUNT": {
      const newItems = {
        ...state.items,
      };

      newItems[action.payload].length === 1
        ? delete newItems[action.payload]
        : newItems[action.payload].splice(-1, 1);

      const { totalCount, totalPrice } = calcCartTotals(newItems);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default: {
      return state;
    }
  }
};

export default cart;
