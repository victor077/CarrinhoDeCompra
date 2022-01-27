import React, { useState, createContext, ReactNode, useContext } from "react";

type ProdutoProviderProps = {
  children: ReactNode;
};

type ProdutosType = {
  id: number;
  title: string;
  price: number;
  picture: string;
};

type ContextCarrinho = {
  listaprodutos?: ProdutosType[];
  setListaProdutos: (state: ProdutosType[]) => void;
};

const CarrinhoContext = createContext<ContextCarrinho>({} as ContextCarrinho);

function CarrinhoProvider({ children }: ProdutoProviderProps) {
  const [listaProdutos, setListaProdutos] = useState<ProdutosType[]>([]);//estado inicial

  const value = {
    listaProdutos,
    setListaProdutos,
  };

  return (
    <CarrinhoContext.Provider value={value}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinhoContext = () => {
  const context = useContext(CarrinhoContext);

  if (!context) {
    throw new Error("useLojaContext precisa estar abaixo de um LojaProvider");
  }

  return context;
};

export default CarrinhoProvider;
