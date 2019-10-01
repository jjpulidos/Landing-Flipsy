import React from "react"
import { Icon, Carousel } from 'antd';
import 'antd/dist/antd.css';
import '../styles/styles.css'

class Mockups extends React.Component {

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
            {img: '0'},
            {img: '1'},
            {img: '2'},
            {img: '3'},
            {img: '4'},
            {img: '5'},
            {img: '6'},
            {img: '7'},
            {img: '8'},
            {img: '9'},
            {img: '10'},
            {img: '11'},
            {img: '12'},
            {img: '13'},
            {img: '14'},
            {img: '15'},
            {img: '16'},
            {img: '17'},
            {img: '18'},
            {img: '19'},
            {img: '20'},
            {img: '21'},
            {img: '22'},
            {img: '23'},
            {img: '24'},
        ]



        return (
            <React.Fragment>
                <div className="mockup-especifica">
                    {consultores.slice(0, 24).map((persona, id) => {
                        let bg = require(`../media/mockups/${persona.img}.png`)
                        return (
                            <div className="wrapper">
                                <div className="cols">
                                    <div className="col" onTouchStart="this.classList.toggle('hover');">
                                        <div className="container" >
                                            <div className="front2"
                                                 style={{ backgroundImage: `url(${bg}` }}>
                                                <div className="inner">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {this.state.showperson ?
                    (<div className={"white-container"}>
                            <div><button className={"button-close"} onClick={()=>this.setState({showperson:false})}> X</button></div>
                            <div className="container-master-single-person" id="person">
                                <div className="container-master-photo-single-person">
                                    <div className="container-photo-single-person">
                                        <img src={require(`../media/mockups${this.state.img}.png`)} alt={this.state.name} className="img-single-person" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <div />}
            </React.Fragment>
        )
    }
}
export default Mockups
