import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReactMarkdown from 'react-markdown'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      editor: {
        subject: '',
        content: ''
      }
    }
  }
  editorSubjectChanged = (e) => {
    this.setState({
      editor: {
        subject: e.target.value
      }
    });
  }
  editorContentChanged = (e) => {
    this.setState({
      editor: {
        content: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">React Markdown Editor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <Container fluid>
          <Row>
            <Col xs={2} className="area-list-background">
              <Container className="area-list">
                Create a new markdown
            </Container></Col>
            <Col xs={5} className="area-editor-background">
              <Container className="area-editor">
                <div>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Subject"
                      aria-label="Subject"
                      aria-describedby="basic-addon2"
                      onChange={this.editorSubjectChanged}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary">儲存</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <FormControl
                    className="area-editor-content"
                    as="textarea"
                    aria-label="With textarea"
                    onChange={this.editorContentChanged}
                  />
                </div>
              </Container>
            </Col>
            <Col xs={5} className="area-markdown-background">
              <Container className="area-markdown-subject">
                <h3>{this.state.editor.subject}</h3>
                <hr></hr>
              </Container>
              <Container className="area-markdown">
                <ReactMarkdown source={this.state.editor.content} />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
