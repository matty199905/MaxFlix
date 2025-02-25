import { Link } from "react-router-dom";
import styled from "styled-components";


export const CardLink = styled(Link)`

@media (max-width: 515px) {
    .responsive{
        margin-bottom: -20px;
        margin-left: -5px;
        display: flex;
        align-items: center;
        flex-direction: row;
        background-color: rgb(35, 35, 35);
        border: 1px solid #808080af;
        border-radius: 20px;
        padding:8px;
        width: 91vw;
        
} 
.responsive-img{
    max-height: 120px;
    max-width: 120px;
}

    .responsive-footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        text-align: right;
        max-width: 150px;
  max-height: 100px;
    }
  }

`