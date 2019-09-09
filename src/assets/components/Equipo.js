import React from "react"
import { Icon, Carousel } from 'antd';
import 'antd/dist/antd.css';
import '../styles/styles.css'

class Equipo extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
        this.state = {
            showperson: false,
            name: null,
            img: null,
            description: null,
            link: null
        };
    }
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }

    ChangeCurrentPerson = (name, img, description, link) => {
        this.setState({ showperson: true, name: name, img: img, description: description, link: link })
    }


    render() {
        console.log(this.state.showperson);
        console.log(this.state.name)

        const props = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        };
        const consultores = [
            { name: "Cristian Mantilla", img: "mantilla", link: "#", description: "Systems and Computing Engineering student at the Universidad Nacional de Colombia and active partaker of the Colombian Collegiate Programming League (CCPL) and member of the Laboratorio de Investigación de Sistemas Inteligentes (LISI) UNAL" },
            { name: "Brayan Guevara", img: "brayan", link: "#", description: "Estudiante de pregrado en Ingeniería de Sistemas y Computación de la Universidad Nacional de Colombia, con avance del 56% de la carrera, con capacidad para programar en C++, Python y Java, conocimientos en bases de datos relacionales, HTML, CSS, JavaScript, y manejo de la API de Google Maps, Bootstrap y Phaser.Z" },
            { name: "Jose Organista", img: "jose", link: "https://www.linkedin.com/in/jose-calderon-b6b096136/", description: "Actualmente trabajo como desarrollador el la facultad de Ciencias Economicas de la Universidad donde utilizo diferentes tecnologias como base de datos (mysql), desarrollo web (laravel, vue, html, css, JavaScript) entre otras" },
            { name: "Juan Pulido", img: "jota", link: "https://www.linkedin.com/in/jjpulidos/", description: "Systems and Computing Engineer Student, main interests are design and analysis of algorithms, data science, artificial intelligence and related fields like machine learning and deep learning." }
        ]

        return (
            <React.Fragment>
                <div className="container-equipo">
                    <Carousel className="carousel-general" autoplay autoplaySpeed="100" dotPosition="top" ref={node => (this.carousel = node)} {...props}>
                        <div>
                            <div className="persona-general">
                                <div className="persona-especifica">
                                    {consultores.slice(0, 8).map((persona, id) => {
                                        let bg = require(`../media/equipo/${persona.img}.jpg`)
                                        return (
                                            <div className="wrapper">
                                                <div className="cols">
                                                    <div className="col" onTouchStart="this.classList.toggle('hover');">
                                                        <div className="container" onClick={() => this.ChangeCurrentPerson(persona.name, persona.img, persona.description, persona.link)}>
                                                            <div className="front"
                                                                style={{ backgroundImage: `url(${bg}` }}>
                                                                <div className="inner">
                                                                </div>
                                                            </div>
                                                            <div className="back">
                                                                <div className="inner">
                                                                    <p className="title-inner">{persona.name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                {this.state.showperson ?
                    <div className="container-master-single-person" id="person">
                        <div className="container-master-photo-single-person">
                            <div className="container-photo-single-person">
                                <img src={require(`../media/equipo/${this.state.img}.jpg`)} alt={this.state.name} className="img-single-person" />
                            </div>
                        </div>
                        <div className="container-master-info-single-person">
                            <p className="name-single-person">{this.state.name}</p>
                            <p className="description-single-person">{this.state.description}</p>
                            <a href={this.state.link} target="_blank" rel="noopener noreferrer"><Icon type="linkedin" className="icon-social-single-person" /></a>
                        </div>
                    </div>
                    :
                    <div />}
            </React.Fragment>
        )
    }
}
export default Equipo