import React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const BottuonAdicionarCarrinho = () => {
  return (
    <Button
      size="small"
      color="info"
      variant="outlined"
      startIcon={<AddShoppingCartIcon />}
    >
      Adicionar no Carrinho{" "}
    </Button>
  );
};

export default BottuonAdicionarCarrinho;
