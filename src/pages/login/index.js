import React from "react";
import {
  Box,
  Text,
  Flex,
  ColorModeScript,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react';
import Layout from "../../components/layout";
import './login.module.css'


// 3. extend the theme

const Login = () => {
  return (
    <>
      <Layout>
      <ColorModeScript />
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.700', 'grey.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={4}
              w={'50vh'}
              >
                <Text fontSize='xl' fontWeight={'600'} color={'gray.800'} align={'center'}>You have to login first!</Text>
                <Stack spacing={5} mt={4}>
                  <Button
                    bg={'#7289DA'}
                    color={'white'}
                    _hover={{
                      bg: '#7289CC',
                    }}>
                    Sign in
                  </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Layout>
    </>
  );
};

export default Login;
