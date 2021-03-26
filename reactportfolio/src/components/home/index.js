import React, {useState, useEffect} from "react"
import Projects from "../Projects"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ProfilePic from "../../assets/images/profile-pic.png"


function Home() {

    let optionsArray = ["Resume", "Projects", "Contact", "About Me"]

    const [option, setOption] = useState()
    const [reveal, setReveal] = useState(false)

    useEffect(() => {
        if(option === "Resume"){
            menuReveal("resume")
        } else if (option === "Projects"){
            menuReveal("projects")
            setReveal(true)
        } else if (option === "Contact"){
            menuReveal("contact")
        } else if (option === "About Me"){
            menuReveal("about me")
        } 

    }, [])


    function menuReveal(menuOption){
        console.log("here", menuOption)
    }

    console.log("reveal", reveal)
    return (
        <div>
            <Jumbotron className="text-center" style={{ fontFamily: "Times New Roman" }}>
               
                    <img src={ProfilePic} alt="Josh Payne" width="200rem"></img>
                    <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}> Josh Payne Portfolio </h1>
                    <p>Contact Me: paynejoshua1@gmail.com</p>

                

            </Jumbotron>
            <Container>
                <Row>
                    {optionsArray.map((item) => {
                        return (
                            <Col key={item} lg={6} sm={12}>
                                <Card style={{ width: "18rem", height: "9rem", backgroundColor: "#2FA1D2", color: "white" }}>
                                    <Card.Body>
                                        <Button className="btnImportant" onClick={() => setOption(item)}>
                                            

                                        </Button>
                                        <Card.Text className="text-center">
                                            {item}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>)
                    })}
                </Row>
                
                {
                    reveal ? <Projects visibility="show" /> : <Projects visibility="hide"/>
                }

            </Container>
           

        </div>
    )
}

export default Home