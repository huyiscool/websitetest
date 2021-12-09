import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import critique from '../public/images/critique.png'

const Critique = () => (
        <Container>
                <Heading>
                 Critique
                </Heading>
	<Section delay ={0.1}>
	<SimpleGrid columns={[1, 1, 2]} gap={6}>
	 <GridItem title="www.webdesignerdepot.com" thumbnail={critique} href="https://www.webdesignerdepot.com/2016/05/9-reasons-hand-coding-always-beats-site-builders/
"/>
	</SimpleGrid>
	<Heading as="h3" variant="section-title">
	"9 Reasons Hand-Coding Always Beats Site Builders"
	</Heading>

	<Paragraph>
This article was created by Emma Grant, where she goes on to give support to hand coding websites over using a conventional site-builder such as Wordpress or Squarespace. In the article, she goes on to support her claim with 9 compelling arguments to support her initial claim of the benefits of hand-coding, all of them essentially boiling down to four main points: “Retaining Control of Your Work”, “Not Getting Screwed Over By Site-Building Companies”, “Learning a Valuable Skill”, “Making a Better Product”. 

	</Paragraph>
	<Paragraph>
The first point of retaining control of your work actually goes in hand with the second point of not getting screwed over by site-building companies, as having knowledge of how your website works, and how it can be viewed by others allows you to be able to have faith that nothing you made will accidentally be erased by some third party. The point of learning a valuable skill is obvious. In these modern times as code becomes more accessible and easy to learn, more and more companies are desiring people who have some knowledge with coding. Being able to code your own website shows to job recruiters and companies that you have the ability and knowledge to code and create a website all on your own. Finally, her point of making a better product is something that I believe comes surprisingly easily. As when you code your own website, the amount of tools you have available to you far surpass what is given using a site-builder website, and allows you to be able to create a perfect website in your own eyes, rather than using what any site-builder thinks you would like.

	</Paragraph>

	<Paragraph>
Overall, I feel that Emma makes very compelling points in why coding a website is better than using a site-builder, and I personally connect to the points she makes. However, I do think there are merits of using a site-builder website over coding it yourself, as it has the benefits of convenience in ease of use, with the user being able to see each change as it happens. Even though I empathize with Emma that coding is more lucrative option in the long run, I believe that both options are very eligible and neither is objectively better than the other.
Non-written element - code

	</Paragraph>	
	</Section>
        </Container>

)

export default Critique
