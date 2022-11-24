import React from 'react';
import {Navbar,Container,Nav,Dropdown} from 'react-bootstrap';



export const NavBar = () => {
    return(
        <Navbar bg="dark" variant={'dark'} expand="lg">
            <Container>
                <Navbar.Brand href="#home">6404062630414 Napussorn Peawpunchoo</Navbar.Brand>
                
                
                
                <Nav className="me-auto">
                    {/* <Nav.Link href="/h">Home</Nav.Link> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="nav-dropdown-dark">Root of equation</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Bisection">Bisection</Dropdown.Item>
                            <Dropdown.Item href="/False-Position">False-Position</Dropdown.Item>
                            <Dropdown.Item href="/OnePointIteration">One-Point</Dropdown.Item>
                            <Dropdown.Item href="/NewtonRaphso">Newton-Raphson</Dropdown.Item>
                            <Dropdown.Item href="/Secant">Secant</Dropdown.Item>
                            {/* <Dropdown.Item href="/Napussorn">Napussorn</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="nav-dropdown-dark">Linear Algebraic Equatuions</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Cramer's-Rule">Cramer's Rule</Dropdown.Item>
                            <Dropdown.Item href="/GuassElimination">Guass Elimination</Dropdown.Item>
                            <Dropdown.Item href="/Guass-Jordan">Guass Jordan</Dropdown.Item>
                            <Dropdown.Item href="/Matrix-Inversion">Matrix Inversion</Dropdown.Item>
                            <Dropdown.Item href="/LU-Decomposition">LU Decomposition</Dropdown.Item>
                            <Dropdown.Item href="/Cholesky-Decomposition">Cholesky Decomposition</Dropdown.Item>
                            <Dropdown.Item href="/Jacobi-Iteration">Jacobi Iteration</Dropdown.Item>
                            <Dropdown.Item href="/Guass-Seidel">Guass-Seidel</Dropdown.Item>
                            <Dropdown.Item href="/Conjugate-Gradient">Conjugate Gradient</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    
                </Nav>
                

                

            </Container>
        </Navbar>
    );


};

{/* <Router>
            <div>
                <Navbar bg="dark" variant={'dark'} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <NavDropdown title="Roots of Equations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="\Bisection">Bisection</NavDropdown.Item>
                                <NavDropdown.Item href="#\False-Position">False-Position</NavDropdown.Item>
                                <NavDropdown.Item href="\One-Point Iteration">One-Point Iteration</NavDropdown.Item>
                                <NavDropdown.Item href="\Newton-Raphso">Newton-Raphson</NavDropdown.Item>
                                <NavDropdown.Item href="\Secant">Secant</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Linear Algebraic Equatuions" id="basic-nav-dropdown">
                                <NavDropdown.Item href="\Cramer's-Rule">Cramer's Rule</NavDropdown.Item>
                                <NavDropdown.Item href="#\Guass-Elimination">Guass Elimination</NavDropdown.Item>
                                <NavDropdown.Item href="\Guass-Jordan">Guass Jordan</NavDropdown.Item>
                                <NavDropdown.Item href="\Matrix-Inversion">Matrix Inversion</NavDropdown.Item>
                                <NavDropdown.Item href="\LU-Decomposition">LU Decomposition</NavDropdown.Item>
                                <NavDropdown.Item href="\Cholesky-Decomposition">Cholesky Decomposition</NavDropdown.Item>
                                <NavDropdown.Item href="\Jacobi-Iteration">Jacobi Iteration</NavDropdown.Item>
                                <NavDropdown.Item href="\Guass-Seidel">Guass-Seidel</NavDropdown.Item>
                                <NavDropdown.Item href="\Conjugate-Gradient">Conjugate Gradient</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
            
            <Routes>
                <Route path="\Cramer's-Rule" element={<Cramer/>}/>
            </Routes>

          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
       
            