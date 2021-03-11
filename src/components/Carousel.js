import React from 'react';

import Card from '../components/Card';

import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import blogs from '../assets/images/blogs.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [
            {
              id: 0,
              title: "LinkedIn",
              subTitle: "My LinkedIn Profile",
              imgSrc: linkedin,
              link: "https://www.linkedin.com/in/akash-pandya-68b622165/",
              selected: false,
            },
            {
              id: 1,
              title: "Akash Pandya",
              subTitle: "Instagram page",
              imgSrc: instagram,
              link: "https://www.instagram.com/uxuiism/",
              selected: false,
            },
            {
              id: 2,
              title: "Blogs",
              subTitle: "A page for my creative stuff",
              imgSrc: blogs,
              link: "https://akasky18.wordpress.com",
              selected: false,
            },
          ],
        };
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;