import React, {useState, useEffect} from "react"
import Portfolio from "../projectList"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function Projects(props) {
    const [visibility, setVisibility] = useState("")


    useEffect(() => {
        setVisibility(props.visibility)
    }, [props.visibility])
    
    console.log("visibility", visibility)


    return (
        <div className="foo">
                    <Container id="flyoutMenu"  className={visibility}> 
                        
                    
                        
                    <Row className="justify-content-between">
            {Portfolio.map((item) => {
                return (
                        <Col lg={2} sm={6} key={item.name}>
                            

                            <Card  className="mb-4" style={{width: "18rem", height: "18rem", overflow: "auto"}}>
                                <Card.Body>
                                    <Card.Img variant="top" src={item.img} style={{height: "9rem"}}></Card.Img>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text><a href={item.repo} target="_blank">Repo</a></Card.Text>
                                    <Card.Text><a href={item.deployed} target="_blank">Deployed</a></Card.Text>
                                    <Card.Text>{item.tools}</Card.Text>
                                    <Card.Text>{item.role}</Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>

)
})}
</Row>


</Container>
        </div>

    )
}

export default Projects