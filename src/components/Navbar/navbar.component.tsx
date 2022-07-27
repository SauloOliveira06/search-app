import { Navbar, LogoLink } from './styles';

const NavbarComponent = () => {
    return (
        <>
            <Navbar>
                <LogoLink to="/list" />
            </Navbar>
        </>
    )
}

export default NavbarComponent;