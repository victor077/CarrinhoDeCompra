import React from "react";
import ItensCarrinho from "../Components/ItensCarrinho";
import Header from "../Components/Header";
import { Box } from "@mui/system";

const App = () => {
  return (
    <div>
      <Box className="btn">
      <Header />
      </Box>
      <ItensCarrinho></ItensCarrinho>
    </div>
  );
};

export default App;
