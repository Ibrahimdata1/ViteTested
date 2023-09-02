import {css} from 'styled-components'

export const mobile =(props:any)=>{
    return css`
        @media only screen and (max-width:992px){
            ${props}
        }
    `;
}
export const mobileMini =(props:any)=>{
    return css`
        @media only screen and (max-width:280px){
            ${props}
        }
    `;
}