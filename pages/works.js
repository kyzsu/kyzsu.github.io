import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbMA from '../public/images/thumbMA.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* works */}
        <Section>
          <GridItem
            href="https://metrodataacademy.id/"
            title="Metrodata Academy"
            thumbnail={thumbMA}
          >
            A studying web app owned by Metrodata.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
