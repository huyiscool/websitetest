import NextLink from 'next/link'
import { Container,
	 Box,
	 Heading,
	 Image,
	 Divider,
	 useColorModeValue	
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
	return (
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('beige','brown')} p={3} mb={6}  align="center">
			Welcome to how to build a website! 
			</Box>
			
			<Box display={{md:'flex'}}>
			 <Box flexGrow={1}>
				<Heading as="h2" variant="page-title">
					How to Build a Website
				</Heading>
			<p>Huy Truong (Developer)</p>
			 </Box>
			<Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/huy.jpg"
            alt="Profile image"
          />
        </Box>			

			</Box>
	<Section delay={0.1}>
         <Heading as="h3" variant="section-title">
          About me
         </Heading>
         <Paragraph>
          Hi! My name is Huy Truong, currently a junior at UCSD, and working towards a Computer Science degree! The reason I chose to make this site was to build my own knowledge of front-end programming and hopefully provide some useful resources for others to start too!

        </Paragraph>		
	</Section>
	<Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About the site
        </Heading>
        <Paragraph>
	 This website’s purpose is to help inform people on how and why you would create a website.
	</Paragraph>
	</Section>
	<Section delay={0.3}>
         <Heading as="h3" variant="section-title">
          Why Code a Website?
         </Heading>
         <Paragraph>
          There could be many reasons why you would want to create a website. One cause of making a website using a third party company is that they have the control to do whatever they want on your website, such as show ads to viewers, or modify things within the website, since it is technically owned by them. Whether it is to help gain knowledge on front-end programming, or wanting a higher level of customizations with all the little details of your website, it is easy to find pros of building a website yourself over using a pre-made cookie cutter website creator online.

        </Paragraph>		
	</Section>
	<Section delay={0.4}>
         <Heading as="h3" variant="section-title">
          How do you get started?
         </Heading>
         <Paragraph>
          There are many different ways to create a website, including different languages and developer tools. In order to start, prior knowledge of coding would help immensely, but is not required. You can look in the How-to for my own take on how to start!

        </Paragraph>		
	</Section>
	</Container>

)
}

export default Page
