export const initalState = {
  basket: [],
  user:null,
};

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
        case 'EMPTY_BASKET':
          return{
            ...state,
            basket: [],
          }
    case "REMOVE_FROM_BASKET":
        var index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );

        let newBasket = [...state.basket];

        if (index >= 0) {
          newBasket.splice(index, 2)
        }else{
          console.warn(
            `can't remove product(id: ${action.id}) as its not in basket!`
          );
        };

        return {
          ...state, basket: newBasket,
        };
        case 'SET_USER':
          return {
            ...state,
            user: action.user
          };
    default:
      return state;
  }
};

export default reducer;
