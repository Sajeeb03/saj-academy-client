import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blogs = () => {
    return (
        <Container className='mt-4 g-3'>
            <Row className='mb-4'>
                <Col className='bg-white shadow-lg p-3 mx-auto' lg={5}>
                    <h1>What is cors?</h1>
                    <p className='fs-5'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </Col>
                <Col className='bg-white shadow-lg p-3 mx-auto' lg={5}>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className='fs-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    <br />
                    <p className='fs-5'>Others options are, Parse, Back4app, Kuzzle, Nhost, AWS amplify etc.</p>
                </Col>
            </Row>
            <Row>
                <Col className='bg-white shadow-lg p-3 mx-auto' lg={5}>
                    <h1>What is cors?</h1>
                    <p className='fs-5'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </Col>
                <Col className='bg-white shadow-lg p-3 mx-auto' lg={5}>
                    <h1>What is cors?</h1>
                    <p className='fs-5'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;