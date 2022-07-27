import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/logo.png';

const Navbar = styled.nav`
    display: flex;
    justify-content: flex-start;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    top: 0;
    left: 0;
    height: 85px;
    background: #3f1061;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
`

const LogoLink = styled(Link)`
    width: 100%;
    height: 80px;
    background-repeat: no-repeat;
    background-size: contain;
    filter: brightness(0) invert(1);
    background-image: url(${logo});
`;

export {
    Navbar,
    LogoLink
}

