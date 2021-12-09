import NextLink from 'next/link'
import { Container,
	 Box,
	 Heading,
	 Image,
	 Divider,
	 useColorModeValue	
} from '@chakra-ui/react'
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
          About
         </Heading>
         <Paragraph>
          Paragraph
        </Paragraph>		
	</Section>
		</Container>
	)
}

export default Page
