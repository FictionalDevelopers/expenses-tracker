export default (initialState, handlers) => {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
};
