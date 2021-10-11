import React from 'react';
import {Box, Text, Flex, Spacer, Icon, Link, Img} from '@chakra-ui/react';
import {ArrowDownIcon} from '@chakra-ui/icons';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import {NaverMap, RenderAfterNavermapsLoaded, Marker} from 'react-naver-maps';

import KakaoTalkIcon from '../../image/contact_kakao.png';

export const More = () => {
  return (
    <Box id="more">
      <Text as="span" fontSize="2xl">KUAAA</Text> <ArrowDownIcon w={20} h={20}/> <Text as="span" fontSize="2xl">둘러보기</Text>
    </Box>
  );
};

export const Header = () => {
  return (
    <div id="header"> 고려대학교 아마추어 천문회 | Korea University Amateur Astronomical Association </div>
  );
};

const opacity = 0.8;
export const About = () => {
  return (
    <Box maxW="25%" mx="20%">
      <Box>
        <Text fontSize="7xl" fontWeight="bold" whiteSpace="nowrap">
          KUAAA
        </Text>
      </Box>
      <Box my={-5}>
        <Text fontSize="2xl" fontWeight="semibold" opacity={opacity} whiteSpace="nowrap">
          고려대학교 아마추어 천문회
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium">
          <Text as="b">KUAAA</Text>는 <Text as="b">K</Text>orea <Text as="b">U</Text>niversity <Text as="b">A</Text>mateur <Text as="b">A</Text>stronomical <Text as="b">A</Text>ssociation의 약자로,
          별을 좋아하는 사람들이 모인 <Text as="b">고려대학교 유일의 천문동아리</Text>입니다.
        </Text>
      </Box>
    </Box>
  );
};

export const Observation = () => {
  return (
    <Box maxW="25%" mx="20%">
      <Box ml={-1}>
        <Text fontSize="7xl" fontWeight="bold" whiteSpace="nowrap">
          관측회
        </Text>
      </Box>
      <Box my={-1}>
        <Text fontSize="2xl" fontWeight="semibold" opacity={opacity} whiteSpace="nowrap">
          밤하늘, 별, 은하수
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium">
        매달 달이 제일 어두운 주말, 서울을 벗어나 1박 2일로 <Text as="b">정기 관측회</Text>를 떠납니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" mt={5}>
          <Text as="b">정기 관측회</Text>에서는 예쁜 밤하늘을 사진으로 찍어 추억을 남길 수도 있고, 수많은 별들을 눈으로 직접 감상할 수도 있습니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" mt={5}>
        일정이 맞지 않아 정기 관측회를 갈 수 없더라도, 날씨가 맑은 밤 학교를 떠나는 <Text as="b">비정기 관측회</Text>에 참여할 수 있습니다.
        </Text>
      </Box>
    </Box>
  );
};

export const Seminar = () => {
  return (
    <Box maxW="25%" mx="20%">
      <Box ml={-1}>
        <Text fontSize="7xl" fontWeight="bold" whiteSpace="nowrap">
            세미나
        </Text>
      </Box>
      <Box my={-1}>
        <Text fontSize="2xl" fontWeight="semibold" opacity={opacity} whiteSpace="nowrap">
            천문학과 친해지기
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium" my={5}>
          관측 행사 외에도 천문학 지식을 넓힐 수 있는 <Text as="b">학술 세미나</Text>가 준비되어 있습니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
        별자리, 관측 장비와 같은 기초적인 이론부터, 외계인, 우주탐사, 화성 개척과 같은 다양한 주제의 세미나가 한 학기에 다섯 번 이상 진행됩니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
        세미나를 들으면서 어렵게만 느껴지는 천문학에 한발짝 더 다가갈 수 있습니다.
        </Text>
      </Box>
    </Box>
  );
};

export const Exhibition = () => {
  return (
    <Box maxW="25%" mx="20%">
      <Box ml={-1.5}>
        <Text fontSize="7xl" fontWeight="bold" whiteSpace="nowrap">
        천체사진전
        </Text>
      </Box>
      <Box my={-1}>
        <Text fontSize="2xl" fontWeight="semibold" opacity={opacity} whiteSpace="nowrap">
        추억 나누기
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium" mt={5}>
        매년 연말, KUAAA에서는 정기 천체사진전을 진행합니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" mt={5}>
        정기 천체사진전을 통해 동아리에서 찍었던 사진을 전시하고, 동아리의 한 해를 정리합니다.
        </Text>
      </Box>
    </Box>
  );
};

export const Etc = () => {
  return (
    <Box maxW="25%" mx="20%">
      <Box ml={-1}>
        <Text fontSize="6xl" fontWeight="bold" whiteSpace="nowrap">
            출사, MT, 합숙
        </Text>
      </Box>
      <Box my={-1}>
        <Text fontSize="2xl" fontWeight="semibold" opacity={opacity} whiteSpace="nowrap">
            기타 행사들
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium">
        천문 관련 행사 외에 동아리원들과 함께 사진을 찍으러 떠나는 <Text as="b">출사</Text>와,
        </Text>
        <Text fontSize="md" fontWeight="medium" mt={5}>
          <Text as="b">총회</Text> 및 <Text as="b">세미나 뒤풀이</Text> 자리에서 친목을 다질 수 있습니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" mt={5}>
        매 학기가 끝나면 방학 중의 2박 3일의 <Text as="b">MT</Text>와 <Text as="b">합숙</Text> 행사를 즐길 수도 있습니다.
        </Text>
      </Box>
    </Box>
  );
};


export const Contact = () => {
  return (
    <Box>
      <Flex>
        <Box width="50%" my="-10%" justifyContent="center" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">찾아오는 길</Text>
          <Text mt={3} mb={5} fontWeight="semibold">고려대학교 자연계캠퍼스 애기능학생회관 403호</Text>
          <RenderAfterNavermapsLoaded
            ncpClientId={'pbfok70sy9'}>
            <NaverMap
              mapDivId={'naver-maps-kuaaa'}
              style={{
                width: '80%',
                height: '100%',
              }}
              defaultCenter={{lat: 37.582451, lng: 127.027568}}
              defaultZoom={16}
            >
              <Marker
                key={1}
                position={{lat: 37.582451, lng: 127.027568}}
                animation={2}
              />
            </NaverMap>
          </RenderAfterNavermapsLoaded>
        </Box>
        <Spacer/>
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">문의</Text>
          <Flex my={3}>
            <Spacer/>
            <Link href="https://www.facebook.com/KUAAA1982" isExternal>
              <Icon as={AiFillFacebook} width={10} height={10} color="blue.400" />
            </Link>
            <Spacer/>
            <Link href="https://www.instagram.com/koreauniv_aaa/?hl=ko" isExternal>
              <Icon as={AiFillInstagram} width={10} height={10} color="red.200"/>
            </Link>
            <Spacer/>
            <Link href="https://pf.kakao.com/_xginIM" isExternal>
              <Img src={KakaoTalkIcon} width={10} height={10} color="yellow.200"/>
            </Link>
            <Spacer/>
          </Flex>
          <Box height="50%"/>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">가입하는 법</Text>
            <Text fontSize="lg" mt={2}>동아리방에서 가입원서 직접 작성</Text>
            <Text textAlign="center">or</Text>
            <Text fontSize="lg" textAlign="center">온라인 구글폼 가입원서 기입</Text>
            <Box height={10} />
          </Box>
        </Box>
        <Spacer/>
      </Flex>
    </Box>
  );
};

