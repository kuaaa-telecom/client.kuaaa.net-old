import React from 'react';
import {Flex, Box, Heading, FormControl, FormLabel, Stack, Checkbox, Link, Button, Input} from '@chakra-ui/react';

const LoginArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
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
  return (
    <Box my={4} textAlign='left'>
      <form>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="sirius@kuaaa.net" />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="brightest start in the sky" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={6}>
          <Box>
            <Checkbox>Remember me</Checkbox>
          </Box>
          <Box>
            <Link>Forget your account?</Link>
          </Box>
        </Stack>

        <Button width="full" mt={4}>Sign In</Button>
      </form>
    </Box>
  );
};

const LoginFooter = () => {
  return (
    <Box>
      Korea University. Amateur Astronomical Association
    </Box>
  );
};

export {LoginArea};
