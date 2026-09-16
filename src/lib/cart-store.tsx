"use client";

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { products } from "@/data/products";

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
}

type CartAction =
  | { type: "ADD"; productId: string; quantity?: number }
  | { type: "REMOVE"; productId: string }
  | { type: "SET_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const quantity = action.quantity ?? 1;
      const existing = state.lines.find((line) => line.productId === action.productId);
      if (existing) {
        return {
          lines: state.lines.map((line) =>
            line.productId === action.productId
              ? { ...line, quantity: line.quantity + quantity }
              : line,
          ),
        };
      }
      return { lines: [...state.lines, { productId: action.productId, quantity }] };
    }
    case "REMOVE":
      return { lines: state.lines.filter((line) => line.productId !== action.productId) };
    case "SET_QUANTITY":
      if (action.quantity <= 0) {
        return { lines: state.lines.filter((line) => line.productId !== action.productId) };
      }
      return {
        lines: state.lines.map((line) =>
          line.productId === action.productId ? { ...line, quantity: action.quantity } : line,
        ),
      };
    case "CLEAR":
      return { lines: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { lines: [] });

  const value = useMemo<CartContextValue>(() => {
    const totalCount = state.lines.reduce((sum, line) => sum + line.quantity, 0);
    const totalPrice = state.lines.reduce((sum, line) => {
      const product = products.find((item) => item.id === line.productId);
      return sum + (product?.price ?? 0) * line.quantity;
    }, 0);

    return {
      lines: state.lines,
      addItem: (productId, quantity) => dispatch({ type: "ADD", productId, quantity }),
      removeItem: (productId) => dispatch({ type: "REMOVE", productId }),
      setQuantity: (productId, quantity) =>
        dispatch({ type: "SET_QUANTITY", productId, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
      totalCount,
      totalPrice,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
