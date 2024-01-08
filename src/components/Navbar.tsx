import { Container, Nav, Button, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button onClick={openCart} style={{ position: "relative" }} variant='outline-primary' className='rounded-circle'>
                        <BsCart4 style={{ width: "1.5rem", height: "2.2rem" }} />
                        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ color: "white", width: "1.3rem", height: "1.3rem", position: "absolute", bottom: 0, right: 0, transform: 'translate(25%, -145%)'}}>{cartQuantity}</div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    )
}