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
          밤하늘의 별을 좋아하는 사람들이 모인 <Text as="b">고려대학교 유일의 천문동아리</Text>입니다.
        </Text>
        <Text my={5}>
          <Text as="b">KUAAA는 모두에게 열려 있습니다!</Text> 함께 관측회에서 쏟아지는 별들과 은하수를 구경하시는건 어떨까요?
          별에 대해 아는게 적더라도 걱정하지 마세요. 다양한 세미나를 통해 별과 밤하늘에 대해 알려드립니다.
        </Text>
        <Text my={5}>
          별 보는 것 외에도, 동아리 소유 카메라를 가지고 출사를 가기도 하고, 넓고 쾌적한 동아리방에서 보드게임도 하고 술도 마시며 사람들과 금방 친해질 수도 있습니다.
        </Text>
        <Text my={5}>
          이렇듯 다채로운 활동을 하는 저희 동아리는현재 코로나로 인해 일부 활동을 온라인으로 전환했지만, 여전히 다양한 사람들과 함께 즐거운 동아리 생활을 즐길 수 있습니다.
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
        매 달 달이 제일 어두운 주말, 서울을 떠나 1박 2일로 정기 관측회를 떠납니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
          정기 관측회에서는 동아리 장비로 예쁜 밤하늘을 사진으로 찍어 추억을 남길 수도 있고, 수많은 별들을 눈으로 직접 감상할 수도 있습니다.
          직접 찍은 사진으로 다른 사람들과 추억을 공유할 수도 있습니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
        일정이 맞지 않아 정기 관측회를 갈 수 없더라도 걱정 마세요! 날씨가 맑은 밤 당일치기로 학교를 떠나는 비정기 관측회에도 참가할 수 있답니다.
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
          관측 행사 외에도 천문학 지식을 넓힐 수 있는 학술 세미나가 준비되어 있어요.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
          동아리 장비 사용법, 유성우, 별자리와 같은 기초적인 주제부터 외계인, 우주탐사, 화성개척와 같은 재미있는 주제의 세미나가 한 학기에 다섯 번 이상 진행됩니다.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
          세미나를 들으면서 멀게만 느껴졌던 아마추어 천문학에 한 발짝 더 다가갈 수 있습니다.
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
            추억나누기
        </Text>
      </Box>
      <Box my={20}>
        <Text fontSize="md" fontWeight="medium" my={5}>
          매년 연말에 KUAAA에서는 정기 천체사진전을 진행해요.
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
        연말에 열리는 정기 천체사진전을 통해 동아리에서 찍었던 사진들과 쌓았던 추억들을 공유할 수 있답니다!
        </Text>
        <Text fontSize="md" fontWeight="medium" my={5}>
        동아리에서 배운 천체관측 실력을 사진전을 통해서 모두에게 자랑할 수 있어요.
        </Text>
      </Box>
    </Box>
  );
};

export const Etc = () => {
  return (
    <Box maxW="45%" mx="5%">
      <Box>
        <Text fontSize="7xl" fontWeight="bold">
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
          별에 관심이 없으신 분도 환영합니다!
        </Text>
        <Text fontSize="md" fontWeight="medium">
          KUAAA는 별만 보는 동아리가 아니니까요!
        </Text>
        <Text fontSize="md" fontWeight="medium" mt={5}>
        천문학 관련 행사 외에도 사진 찍는 소풍 분위기의 출사와,
        </Text>
        <Text fontSize="md" fontWeight="medium">
        각종 총회 및 세미나 뒤풀이 자리에서 친목을 다질 수도 있습니다!
        </Text>
        <Text fontSize="md" fontWeight="medium" mt={10}>
        그리고 학기가 끝나면 2박 3일의 엠티와 합숙 행사에서 방학을 즐겨 보아요.
        </Text>
      </Box>
    </Box>
  );
};
