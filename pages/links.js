import NextLink from 'next/link'
import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import react from '../public/images/react.png'
import actualreact from '../public/images/actualreact.png'
import pluralsight from '../public/images/pluralsight.png'
import websitebuilder from '../public/images/websitebuilder.png'
import chakra from '../public/images/chakra.png'

const Links = () => (
	<Container>
		<Heading>
		 Useful Links
		</Heading>
	<Section delay={0.1}>
	<SimpleGrid columns={[1, 1, 2]} gap={6}>
	 <GridItem title="Next.js" thumbnail={react} href="https://nextjs.org"/>
            Next is not necessary in order to build a website, but the resources available within the SDK contained here is very helpful for creating a website.
	 <GridItem title="React" thumbnail={actualreact} href="https://reactjs.org"/>
	React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
	</SimpleGrid>
	</Section>

	<Section delay={0.2}>
	<SimpleGrid columns={[1, 1, 2]} gap={8}>
	 <GridItem title="Chakra UI" thumbnail={chakra} href="https://chakra-ui.com"/>
<Box>
            Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications. I personally used the library in order to find some suitable icons for some of the buttons, such as the light/dark mode and the source code.
</Box>
	<GridItem title="Website Builder" thumbnail={websitebuilder} href="https://www.websitebuilderexpert.com/building-websites/"/>
		This website helps users get a view at alternate methods of creating a website if you just simply don't have the time to code it yourself. 
	</SimpleGrid>
	</Section>
	<Section delay={0.3}>	
	<SimpleGrid columns={[1, 1, 2]} gap={6}>

	 <GridItem title="Plural Sight" thumbnail={pluralsight} href="https://www.pluralsight.com/courses/quick-start-javascript-1-1870?aid=7010a000002BZNLAA4
"/>
	Plural Sight is a website dedicated to tutorials involving the language Javascript. This is a great way to start learning the language if you do not have much prior experience coding in the language or coding in general.
	</SimpleGrid>
	</Section>
	</Container>

)

export default Links
