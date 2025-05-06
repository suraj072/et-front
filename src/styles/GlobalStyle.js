import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f8f9fa;
        color: #222260;
        line-height: 1.6;
        overflow-x: hidden;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1.5rem;
        line-height: 1.2;
        color: var(--primary-color);
    }

    p {
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }

    @media (max-width: 768px) {
        body {
            font-size: 14px;
        }

        h1 {
            font-size: 1.8rem;
        }

        h2 {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyle;
