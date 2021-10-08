import React from 'react';
import {Box, Text} from '@chakra-ui/react';
import {ArrowDownIcon} from '@chakra-ui/icons';

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

export const About = () => {
  return (
    <Box maxW="45%" mx="5%">
      <Box>
        <Text fontSize="7xl" fontWeight="bold">
          KUAAA
        </Text>
      </Box>
      <Box my={-7}>
        <Text fontSize="2xl" fontWeight="semibold">
          고려대학교 아마추어 천문회
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium" my={5}>
          <Text as="b">KUAAA</Text>는 <Text as="b">K</Text>orea <Text as="b">U</Text>niversity <Text as="b">A</Text>mateur <Text as="b">A</Text>stronomical <Text as="b">A</Text>ssociation의 약자로,
          별을 좋아하는 사람들이 모인 <Text as="b">고려대학교 유일의 천문동아리</Text>입니다.
        </Text>
      </Box>
    </Box>
  );
};

export const Observation = () => {
  return (
    <Box maxW="45%" mx="5%">
      <Box>
        <Text fontSize="7xl" fontWeight="bold">
          관측회
        </Text>
      </Box>
      <Box my={-5}>
        <Text fontSize="2xl" fontWeight="semibold">
          밤하늘, 별, 은하수
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium" my={5}>
        매달 달이 제일 어두운 주말, 서울을 벗어나 1박 2일로 <Text as="b">정기 관측회</Text>를 떠납니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
          <Text as="b">정기 관측회</Text>에서는 예쁜 밤하늘을 사진으로 찍어 추억을 남길 수도 있고, 수많은 별들을 눈으로 직접 감상할 수도 있습니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
        일정이 맞지 않아 정기 관측회를 갈 수 없더라도, 날씨가 맑은 밤 학교를 떠나는 <Text as="b">비정기 관측회</Text>에 참여할 수 있습니다.
        </Text>
      </Box>
    </Box>
  );
};

export const Seminar = () => {
  return (
    <Box maxW="45%" mx="5%">
      <Box>
        <Text fontSize="7xl" fontWeight="bold">
            세미나
        </Text>
      </Box>
      <Box my={-5}>
        <Text fontSize="2xl" fontWeight="semibold">
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
    <Box maxW="45%" mx="5%">
      <Box>
        <Text fontSize="7xl" fontWeight="bold">
        천체사진전
        </Text>
      </Box>
      <Box my={-5}>
        <Text fontSize="2xl" fontWeight="semibold">
        추억 나누기
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium" my={5}>
        매년 연말, KUAAA에서는 정기 천체사진전을 진행합니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
        정기 천체사진전을 통해 동아리에서 찍었던 사진을 전시하고, 동아리의 한 해를 정리합니다.
        </Text>
      </Box>
    </Box>
  );
};

export const Etc = () => {
  return (
    <Box maxW="45%" mx="5%">
      <Box>
        <Text fontSize="6xl" fontWeight="bold">
            출사, MT, 합숙
        </Text>
      </Box>
      <Box my={-5}>
        <Text fontSize="2xl" fontWeight="semibold">
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
