import { css, Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";

const tema = {
  fonte: " 'Montserrat', Poppins; ",
  cores: {
    cinzaPadrao: "#404040",
    branco: "#FFFFFF",
    preto: "#000000",
    verde: "#008000",
    vermelho: "#FF0000",
    azulSaldo: "#0000FF",
    corSombra: " rgba(64,64,64,1) ",
    cinzaSecundario:  " rgba(255, 255, 255, 0.2)",
  },
};

const styles = tema => {
  return {
    html: {
        fontFamily: tema.fonte,
    }, 
    body : {
        margin: 0,
        padding: 0,
    },
}
}


 

export function GlobalStyles({ children }) {
  return (
    <ThemeProvider theme={tema} >
      <Global styles={styles} />
         {children}
    </ThemeProvider>
  );
}
