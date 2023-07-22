import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="me.png"
              width="25"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Film Year
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default NavBar