import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'
import example from '../public/images/example.png'
import youtube from '../public/images/youtube.png'
const howTo = () => (
        <Container>
                <Heading>
                 Get Started
                </Heading>
	
	<Section delay={0.1}>
         <Heading as="h3" variant="section-title">
                Make the directories
         </Heading>
         <Paragraph>
		Every project starts by making the directory, so in terminal, type (mkdir yourProjectName) in order to create the location of your project.
	</Paragraph>
	</Section>
	<Section delay={0.2}>
	 <Heading as="h3" variant="section-title">
		Install the Packages
	 </Heading>
	 <Paragraph>
		In order to make site building process convienent from the get go, make sure to install the right packages onto your project. There are many ways to go about this, but in my preferred method, using npm is the way to go. Typing (npm init -y) will initialize npm, and then you are able to install any packages you may need. i.e. (npm i @chakra-ui/react) is used to install the chakra ui package, which I used for the gitHub image as well as the sun and moon image. You can search online to find the packages that suit your needs!
	</Paragraph>
	</Section>


	 <Section delay={0.3}>
         <Heading as="h3" variant="section-title">
                Configure the Project
         </Heading>
         <Paragraph>
		Now, after installing all your packages, it is time to configure the project. By using npm, the configurations will be found in package.json. You can now double check the packages you installed as well as their versions. For each package, you may have to configure an option specifically, so make sure to check the documention on the packages&apos; website. 
        </Paragraph>

	<SimpleGrid columns={[1, 1, 2]} gap={6}>
	 <GridItem title="Example Configuration" thumbnail={example} href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json
"/>
	</SimpleGrid>
        </Section>


	<Section delay={0.4}>
         <Heading as="h3" variant="section-title">
                Start Coding!
         </Heading>
         <Paragraph>
        	Now that you have configured everything, all thats left is to start coding! This process cannot be explained in a paragraph or two, so I suggest watching videos and searching Google for any problems or questions you might have. Good luck!
	 </Paragraph>
	 <SimpleGrid columns={[1, 1, 2]} gap={6}>
         <GridItem title="Video to Get You Started" thumbnail={youtube} href="https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=1012"/>
        </SimpleGrid>
        </Section>





        </Container>
		
)

export default howTo
