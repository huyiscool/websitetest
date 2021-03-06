import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import { BioSection, BioYear } from '../components/bio'

const History = () => (
	<Container>
		<Heading as="h3" variant="page-title">
		 How it Started
		</Heading>


		<Section delay={0.1}>
		 <BioSection>
			<BioYear>1991</BioYear>
			First HTML specification was created. It only supported text and consisted of just 18 tags. While programming existed before this, the idea of creating websites was birthed from this innovation.
		 </BioSection>
		</Section>

		  <Section delay={0.2}>
                 <BioSection>
                        <BioYear>1993</BioYear>
                        HTML 4.0 was published, and was the first specification to support CSS, a cornerstone technology of the World Wide Web.Internet Explorer 3 also became the first commercial browser to support CSS. 
                 </BioSection>
                </Section>


		 <Section delay={0.3}>
                 <BioSection>
                        <BioYear>1995</BioYear>
                       In 1995, a new browser scripting language called Mocha was created by Brendan Eich in just 10 days. It got renamed to LiveScript. A few months later it got renamed again to JavaScript as we now know it. Ecma International is currently responsible for developing JavaScript.  
                 </BioSection>
                </Section>


		<Section delay={0.4}>
                 <BioSection>
                        <BioYear>2000</BioYear>
                        CSS libraries and frameworks began cropping up. These frameworks introduced a grid system to help web designers layout their content. The frameworks supported most browsers(one less headache for designers).
                 </BioSection>
                </Section>


		<Section delay={0.5}>
                 <BioSection>
                        <BioYear>2014</BioYear>
                        a central repository for frontend packages was created, called the npm registry. This has helped front-end developers immensely as a central location for most resources needed by front-end developers.
                 </BioSection>
                </Section>
		
		<Section delay={0.6}>
                 <BioSection>
                        <BioYear>2017</BioYear>
			Bootstrap version 4, released on August 2017, added support for Sass and Flexbox. Bootstrap is currently the most popular CSS framework. It???s more popular with developers who want to quickly prototype a great looking web interface.
                 </BioSection>
                </Section>
                <Section delay={0.7}>
                 <BioSection>
                        <BioYear>2018</BioYear>
                        GraphQL emerges. Native HTML, CSS & JavaScript become more powerful. New platforms built on-top existing JavaScript frameworks emerge: StoryBook, Motion UI, Gatsby, Next.js.
                 </BioSection>
                </Section>


	<Heading as="h3" version="section-title">
	How it&apos;s Going
	</Heading>
	
	<Paragraph>
	 Going from being only able to display text, to now having libraries dedicated just to emoticons. We are able to see a rapidly growing availability of resources to developers and hobbiests alike to create specialized websites. The current version of HTML, CSS and Javascript are far more advanced than what it was a decade ago. Most browsers are now competing to meet compliance, hence the latest specifications get rolled out faster. It???s highly likely that most of the heavy lifting tasks provided by modern libraries will soon be implemented natively in the future. There is even an uprise in popularity of drag and drop builders that help users visualize changes better. As more things become available to the general public, everyone will be able to create websites specifically tailored to their tastes!
	</Paragraph>
	</Container>

)

export default History
