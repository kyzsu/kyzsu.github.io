import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoInstagram, IoLogoGithub, IoLogoYoutube } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
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
            <p>Learning 🏫 ( Svelte / Rust / WASM )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/oxeyedaisy.jpg"
              alt="profile image"
            />
          </Box>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hi, I&apos;m Will! I&apos;m 22 and working at MII Metrodata as a
            frontend developer. My main task is to develop{' '}
            <strong>Metrodata Academy</strong> which is quite similar to
            Coursera or Udemy.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Brisbane, Australia.
          </BioSection>
          <BioSection>
            <BioYear>2006</BioYear>
            Moved to Palmerston North, New Zealand.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated from High School.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed undergraduate program in Informatics at Universitas
            Kristen Satya Wacana.
          </BioSection>
          <BioSection>
            <BioYear>2021 - present</BioYear>
            Working as an Application Developer @ MII Metrodata.
          </BioSection>
        </Section>
        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            Anime, Cooking, Music, Sports and ofc coding \^o^/
          </Paragraph>
        </Section>

        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/kyzsu" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @kyzsu
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/willy.co.nz/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  willy.co.nz
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/channel/UC5Y6c5_z086YV6ssM1b8VOQ"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  William Irsal
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
