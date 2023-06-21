import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

function App() {
  const [text, setText] = useState({wordCount:0});

  const handleTextChange = (e) => {
    const count = e.target.value;
    
    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi,"");
        count = count.replace(/[ ]{2,}/gi," ");
        count = count.replace(/\n /,"\n");
        return count.split(' ').length; 
      }
    }
    
    setText({
      wordCount: countWords(count),
    });
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="shadow p-4">
        <h1 className='pb-3'>Responsive Paragraph Word Counter</h1>
        <Form>
          <Form.Group controlId="formTextArea">
            <Form.Control 
              as="textarea"
              rows={5}
              onChange={handleTextChange}
            />
          </Form.Group>
        </Form>
        <p className='mt-4'>Word count: {text.wordCount}</p>
      </div>
    </Container>
  );
}

export default App;
