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
        <Table>
          <tbody style={{display: "block"}}>
            <Tr>
              <Th>문의 종류</Th>
              <Td>
                <Wrap>
                  <CatLabel><input type="checkbox" name="category"/>사업 소개</CatLabel>
                  <CatLabel><input type="checkbox" name="category"/>협업 문의</CatLabel>
                  <CatLabel><input type="checkbox" name="category"/>방문 요청</CatLabel>
                  <CatLabel><input type="checkbox" name="category"/>기타</CatLabel>
                </Wrap>
              </Td>
            </Tr>
            <Tr>
              <Th>이름</Th>
              <Td><div><Input type="text" placeholder="이름을 입력해 주세요."/></div></Td>
            </Tr>
            <Tr>
              <Th>이메일</Th>
              <Td><Input type="email" placeholder="이메일을 입력해 주세요."/></Td>
            </Tr>
            <Tr>
              <Th style={{verticalAlign: "top"}}>문의 내용</Th>
              <Td><Textarea rows="10"  placeholder="문의 내용을 작성해 주세요."/></Td>
            </Tr>
          </tbody>
        </Table>
        <button type='submit'>submit</button>
      </Form>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.lightgray};
`
const Form = styled.form`
  padding: 2rem 6rem;
  text-align: left;
  font-weight: 700;
`
const Table = styled.table`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  border-spacing: 0;
  border-collapse: collapse;
`
const Tr = styled.tr`
  display: block;
  margin-top: 36px;
  ${({theme}) => theme.breakpoint.md`
    vertical-align: middle;
    display: flex;
  `}
`
const Th = styled.th`
  font-size: 14px;
  margin: 10px 0 12px;
  display: block;
  width: 100%;
  ${({theme}) => theme.breakpoint.md`
    width: 25%;
  `}
  :before {
    content: "▪\\00a0\\00a0\\00a0\\00a0";
    position: relative;
    display: inline-block;
    color: ${({theme}) => theme.colors.primary};
  }
`
const Td = styled.td`
  display: block;
  width: 100%;
  ${({theme}) => theme.breakpoint.md`
    width: 60%;
  `}
`
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CatLabel = styled.label`
  position: relative;
  font-size: 12px;
  width: 50%;
  padding-bottom: 0.5rem;
  cursor: pointer;
`
const Input = styled.input`
  font-size: 14px;
  font-weight: inherit;
  font-family: inherit;
  letter-spacing: 0.05em;
  color: #333;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
`
const Textarea = styled.textarea`
  font-size: 14px;
  font-weight: inherit;
  font-family: inherit;
  color: #333;
  line-height: 1.8;
  letter-spacing: 0.05em;
  width: 100%;
  padding: 10px;
  border: none;
  overflow: auto;
`
