import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ModalItensCarrinho from "../Header/ModalItensCarrinho";

const Header = () => {
   
    const [mostraModal, setMostraModal] = useState(false);
    
  const handleAbrirModal = ()=>{
        setMostraModal(true)
    }

    const handleFecharModal = () => {
        setMostraModal(false)
    };


  return (
    <>
      <IconButton onClick={handleAbrirModal}>
       <ShoppingCartIcon />
      </IconButton>
      <ModalItensCarrinho open={mostraModal} onClose={handleFecharModal}/>
    </>
  );
};

export default Header;
