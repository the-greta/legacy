import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <>
      <Form>
        <div>
          <Label>문의종류</Label>
          <CheckboxWrap>
            <label>
              <input type="checkbox" />
              사업 소개
            </label>
            <label>
              <input type="checkbox" />
              협업 문의
            </label>
            <label>
              <input type="checkbox" />
              방문 요청
            </label>
            <label>
              <input type="checkbox" />
              기타
            </label>
          </CheckboxWrap>
        </div>
        <div>
          <Label>이름</Label>
          <Input type="text" placeholder="이름을 입력해 주세요." />
        </div>
        <div>
          <Label>이메일</Label>
          <Input type="email" placeholder="이메일을 입력해 주세요." />
        </div>
        <div>
          <Label>문의내용</Label>
          <Textarea rows="10" placeholder="문의 내용을 작성해 주세요." />
        </div>
        <button type="submit">submit</button>
      </Form>
    </>
  );
};

export default ContactForm;

const Form = styled.form`
  padding: 2rem 0;
`;
const Label = styled.label`
  display: block;
  font-weight: 700;
  margin: 0.75rem 0 0.5rem;
`;
const CheckboxWrap = styled.div`
  display: flex;
  gap: 1rem;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 0.75rem;
  background: lightgray;
  opacity: 0.5;
`;
const Textarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 0.75rem;
  background: lightgray;
  opacity: 0.5;
`;
