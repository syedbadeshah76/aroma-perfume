import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

interface AppState {
  searchQuery: string;
  cart: CartItem[];
  favorites: string[];
  isCartOpen: boolean;
}

type AppAction =
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'ADD_TO_CART'; payload: { product: Product; size?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_FAVORITE'; payload: string }
  | { type: 'TOGGLE_CART'; payload?: boolean };

const initialState: AppState = {
  searchQuery: '',
  cart: [],
  favorites: [],
  isCartOpen: false,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
 case 'ADD_TO_CART':
  const existingItem = state.cart.find(
    item => item.id === action.payload.product.id && item.size === (action.payload.size || '50ml')
  );

  if (existingItem) {
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload.product.id && item.size === (action.payload.size || '50ml')
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  }

  return {
    ...state,
    cart: [
      ...state.cart,
      {
        ...action.payload.product,
        quantity: 1,
        size: action.payload.size || '50ml',
      },
    ],
  };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => 
          !(item.id === action.payload.split('-')[0] && item.size === action.payload.split('-')[1])
        ),
      };
    
    case 'UPDATE_CART_QUANTITY':
      const [itemId, itemSize] = action.payload.id.split('-');
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === itemId && item.size === itemSize
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0),
      };
    
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload],
      };
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: action.payload !== undefined ? action.payload : !state.isCartOpen,
      };
    
    default:
      return state;
  }
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};