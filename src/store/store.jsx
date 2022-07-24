import { createContext, useContext, useEffect, useState } from "react";

// 1- La definicion del contexto
const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

// 2- En Store manejo la Implementacion de los metodos
export default function Store({ children }) {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
  };

  const getItem = (id) => {
    const item = items.find((item) => item.id === id);
    return item;
  };

  const updateItem = (item) => {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...item];

    temp[index] = { ...item };
  };

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// 3- Exporto el hook para poder usarlo en un componente
export function useAppContext() {
  return useContext(AppContext);
}
