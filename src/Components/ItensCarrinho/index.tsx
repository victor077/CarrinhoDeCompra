import React from "react";
import Paper from "@newcon/ui/Paper";
import Typography from "@newcon/ui/Typography";
import ImagemDoProduto from "../ItensCarrinho/ImagemDoProduto";
import BottuonAdicionarCarrinho from "../ItensCarrinho/BottuonAdicionarCarrinho";
import Box from "@newcon/ui/Box";
import useStyles from "../ItensCarrinho/ImagemDoProduto/style"


type Produtosprops = {
  id?: number;
  title?: string;
  price?: number;
  picture?: string;
};

const ItensCarrinho = ({ title, price }: Produtosprops) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.Bainner}>
        <Paper className="container" elevation={3}>
          <Box className="imagemProduto">
            <ImagemDoProduto />
            <Box className="texto">
              <Typography className="prod">{title}</Typography>
              <Typography>${price}</Typography>
            </Box>
            <Box className="carrinho">
              <BottuonAdicionarCarrinho />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ItensCarrinho;
