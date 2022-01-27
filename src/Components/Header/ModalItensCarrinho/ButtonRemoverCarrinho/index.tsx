import React from "react";
import Button from "@newcon/ui/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ButtonRemoverCarrinho = () => {
  return (
    <Button
      size="small"
      color="error"
      variant="outlined"
      startIcon={<AddShoppingCartIcon />}
    >
      Remover Produto{" "}
    </Button>
  );
};

export default ButtonRemoverCarrinho;
