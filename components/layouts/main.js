import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
// import NoSsr from '../no-ssr'
// import VoxelKnight from '../voxel-knight'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Immanuel Williams Irsal - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <NoSsr>
          <VoxelKnight />
        </NoSsr> */}
        {children}
      </Container>
    </Box>
  )
}

export default Main
