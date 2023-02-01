import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import BusinessCard from '@/components/atoms/BusinessCard.jsx';

import dataConsulting from '../../public/image/business_consulting.jpg';
import dataPlatform from '../../public/image/business_platform.jpg';
import Synthetic from '../../public/image/business_Synthetic.jpg';

const index = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <VideoWrap>
        <Slogan>
          그레타의 멋진 슬로건을 정해주세요.
        </Slogan>
        {/* <ScrollArrow>SCROLL<br/>🢓</ScrollArrow> */}
        <Video autoPlay loop muted>
          <source src="/video/Line.mp4" type="video/mp4" />
        </Video>
      </VideoWrap>

      <Container>
        <Wrap>
          <h2>주요 사업 분야</h2>
          <Business>
            <BusinessCard title="합성/재현 데이터 알고리즘" src={Synthetic}>

            </BusinessCard>
            <BusinessCard title="데이터 분석 컨설팅" src={dataConsulting}>

            </BusinessCard>
            <BusinessCard title="데이터 플랫폼 구축" src={dataPlatform}>

            </BusinessCard>
          </Business>
        </Wrap>

        <Wrap>
          <h3 style={{marginBottom: "3rem"}}>
            높은 전문 지식과 기술력을 바탕으로<br/>
            High-End 데이터 솔루션을 제공합니다.
          </h3>
          <Partner>
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={20}
            />
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={20}
            />
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={20}
            />
          </Partner>
        </Wrap>
      </Container>
    </motion.div>
  );
};

export default index;

const Container = styled.div`
  padding: 3rem 0 12rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: #fff;
`
const VideoWrap = styled.header`
  position: relative;
  margin: -100px calc(50% - 50vw) 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Slogan = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  color: #fff;
  text-shadow: 0 0 15px #666;
  font-size: 4rem;
  text-align: center;
`
// const ScrollArrow = styled.div`
//   position: absolute;
//   top: 90%;
//   left: 50%;
//   transform: translateY(-10%) translateX(-50%);
//   color: #fff;
//   text-shadow: 0 0 15px #666;
//   font-size: 1.5rem;
//   font-weight: 700;
//   letter-spacing: 0.2em;
//   text-transform: uppercase;
//   text-align: center;
// `
const Video = styled.video`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 177.77777778vh;
  height: 56.25vw;
  min-height: 100%;
  min-width: 100%;
  filter: brightness(0.7);
`
const Wrap = styled.div`
  text-align: center;
`
const Business = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
const Partner = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`
