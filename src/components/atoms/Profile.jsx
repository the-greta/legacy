import React from "react";
import styled from "styled-components";

import Title from "@/components/atoms/Title";

const Profile = (props) => {
  return (
    <Container>
      <Title sub={props.profileInfo.subtitle} desc={props.profileInfo.desc}>
        {props.profileInfo.title}
      </Title>
      <Table style={{ overflow: "scroll" }}>
        <tbody>
          <tr>
            <Th>회사명</Th>
            <Td>주식회사 그레타</Td>
          </tr>
          <tr>
            <Th>공동대표</Th>
            <Td>김현태, 임종호</Td>
          </tr>
          <tr>
            <Th>설립일</Th>
            <Td>2021년 11월 3일</Td>
          </tr>
          <tr>
            <Th>소재지</Th>
            <Td>(04521) 서울특별시 중구 무교로 28, 시그너스빌딩 604호</Td>
          </tr>
          <tr>
            <Th>사업자 등록번호</Th>
            <Td>124-87-59303</Td>
          </tr>
          <tr>
            <Th>TEL</Th>
            <Td>+82-70-8648-1024</Td>
          </tr>
          <tr>
            <Th>E-mail</Th>
            <Td>greta@the-greta.com</Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
`;
const Table = styled.table`
  margin-top: 2.5rem;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;
const Th = styled.th`
  padding: 1.5em 0;
  border-bottom: 1px solid #999;
  font-weight: 700;
  width: 30%;
  vertical-align: top;
`;
const Td = styled.td`
  padding: 1.5em 0;
  border-bottom: 1px solid #999;
  width: 75%;
`;
