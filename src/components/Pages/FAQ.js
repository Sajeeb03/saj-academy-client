import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "../../styles/Faq.css"

const FAQ = () => {
    return (
        <div className='container faq'>
            <Accordion>
                <Accordion.Item className='mb-4 shadow-lg' eventKey="0">
                    <Accordion.Header>What is Saj Academy ?</Accordion.Header>
                    <Accordion.Body>
                        Saj Academy is a demo learning platform but I really have a dream to build a academy to teach others. One day I will be there.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='mb-4 shadow-lg' eventKey="1">
                    <Accordion.Header>Is it a single page application?</Accordion.Header>
                    <Accordion.Body>
                        Of course it is a single page application. React router was used to create this single page application. And now a days single page application is more popular than most others.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='mb-4 shadow-lg' eventKey="2">
                    <Accordion.Header>How did you implied the authentication systems?</Accordion.Header>
                    <Accordion.Body>
                        Google firebase helped a lot for the authentication operation and google and github and others have their own way to connect with firebase visit the firebase website you may find some peace of mind.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='mb-4 shadow-lg' eventKey="3">
                    <Accordion.Header>Still not satisfied? Look inside</Accordion.Header>
                    <Accordion.Body>
                        Mail your question to sajeebmuntasir0@gmail.com, I will try my best to answer!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;