import NextLink from 'next/link'
import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box borderRadius="lg" bg="beige" p={3} mb={6}  align="center">
			Welcome to how to build a website! 
			</Box>
			
			<Box display={{md:'flex'}}>
			 <Box flexGrow={1}>
				<Heading as="h2" variant="page-title">
					How to Build a Website
				</Heading>
			<p>Huy Truong (Developer)</p>
			 </Box>
			</Box>
		</Container>
	)
}

export default Page
