import React, {useState} from 'react';
import {Flex, Box, Heading, FormControl, FormLabel, Stack, Checkbox, Link, Button, Input, CircularProgress, Text, Img, Spacer} from '@chakra-ui/react';

import KUAAAWhiteLogo from '../../../image/kuaaa_logo_white.png';

export const LoginArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        py={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow="lg"
      >
        <LoginHeader/>
        <LoginForm/>
        <LoginFooter/>
      </Box>
    </Flex>

  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>
        <Flex>
          <Spacer/>
          <Img src={KUAAAWhiteLogo} width="25%" height="25%"></Img>
          <Spacer/>
        </Flex>
      </Heading>
    </Box>
  );
};

const LoginForm = () => {
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      return; // Hotfix to block the form submit
      setisLoading(true);

      const response = await fetch(
          'http://api.kuaaa.net/auth/login'
          , {
            method: 'POST',
            body: JSON.stringify({id, password}),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
          },
      );
      const data = await response.json();
      if (data.token) {
        setIsLoggedIn(true);
        setErrorMsg('');
        localStorage.setItem('token', data.token);
      } else {
        setErrorMsg(data.msg);
      }
    } catch (e) {
      setErrorMsg(`Something went wrong: ${e.toString()}`);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <Box my={4} textAlign='left'>
      {isLoggedIn ? (
          <Box textAlign="center">
            <Text my={4} >안녕하세요 <Text as="span" color="yellow.200">{id}</Text> 님.</Text>
            <Text fontSize="md">kuaaa.net은 아직 준비중이에요!</Text>
            <Button
              variant="outline"
              width="full"
              mt={4}
              onClick={() => setIsLoggedIn(false)}
            >
            로그아웃
            </Button>
          </Box>
      ) : (
      <form onSubmit={loginHandler}>
        <Text color="cyan" align="center">{errorMsg}</Text>
        <FormControl isRequired>
          <FormLabel>아이디</FormLabel>
          <Input type="id" placeholder="sirius" onChange={(event) => setid(event.currentTarget.value)}/>
        </FormControl>
        <FormControl mt={2} isRequired>
          <FormLabel>비밀번호</FormLabel>
          <Input type="password" placeholder="the brightest start in the sky" onChange={(event) => setPassword(event.currentTarget.value)}/>
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={6}>
          <Box>
            <Checkbox>다음에도 기억하기</Checkbox>
          </Box>
          <Box>
            <Link>아이디/비밀번호 찾기</Link>
          </Box>
        </Stack>

        <Button width="full" mt={4} type="submit" >
          {isLoading ? (
          <CircularProgress isIndeterminate size="24px" color="teal" />
          ) : (
          'kuaaa.net은 아직 준비중이에요!'
          )}
        </Button>
      </form>)}

    </Box>
  );
};

const LoginFooter = () => {
  return (
    <Box>
    </Box>
  );
};
