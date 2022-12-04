import React from 'react';
import useTitle from '../../Hooks/useTitle';
import "../../styles/blogs.css"

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className='container blog-container my-2 my-lg-4 title'>
            <div className="blog bg-white shadow-lg p-4">
                <h1>What is cors?</h1>
                <p className='fs-5'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className="blog bg-white shadow-lg p-4">
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className='fs-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    <br />
                    <p className='fs-5'>Others options are, Parse, Back4app, Kuzzle, Nhost, AWS amplify etc.</p>
            </div>
            <div className="blog bg-white shadow-lg p-4">
                <h1>How does the private route work?</h1>
                <p className='fs-5'>The private route works as same as the public route, the basic difference is that it checks if the user is log in or not if the user is logged in then it show its children otherwise it remains hidden.</p>
                <br />
                <p className='fs-5'>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.</p>
            </div>
            <div className="blog bg-white shadow-lg p-4">
                <h1>What is Node? How does Node work?</h1>
                <p className='fs-5'>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <br />
                <p className='fs-5'>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </div>
    );
};

export default Blogs;