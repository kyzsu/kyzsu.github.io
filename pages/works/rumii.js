import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="RUMII">
      <Container>
        <Title>
          RUMII <Badge>2021</Badge>
        </Title>
        <p>
          One stop meeting room booking app for Metrodata&apos;s guest and
          employees.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Mobile App</Meta>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java Spring Boot, React Native, Material UI</span>
          </ListItem>
        </List>

        <WorkImage src="/images/thumbRUMII2.png" alt="RUMII" />
      </Container>
    </Layout>
  )
}

export default Work
