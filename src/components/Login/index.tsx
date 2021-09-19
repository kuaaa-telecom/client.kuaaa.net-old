import React, {useState} from 'react';
import {Flex, Box, Heading, FormControl, FormLabel, Stack, Checkbox, Link, Button, Input, CircularProgress, Text} from '@chakra-ui/react';


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
      <Heading>Log into KUAAA</Heading>
    </Box>
  );
};

const LoginForm = () => {
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setisLoading(true);

    const response = await fetch(
        'http://localhost:31413/auth/login'
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
      setError('');
      localStorage.setItem('token', data.token);
    } else {
      setError(data.msg);
    }
    setisLoading(false);
  };
  return (
    <Box my={4} textAlign='left'>
      {isLoggedIn ? (
          <Box textAlign="center">
            <Text my={4} >Hello <Text as="span" color="yellow.200">{id}</Text></Text>
            <Text fontSize="md">kuaaa.net is coming soon @ December 2021</Text>
            <Button
              variant="outline"
              width="full"
              mt={4}
              onClick={() => setIsLoggedIn(false)}
            >
            Sign out
            </Button>
          </Box>
      ) : (
      <form onSubmit={loginHandler}>
        <Text color="cyan" align="center">{error}</Text>
        <FormControl isRequired>
          <FormLabel>ID</FormLabel>
          <Input type="id" placeholder="sirius" onChange={(event) => setid(event.currentTarget.value)}/>
        </FormControl>
        <FormControl mt={2} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="brightest start in the sky" onChange={(event) => setPassword(event.currentTarget.value)}/>
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={6}>
          <Box>
            <Checkbox>Remember me</Checkbox>
          </Box>
          <Box>
            <Link>Forget your account?</Link>
          </Box>
        </Stack>

        <Button width="full" mt={4} type="submit" >
          {isLoading ? (
          <CircularProgress isIndeterminate size="24px" color="teal" />
          ) : (
          'Sign In'
          )}
        </Button>
      </form>)}

    </Box>
  );
};

const LoginFooter = () => {
  return (
    <Box>
      <Text color="#dc143c" as="b" opacity={0.8}>고려대학교 아마추어 천문회<br/></Text>
      <Text color="#dc143c" as="b" opacity={0.8}>Korea University Amateur Astronomical Association</Text>
    </Box>
  );
};
