import React from 'react';
import styled from 'styled-components';

import Subtitle from '@/components/atoms/Subtitle';
import Title from '@/components/atoms/Title';

const Profile = () => {
  return (
    <Container>
        <Wrap>
          <Title size="h2">Profile</Title>
          <Subtitle fontSize="14">회사 정보</Subtitle>
        </Wrap>
        <Context>
          <table>
            <tbody>
              <tr>
                <th>회사명</th>
                <td>주식회사 그레타</td>
              </tr>
              <tr>
                <th>소재지</th>
                <td>서울특별시 중구 무교로 28, 시그너스빌딩 604호</td>
              </tr>
              <tr>
                <th>설립일</th>
                <td>2021년 11월 3일</td>
              </tr>
              <tr>
                <th>사업자 등록번호</th>
                <td>124-87-59303</td>
              </tr>
            </tbody>
          </table>
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
