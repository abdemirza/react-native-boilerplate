export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };
};
export const removeItem = (items, id) => {
  const modifiedItems = items.filter((item) => item.id !== id);
  return (dispatch) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: modifiedItems,
    });
  };
};
export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR",
      payload: [],
    });
  };
};

export const addOrder = (items) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_ORDER",
      payload: items,
    });
  };
  
};
