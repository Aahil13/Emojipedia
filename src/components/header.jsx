import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container className='d-flex justify-content-center'>
                    <Navbar.Brand href="#" className='text-light'>Aahil's Emojipedia</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
