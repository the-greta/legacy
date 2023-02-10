import Image from "next/image";
import React from "react";
import styled from "styled-components";

import EmailLink from "@/components/atoms/EmailLink";
import Title from "@/components/atoms/Title";

import Map from "../../../public/image/map.png";

const Access = () => {
  return (
    <Container>
      <Title sub="Access">찾아오시는 길</Title>
      <Grid>
        <div style={{ position: "relative" }}>
          <Image
            src={Map}
            size="100vw"
            auto
            style={{ height: "auto", width: "100%", marginBottom: "-30px" }}
            placeholder="blur"
          />
          <span
            style={{
              fontSize: "12px",
              background: "#fff",
              padding: "0.5em 1em",
            }}
          >
            출처: 브이월드
          </span>
        </div>
        <Wrap>
          <div>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: "700",
                marginBottom: "0.5em",
              }}
            >
              소재지 정보
            </div>
            <div>서울특별시 중구 무교로 28, 시그너스빌딩 604호</div>
          </div>
          <Placeholder>
            <ContactTitle>
              <h3>Contact</h3>
            </ContactTitle>
            <div style={{ width: "100%" }}>
              <ContactWrap>
                <Image src="/svg/phone_fill.svg" width={36} height={36} />
                +82-70-8648-1024
              </ContactWrap>
              <ContactWrap>
                <Image src="/svg/mail_fill.svg" width={36} height={36} />
                <EmailLink to="hsfubAuif.hsfub/dpn" />
              </ContactWrap>
            </div>
            <div />
          </Placeholder>
        </Wrap>
      </Grid>
    </Container>
  );
};

export default Access;

const Container = styled.div``;
const Grid = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoint.md`
    grid-template-columns: 2fr 1fr;
  `}
  gap: 1rem;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Placeholder = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  color: ${({ theme }) => theme.colors.black};
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;
const ContactTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary700};
  width: 80%;
  margin: 0 auto;
`;
const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 80%;
  margin: 0 auto;
  padding-top: 1rem;
`;
