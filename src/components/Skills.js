
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2><br/>
                        <h1>Programming Languages</h1>
                        <p> I have learned several programming languages through my education and personal interests.<br></br>
                            Check out my projects section to see specific languages in action. 
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                                <h5>C language</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-plain.svg" className= "white-icon"/>
                                <h5>Powershell</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
                                <h5>Bash</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel><br/><br/><br/>
                        <h1>Development/Tools/Databases</h1>
                        <p> 
                            I have used a wide range of software to manage projects since the beginning of my programming journey.
                            <br></br> 
                            Please note this is not a complete list, but a selection of software I am most comfortable with. 
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="white-icon"/>
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" />
                                <h5>Eclipse</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
                                <h5>IntelliJ IDEA</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain.svg" className= "white-icon"/>
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unix/unix-original.svg" />
                                <h5>Unix</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
