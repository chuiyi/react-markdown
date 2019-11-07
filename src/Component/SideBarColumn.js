import React from 'react'
// import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class SideBarColumn extends React.Component {
    constructor(props) {
        super(props);
        this.loadMarkdown = props.onReadMarkdown.bind(this);
        this.deleteMarkdown = props.onDeleteMarkdown.bind(this);
    }

    render() {
        return (
            <ListGroup.Item>
                <div style={{ textAlign: 'left' }}>
                    {this.props.subject}
                </div>
                <p></p>
                <div style={{ textAlign: 'right' }}>
                    <Button size="sm" markdownId={this.props.id} onClick={this.loadMarkdown}>讀取</Button>
                    <Button size="sm" markdownId={this.props.id} onClick={this.deleteMarkdown} variant="danger">刪除</Button>
                </div>
            </ListGroup.Item>
        )
    }
}

export default SideBarColumn;