import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import SideBarColumn from './SideBarColumn'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkdown = props.onCreateMarkdown.bind(this);
        this.readMarkdown = props.onReadMarkdown.bind(this);
        this.deleteMarkdown = props.onDeleteMarkdown.bind(this);
    }

    render() {
        let columns = [];
        columns.push(<Button onClick={this.createMarkdown}>Create a new markdown</Button>);
        var listData = this.props.data;
        if (listData && listData.length > 0) {
            listData.forEach(element => {
                columns.push(<SideBarColumn 
                    id={element.id}
                    subject={element.subject}
                    onReadMarkdown={this.readMarkdown}
                    onDeleteMarkdown={this.deleteMarkdown}
                    ></SideBarColumn>)
            });
        }
        let content = <ListGroup>{columns}</ListGroup>
        return (
            <Container className="area-list">
                {content}
            </Container>
        )
    }
}

export default SideBar;