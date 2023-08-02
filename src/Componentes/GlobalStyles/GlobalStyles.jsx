import { css, Global } from "@emotion/react"
import { ThemeProvider } from "@emotion/react"


const tema = {
    fonte: " 'Montserrat', Poppins; ",
    cores: {
        cinzaPadrao: "#404040",
        branco: "#FFFFFF", 
        preto: "#000000",
        verde: "#008000",
        vermelho: "#FF0000",
        azulSaldo: "#0000FF",
        corSombra: " rgba(64,64,64,1) "
    }
}


const styles = css`
    * {
        font-Family: ${tema.fonte};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

`


export function GlobalStyles () {
    return (
        <ThemeProvider theme={tema}>
            <Global styles={styles} />
        </ThemeProvider>
    )
}