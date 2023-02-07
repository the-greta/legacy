import Link from "next/link";
import React from "react";
import styled from "styled-components";

import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";

const spread =
  "https://script.google.com/macros/s/AKfycbxta0bx09oLq-c3FrSA8-3xrXJaT5_I0Mk-KLUZJrtjLYunUjGWtRTCgfsovzDqRYljMA/exec";

const Contact = () => {
  return (
    <Container id="contact">
      <Grid>
        <Title sub="Contact">Lorem Ipsum is not simply random text.</Title>
        <div style={{ width: "50%", marginRight: "auto", marginTop: "3rem" }}>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s.
        </div>
      </Grid>
      <form method="POST" action={spread} className="gform">
        <Grid>
          <Wrap>
            <h3> 1. Lorem Ipsum</h3>
            <Grid style={{ flex: 1, gap: "1rem", gridTemplateRows: "1fr 1fr" }}>
              <CheckboxWrap>
                <label>
                  <Checkbox type="checkbox" />
                  사업 소개
                </label>
              </CheckboxWrap>
              <CheckboxWrap>
                <div>a</div>
                <label>
                  <Checkbox type="checkbox" />
                  협업 문의
                </label>
              </CheckboxWrap>
              <CheckboxWrap>
                <label>
                  <Checkbox type="checkbox" />
                  방문 요청
                </label>
              </CheckboxWrap>
              <CheckboxWrap>
                <label>
                  <Checkbox type="checkbox" />
                  기타
                </label>
              </CheckboxWrap>
            </Grid>
          </Wrap>
          <Wrap>
            <h3> 2. Lorem Ipsum</h3>
            <Wrap style={{ gap: "1rem" }}>
              <div>
                <Input
                  type="text"
                  name="name"
                  required
                  aria-required="true"
                  placeholder="이름을 입력해 주세요."
                  autocomplete="name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  required
                  aria-required="true"
                  placeholder="이메일을 입력해 주세요."
                  autocomplete="email"
                />
              </div>
              <div>
                <Textarea
                  rows={10}
                  name="message"
                  required
                  aria-required="true"
                  placeholder="문의 내용을 작성해 주세요."
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ fontSize: "0.75rem" }}>
                  <input type="checkbox" required aria-required="true" />
                  <span>
                    <Link href="/">개인정보 수집 및 이용</Link>에 동의합니다.
                  </span>
                </label>
                <Button styleType="primary" type="submit">
                  submit
                </Button>
              </div>
            </Wrap>
          </Wrap>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckboxWrap = styled.div`
  background: lightgray;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  border: 0;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid lightgray;
  font-size: 1rem;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid lightgray;
  font-family: inherit;
  font-size: 1rem;
`;
