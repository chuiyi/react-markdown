import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './Component/SideBar'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactMarkdown from 'react-markdown'

class App extends React.Component {
  constructor(props) {
    super(props);

    var listMarkdown = localStorage.getItem('list-md');
    if (!listMarkdown) {
      listMarkdown = [];
      this.saveListMarkdown(listMarkdown);
    } else {
      listMarkdown = JSON.parse(listMarkdown);
    }

    this.state = {
      editor: {
        id: '',
        subject: '',
        content: ''
      },
      articles: listMarkdown
    };
  }

  saveListMarkdown = (list) => {
    localStorage.setItem('list-md', JSON.stringify(list));
  }

  createMarkdown = () => {
    let tempState = this.state;
    tempState.editor.id = new Date().getTime();
    tempState.editor.subject = '';
    tempState.editor.content = '';
    tempState.articles.push({
      id: tempState.editor.id,
      subject: tempState.editor.subject,
      content: tempState.editor.content,
    })
    this.saveListMarkdown(tempState.articles);
    this.setState(tempState);
  }

  readMarkdown = (e) => {
    let id = Number(e.target.getAttribute('markdownId'));
    var tempState = this.state;
    tempState.articles.forEach((article) => {
      if (article.id === id) {
        tempState.editor.id = id;
        tempState.editor.subject = article.subject;
        tempState.editor.content = article.content;
      }
    })
    this.setState(tempState);
  }

  updateMarkdown = () => {
    let tempState = this.state;
    let editor = tempState.editor;
    tempState.articles.forEach((article) => {
      if (article.id === editor.id) {
        article.subject = editor.subject;
        article.content = editor.content;
      }
    })
    this.saveListMarkdown(tempState.articles);
    this.setState(tempState);
  }

  deleteMarkdown = (e) => {
    let id = Number(e.target.getAttribute('markdownId'));
    var tempState = this.state;
    var deleteArticleIndex = -1;
    for (var x = 0; x < tempState.articles.length; x++) {
      var article = tempState.articles[x];
      if (article.id === id) {
        deleteArticleIndex = x;
      }
    }
    if (deleteArticleIndex >= 0) {
      tempState.articles.splice(deleteArticleIndex, 1);
    }
    this.saveListMarkdown(tempState.articles);
    this.setState(tempState);
  }

  editorSubjectChanged = (e) => {
    var tempState = this.state;
    tempState.editor.subject = e.target.value;
    this.setState(tempState);
  }

  editorContentChanged = (e) => {
    var tempState = this.state;
    tempState.editor.content = e.target.value;
    this.setState(tempState);
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
              <SideBar
                data={this.state.articles}
                onCreateMarkdown={this.createMarkdown}
                onReadMarkdown={this.readMarkdown}
                onDeleteMarkdown={this.deleteMarkdown}></SideBar>
            </Col>
            <Col xs={5} className="area-editor-background">
              <Container className="area-editor">
                <div>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Subject"
                      aria-label="Subject"
                      aria-describedby="basic-addon2"
                      value={this.state.editor.subject}
                      onChange={this.editorSubjectChanged}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" onClick={this.updateMarkdown}>儲存</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <FormControl
                    className="area-editor-content"
                    as="textarea"
                    aria-label="With textarea"
                    value={this.state.editor.content}
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
