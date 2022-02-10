import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbNTT from '../public/images/thumbNTT.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Nusa Tenggara Timur - IELP 2021"
            thumbnail={thumbNTT}
            href="https://youtu.be/Axh0wHTA_MI"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
