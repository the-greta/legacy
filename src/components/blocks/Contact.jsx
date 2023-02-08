import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import { handleFormSubmit } from "@/lib/form-submission-handler";

const Contact = () => {
  const handleSubmit = (e) => {
    handleFormSubmit(e);
  };
  return (
    <Container id="contact">
      <Grid>
        <Title sub="Contact">Lorem Ipsum is not simply random text.</Title>
        <div style={{ width: "50%", marginRight: "auto", marginTop: "3rem" }}>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s.
        </div>
      </Grid>
      {/* <form method="POST" action={spread}> */}
      <form onSubmit={handleSubmit}>
        <Grid>
          <Wrap>
            <h3> 1. Lorem Ipsum</h3>
            <Grid style={{ flex: 1, gap: "1rem", gridTemplateRows: "1fr 1fr" }}>
              <Tile>
                <Checkbox
                  type="checkbox"
                  name="category"
                  id="business"
                  value="사업소개"
                />
                <Label htmlFor="business">사업 소개</Label>
              </Tile>
              <Tile>
                <Checkbox
                  type="checkbox"
                  name="category"
                  id="coop"
                  value="협업문의"
                />
                <Label htmlFor="coop">협업 문의</Label>
              </Tile>
              <Tile>
                <Checkbox
                  type="checkbox"
                  name="category"
                  id="visit"
                  value="방문요청"
                />
                <Label htmlFor="visit">방문 요청</Label>
              </Tile>
              <Tile>
                <Checkbox
                  type="checkbox"
                  name="category"
                  id="etc"
                  value="기타"
                />
                <Label htmlFor="etc">기타</Label>
              </Tile>
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
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
                  placeholder="문의 내용을 작성해 주세요."
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ fontSize: "0.75rem" }}>
                  <input type="checkbox" required aria-required="true" />
                  <span style={{ marginLeft: "0.5rem", cursor: "pointer" }}>
                    <AppLink href="/" styleType="detail">
                      개인정보 수집 및 이용
                    </AppLink>
                    에 동의합니다.
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
const Tile = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* cursor: pointer;
  :hover {
    opacity: 0.7;
  } */
`;
const Checkbox = styled.input`
  -webkit-appearance: none;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: yellow;
  :hover {
    background-color: red;
  }
  :checked {
    background-color: blue;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;
// const Checkbox = styled.input`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   clip-path: polygon(0 0, 0 0, 0 0, 0 0);
//   border: 0;
// `;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  font-size: 1rem;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  font-family: inherit;
  font-size: 1rem;
`;
