import React from 'react';
import { Card } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center m-'>This page for blogs</h2>
            <div className='my-cards container m-2'>
                <div className='w-50'>
                    <Card>
                        <Card.Header className='bg-dark text-white'>Difrent between node.js and javascript</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node. js is a server-side scripting language based on the Google Chrome V8 engine
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='w-50'>
                    <Card>
                        <Card.Header className='bg-dark text-white'>Should we learn Mongobd</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Mongodb is a database managment system.if we want to put storage our data to any database there are so many option to keep.MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className='w-50'>
                    <Card>
                        <Card.Header className='bg-dark text-white'>What is the diffrent between SQL and noSQL database system</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className='w-50'>
                    <Card>
                        <Card.Header className='bg-dark text-white'>Purpse of JWT Token</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                JWT are most impotant sequire authentication system.JWT are mainly used for authentication. After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blogs;