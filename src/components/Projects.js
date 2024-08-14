import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import projImg1 from "../assets/img/firetire-home.PNG";
import projImg2 from "../assets/img/firetire-read.PNG";
import projImg3 from "../assets/img/firetire-checkout.PNG";
import projImg4 from "../assets/img/firetire-confirmation.PNG";
import projImg5 from "../assets/img/firetire-create.PNG";
import projImg6 from "../assets/img/firetire-about.PNG";
import projImg7 from "../assets/img/firetire-db.PNG";
import projImg8 from "../assets/img/pokeStart.PNG";
import projImg9 from "../assets/img/pokeMap.PNG";
import projImg10 from "../assets/img/pokeWild.PNG";
import projImg11 from "../assets/img/pokeAI.PNG";
import projImg12 from "../assets/img/pokeCenter.PNG";
import projImg13 from "../assets/img/mh-home.PNG";
import projImg14 from "../assets/img/mh-screen.PNG";
import projImg15 from "../assets/img/mh-total.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import poke327vid from "../assets/videos/Poke327 Project Video.mp4";
import firetirevid from "../assets/videos/Firetire Project Video.mp4";
import mhcvid from "../assets/videos/MHCalc Project Video.mp4";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    { title: "Home Page", description: "A statically designed home page featuring the overall theme of the website.", imgUrl: projImg1 },
    { title: "Store Page", description: "The motorcycles that appear here are pulled from a database and displayed on each card.", imgUrl: projImg2 },
    { title: "Checkout Page", description: "A motorcycle is pulled by its unique ID from the database and displayed. The payment detail inputs use security practices to prevent buffer overflow.", imgUrl: projImg3 },
    { title: "Confirmation Page", description: "A simple confirmation page that also pulls by id from the database.", imgUrl: projImg4 },
    { title: "Create A Product Page", description: "A way to put your own items to the store page. Uploads to the database. ", imgUrl: projImg5 },
    { title: "About Me Page", description: "A static page offering more information on myself and about the project.", imgUrl: projImg6 },
    { title: "Database", description: "MongoDB in action! This is where the backend pulls information from to fill the store.", imgUrl: projImg7 }
  ];

  const projects2 = [
    { title: "Game Start", description: "Upon execution, choose your first Pokémon to play with.", imgUrl: projImg8 },
    { title: "Map Design", description: "The terrain of the game is randomly generated. The world is a 200x200 grid that doesn't save a map/cell until the player steps onto it.", imgUrl: projImg9 },
    { title: "Wild Pokémon", description: "There is a high probability in tall grass that you will encounter a random Pokémon you can catch as your own.", imgUrl: projImg10 },
    { title: "Enemy AI", description: "Battles begin when the player tries to occupy the space of an enemy. Each enemy moves differently and utilizes dijkstra's algorithm to find the shortest path to the player. Each enemy AI uses all possible moves, items, and Pokémon to win.", imgUrl: projImg11 },
    { title: "PokéCenter and PokéMart", description: "Centers and Marts are used to refill the player's inventory back to its original state.", imgUrl: projImg12 }
  ];

  const projects3 = [
    { title: "Man-hour Icon", description: "I think there is something special about seeing the icon to an app you personally made.", imgUrl: projImg13 },
    { title: "Man-hour Inputs", description: "A simple format to calculate daily man-hours.", imgUrl: projImg14 },
    { title: "Man-hour Total", description: "The app automatically calculates the weekly total for submission. The enetered information is saved on the app until the user presses \"Reset\".", imgUrl: projImg15 }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <h4>Check out on <a href="https://github.com/jacobISU">GitHub</a>!</h4>
                  <br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Firetire</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">ASCII Pokémon</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Man-hour Calculator</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <p>Project Description: This was my final project for my "Software Construction and User Interfaces" class. We used React.js to run the frontend and utilized MongoDB for the backend.</p>
                        <h4>Firetire Website Screenshots</h4>
                        <Carousel interval={null} className="carousel-border">
                          {projects1.map((project, index) => (
                            <Carousel.Item key={index}>
                              <img className="project-img" src={project.imgUrl} alt={project.title} />
                              <Carousel.Caption className="caption-project">
                                {project.title} <br></br>{project.description}
                              </Carousel.Caption>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                        <br></br>
                        <div className="video-container"> 
                          <h4>Firetire Website Demo</h4>
                          <video controls>
                            <source src={firetirevid} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Project Description: This was a semester-long project for my "Advanced Programming Techniques" class in which we used C and C++ to build a Pokémon ASCII game that is playable in a terminal.</p>
                        <p>Characters: <span style={{ color: 'white', fontSize: '30px' }}>@</span> - player, <span style={{ color: 'red', fontSize: '30px' }}>h</span>-hiker, <span style={{ color: 'red', fontSize: '30px' }}>r</span>-rival, <span style={{ color: 'red', fontSize: '30px' }}>e</span>-explorer, <span style={{ color: 'red', fontSize: '30px' }}>w</span>-wanderer, <span style={{ color: 'red', fontSize: '30px' }}>m</span>-swimmer, <span style={{ color: 'red', fontSize: '30px' }}>s</span>-sentry</p>
                        <p>Terrain: <span style={{ color: '#FFFFAD', fontSize: '30px' }}>#</span>-road, <span style={{ color: 'lightgreen', fontSize: '30px' }}>:</span>-tall grass, <span style={{ color: 'lightgreen', fontSize: '30px' }}>.</span>-short grass, <span style={{ color: 'grey', fontSize: '30px' }}>0</span>-boulder, <span style={{ color: 'lightgreen', fontSize: '30px' }}>4</span>-tree, <span style={{ color: 'grey', fontSize: '30px' }}>%</span>-mountains, <span style={{ color: 'white', fontSize: '30px' }}>C</span>-PokéCenter, <span style={{ color: 'white', fontSize: '30px' }}>M</span>-PokéMart, <span style={{ color: 'lightblue', fontSize: '30px' }}>~</span>-water</p>
                        <h4>ASCII Pokemon Screenshots</h4>
                        <Carousel interval={null} className="carousel-border">
                        {projects2.map((project, index) => (
                            <Carousel.Item key={index}>
                              <img className="project-img" src={project.imgUrl} alt={project.title} />
                              <Carousel.Caption className="caption-project">
                                {project.title} <br></br>{project.description}
                              </Carousel.Caption>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                        <br></br>
                        <div className="video-container">
                          <h4>ASCII Pokemon Demo</h4>
                          <video controls>
                            <source src={poke327vid} type="video/mp4" />
                              Your browser does not support the video tag.
                          </video>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> Project Description: I made this app for the manager of a landscaping business. Instead of receiving information in various formats to then calculate, each crew is able to calculate their own man-hours and pass it to him directly via text.</p>
                        <h4>Man-Hour Calculator Screenshots</h4>
                        <Carousel interval={null} className="carousel-border">
                          {projects3.map((project, index) => (
                            <Carousel.Item key={index}>
                              <img className="project-img" src={project.imgUrl} alt={project.title} />
                              <Carousel.Caption className="caption-project">
                                {project.title} <br></br>{project.description}
                              </Carousel.Caption>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                        <br></br>
                        <div className="video-container">
                          <h4>Man-Hour Calculator Demo</h4>
                          <video controls>
                            <source src={mhcvid} type="video/mp4" />
                              Your browser does not support the video tag.
                          </video>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}