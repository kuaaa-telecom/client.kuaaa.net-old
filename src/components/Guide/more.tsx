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
