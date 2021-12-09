import NextLink from 'next/link'
import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import react from '../public/images/react.png'

const Links = () => (
	<Container>
		<Heading>
		 Useful Links
		</Heading>

	<SimpleGrid columns={[1, 1, 2]} gap={6}>
		<Section>
	 <GridItem title="Next.js" thumbnail={react} href="https://nextjs.org"/>
            Next is not necessary in order to build a website, but the resources available within the SDK contained here is very helpful for creating a website.
	</Section>
	</SimpleGrid>
	</Container>

)

export default Links
