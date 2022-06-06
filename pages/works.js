import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbMA from '../public/images/thumbMA.png'
import thumbRUMII from '../public/images/thumbRUMII.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* works */}
          <Section>
            <WorkGridItem
              // href="https://metrodataacademy.id/"
              title="Metrodata Academy"
              thumbnail={thumbMA}
              id="metrodata-academy"
            >
              A studying web app owned by Metrodata.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem title="RUMII" thumbnail={thumbRUMII} id="rumii">
              Meeting Room Booking App developed by RUMII Team.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
