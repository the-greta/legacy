import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const sendMail = event => {
    event.preventDefault()
    console.log("send mail")
  }
  return (
    <Container>
      <Form onSubmit={sendMail}>
        {/* <div>
          <label>문의 종류</label>

          <input
            type="checkbox"
          />
          <label>사업 소개</label>
          <input
            type="checkbox"
          />
          <label>협업 문의</label>
          <input
            type="checkbox"
          />
          <label>방문 요청</label>
          <input
            type="checkbox"
          />
          <label>기타</label>
        </div> */}
        <Row>
          <Col flex="1">
            <Label>이름</Label>
          </Col>
          <Col flex="2">
            <Input/>
          </Col>
        </Row>

        <Row>
          <Col flex="1">
            <Label>답장 받으실 이메일</Label>
          </Col>
          <Col flex="2">
            <Input type="email"/>
          </Col>
        </Row>

        <Row>
          <Col flex="1">
            <Label>문의 내용</Label>
          </Col>
          <Col flex="2">
            <Textarea rows="10" cols="80"/>
          </Col>
        </Row>

        <button type='submit'>submit</button>
      </Form>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
`
const Form = styled.form`
  background-color: ${({theme}) => theme.colors.lightgray};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
`
const Row = styled.div`
  display: flex;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
`
const Label = styled.label`
  font-weight: 700;
`
const Input = styled.input`
  font: inherit;
  font-size: 14px;
  line-height: 1.5;
  padding: 0 10px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
`
const Textarea = styled.textarea`
  font: inherit;
  font-size: 14px;
  line-height: 1.8;
  padding: 10px;
  min-height: 48px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
`
