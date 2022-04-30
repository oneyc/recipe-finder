import { Fragment, useState } from "react";
import { Card, Button } from "react-bootstrap";
import SearchBar from "../components/SearchBar"
import image01 from "../assets/curry-chickpeas.jpg"

const SearchResults = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    //https://developer.edamam.com/edamam-docs-recipe-api
    return(
        <Fragment>
            {console.log("Props", props.ingredientsData)}
            <div className="container mt-5">            
                <SearchBar/>
            </div>
            {isLoading ? <h1>Loading</h1> :             
                <div className="container mt-5">
                    <div className="row gy-4">             
                        <div className="col-6 col-sm-6 col-md-4">
                            <Card>
                                <Card.Img variant="top" src={image01} className='rounded-3' />
                                <Card.Body>
                                    <Card.Title>Curry chickpeas</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <Card>
                                <Card.Img variant="top" src={image01} className='rounded-3' />
                                <Card.Body>
                                    <Card.Title>Curry chickpeas</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <Card>
                                <Card.Img variant="top" src={image01} className='rounded-3' />
                                <Card.Body>
                                    <Card.Title>Curry chickpeas</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4">
                            <Card>
                                <Card.Img variant="top" src={image01} className='rounded-3' />
                                <Card.Body>
                                    <Card.Title>Curry chickpeas</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default SearchResults;