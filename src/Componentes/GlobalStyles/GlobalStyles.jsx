import { css, Global } from "@emotion/react"

const styles = css`
    * {
        font-Family: 'Montserrat', Poppins;
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
    return (<Global styles={styles} />)
}