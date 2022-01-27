import React, { useState, useEffect } from "react";
import ItensCarrinho from "../Components/ItensCarrinho";
import Header from "../Components/Header";
import Box from "@newcon/ui/Box";
import api from "../service/api";
import Titulo from "../Components/ItensCarrinho/Titulo";
import CarrinhoProvider from "../Context/Context";

import { useCarrinhoContext } from "../Context/Context";

const App = () => {
  const {setListaProdutos, listaprodutos} = useCarrinhoContext()

  useEffect(() => {
    api
      .get("/")

      .then((Response) => setListaProdutos(Response?.data))
      .catch((err) => {
        throw new Error("Nenhum produto encontrado" + err);
      });
  }, []);

  return (
    <CarrinhoProvider>
      <Header />
      <Titulo />

      {listaprodutos?.map((data) => {
        return (
          <ItensCarrinho
            title={data.title}
            price={data.price}
            picture={data.picture}
          />
        );
      })}
    </CarrinhoProvider>
  );
};

export default App;
