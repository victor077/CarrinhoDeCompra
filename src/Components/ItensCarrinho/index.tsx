import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ImagemDoProduto from "../ItensCarrinho/ImagemDoProduto"
import BottuonAdicionarCarrinho from "../ItensCarrinho/BottuonAdicionarCarrinho";
import "../ItensCarrinho/ImagemDoProduto/style.css";
import Box from "@mui/material/Box";




const ItensCarrinho = () => {
  return (
    <Box>
      <Box className="titulo">
        <Typography variant="h4">Lista de Produtos</Typography>
      </Box>

      <Box className="Bainner">
        <Paper className="container" elevation={3}>
          <Box className="imagemProduto">
            <ImagemDoProduto />
            <Box className="texto">
              <Typography className="prod">Nome do Produto:</Typography>
              <Typography>Preço:</Typography>
            </Box>
            <Box className="carrinho">
              <BottuonAdicionarCarrinho />
            </Box>
            <Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box className="Bainner">
        <Paper className="container" elevation={3}>
          <Box className="imagemProduto">
          <ImagemDoProduto />
            <Box className="texto">
              <Typography className="prod">Nome do Produto:</Typography>
              <Typography>Preço:</Typography>
            </Box>
            <Box className="carrinho">
            <BottuonAdicionarCarrinho />
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box className="Bainner">
        <Paper className="container" elevation={3}>
          <Box className="imagemProduto">
          <ImagemDoProduto />
            <Box className="texto">
              <Typography className="prod">Nome do Produto:</Typography>
              <Typography>Preço:</Typography>
            </Box>
            <Box className="carrinho">
            <BottuonAdicionarCarrinho />
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box className="Bainner">
        <Paper className="container" elevation={3}>
          <Box className="imagemProduto">
          <ImagemDoProduto />
            <Box className="texto">
              <Typography className="prod">Nome do Produto:</Typography>
              <Typography>Preço:</Typography>
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
