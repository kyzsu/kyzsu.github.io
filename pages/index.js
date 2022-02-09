import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        mb={6}
        mt={2}
        p={3}
        align="center"
      >
        Hello, I&apos;m a Frontend developer based in Jakarta, Indonesia! 👋
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Immanuel Williams Irsal
          </Heading>
          <p>Tech 🛠 ( Next / React / Tailwind )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            bordreWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sage.png"
            alt="profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          William is a frontend developer based in Jakarta. He is currently
          working on a project called Metrodata Academy.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
