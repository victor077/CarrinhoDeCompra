import { createStyles, makeStyles, Theme } from "@newcon/ui/Styles";

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    btn: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "1em",
    },
    
  })
);


export default useStyles;
