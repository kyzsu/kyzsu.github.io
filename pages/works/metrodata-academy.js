import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Metrodata Academy">
      <Container>
        <Title>
          Metrodata Academy <Badge>2020 - Now</Badge>
        </Title>
        <P>
          A digital learning web app with lots of training and study programs
          that will help learners to develop their knowledge and skills. The
          training and study program are provided by Metrodata and partnered IT
          companies.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://metrodataacademy.id/">
              https://metrodataacademy.id/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java Spring Boot, React, Tailwind</span>
          </ListItem>
        </List>

        <WorkImage src="/images/thumbMA.png" alt="MetrodataAcademy" />
      </Container>
    </Layout>
  )
}

export default Work
