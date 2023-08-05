import React from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import './Styles.css'; // Import the CSS file
const App = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Recruitment Portal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#submit">Submit a Job</Nav.Link>
          {/* Add more navigation links as needed */}
        </Nav>
      </Navbar>

      {/* Jumbotron */}
      <div className="jumbotron" style={containerStyle}>
        <Container>
          <h1 style={{ color: '#007bff' }}>Welcome to the Recruitment Portal</h1>
          <p style={{ color: '#333', fontSize: '18px' }}>
            Find and hire the best software engineers, product managers,
            and data scientists for your company.
          </p>
          <Button variant="primary">Get Started</Button>
        </Container>
      </div>
    </div>
  );
};

export default App;
