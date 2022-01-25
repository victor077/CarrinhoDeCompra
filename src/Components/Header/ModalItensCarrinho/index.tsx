import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Paper from "@mui/material/Paper";
import ImagemDoProdutoRemover from "../ModalItensCarrinho/ImagemDoProdutoRemover";
import Typography from "@mui/material/Typography";
import ButtonRemoverCarrinho from "../ModalItensCarrinho/ButtonRemoverCarrinho"
import { Box } from "@mui/system";
import "../ModalItensCarrinho/ImagemDoProdutoRemover/style.css"


type ModalItensCarrinhoProps = {
  open: boolean;
  onClose: () => void;
};

const ModalItensCarrinho = ({ open, onClose }: ModalItensCarrinhoProps) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box className = "text">
      <DialogTitle> <h2>Carrinho</h2> </DialogTitle>
      </Box>
      <Box className = "banner"> 
        <Paper className="paper" elevation={3}>
        <Box className = "conteudo">
          <Box className = "img">
        <ImagemDoProdutoRemover />
        </Box> 
        <Box className ="texto2">
        <Typography className ="prod">Nome do Produto:</Typography>
        <Typography>Preço:</Typography>
        </Box>
        <Box className ="car">
        <ButtonRemoverCarrinho />
        </Box>
        </Box>
        </Paper>
        </Box>

        <Box className = "banner"> 
        <Paper className="paper" elevation={3}>
        <Box className = "conteudo">
          <Box className = "img">
        <ImagemDoProdutoRemover />
        </Box> 
        <Box className ="texto2">
        <Typography className ="prod">Nome do Produto:</Typography>
        <Typography>Preço:</Typography>
        </Box>
        <Box className ="car">
        <ButtonRemoverCarrinho />
        </Box>
        </Box>
        </Paper>
        </Box>

        <Box className = "banner"> 
        <Paper className="paper" elevation={3}>
        <Box className = "conteudo">
          <Box className = "img">
        <ImagemDoProdutoRemover />
        </Box> 
        <Box className ="texto2">
        <Typography className ="prod">Nome do Produto:</Typography>
        <Typography>Preço:</Typography>
        </Box>
        <Box className ="car">
        <ButtonRemoverCarrinho />
        </Box>
        </Box>
        </Paper>
        </Box>

        <Box className = "banner"> 
        <Paper className="paper" elevation={3}>
        <Box className = "conteudo">
          <Box className = "img">
        <ImagemDoProdutoRemover />
        </Box> 
        <Box className ="texto2">
        <Typography className ="prod">Nome do Produto:</Typography>
        <Typography>Preço:</Typography>
        </Box>
        <Box className ="car">
        <ButtonRemoverCarrinho />
        </Box>
        </Box>
        </Paper>
        </Box>
        <Box className = "total">
        <DialogTitle> <h4>Total:</h4> </DialogTitle>
        </Box>
      <DialogContent />
    </Dialog>
  );
};

export default ModalItensCarrinho;
