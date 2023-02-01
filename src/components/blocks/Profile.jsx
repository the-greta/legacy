import React from 'react';
import styled from 'styled-components';

import SectionTitle from '@/components/atoms/SectionTitle';
import Subtitle from '@/components/atoms/Subtitle';

const Profile = () => {
  return (
    <Container>
        <Wrap>
          <SectionTitle size="h2">Profile</SectionTitle>
          <Subtitle fontSize="14">회사 정보</Subtitle>
        </Wrap>
        <Context>
          <Table style={{overflow: "scroll"}}>
            <tbody>
              <tr>
                <Th>회사명</Th>
                <Td>주식회사 그레타</Td>
              </tr>
              <tr>
                <Th>소재지</Th>
                <Td>서울특별시 중구 무교로 28, 시그너스빌딩 604호</Td>
              </tr>
              <tr>
                <Th>설립일</Th>
                <Td>2021년 11월 3일</Td>
              </tr>
              <tr>
                <Th>사업자 등록번호</Th>
                <Td>124-87-59303</Td>
              </tr>
            </tbody>
          </Table>
        </Context>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  margin: 0 auto;
  ${({theme}) => theme.breakpoint.md`
    margin: 0;
    display: flex;
    justify-content: space-between;
  `}
`
const Wrap = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  padding: 0 2rem 0 0;
  ${({theme}) => theme.breakpoint.md`
    margin-bottom: 0;
  `}
`
const Context = styled.div`
  flex: 2;
  max-width: 38rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 38rem;
  ${({theme}) => theme.breakpoint.sm`
    display: flex;
    gap: 3rem;
  `}
`
const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`
const Th = styled.th`
  padding: 1.5em 0;
  border-bottom: 1px solid #999;
  font-weight: 700;
  width: 25%;
`
const Td = styled.td`
  padding: 1.5em 0;
  border-bottom: 1px solid #999;
  width: 65%;
`