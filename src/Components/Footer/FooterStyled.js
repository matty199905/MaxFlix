import styled from 'styled-components'



export const FooterContainer = styled.footer`
position: absolute;
bottom: -100px;
width: 100vw;
height: 130px;
background: linear-gradient(#222222,black,black,black);
p {
    opacity: 0.7;
}
@media (max-width:768px) {
    height: 90px;
    bottom: -90px;
}
`