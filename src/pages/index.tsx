import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    List,
    ListItem,
    Link,
    Icon
}
    from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import {ChevronRightIcon} from "@chakra-ui/icons"
import {
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoInstagram,
    IoEarthSharp
}
    from 'react-icons/io5'
import PageLayout from "../components/layouts/pageLayout";
import TechStack from "../components/techStack/Stacks";
import {skillsArray} from "../data/data";
import {TimeLine} from "../components/about";

export default function Home() {
    return (
        <PageLayout title="Matheus Lima - Full Stack Developer">
            {/*<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.500')} p={3} mb={20}*/}
            {/*     textAlign="center">*/}
            {/*    Hello, I&rsquo;m a full-stack developer from Brazil!*/}
            {/*</Box>*/}

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading fontSize={22} variant="page-title" mb={5}>
                        Matheus Lima
                    </Heading>
                    <p>Developer (ReactJS, Java, NodeJS)</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    alignItems="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/assets/profile.jpg"
                        alt="Profile"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading fontSize={22} variant="section-title" mb={5}>
                    Work
                </Heading>
                <Paragraph>Sou é um desenvolvedor Front-end, focado em ReactJS e Flutter. Tenho 25 anos, moro no
                    Brasil no estado do Amazonas. Atualmente trabalho no Dell LEAD - Centro de Pesquisa, Desenvolvimento
                    e Inovação Dell.</Paragraph>
                <Box textAlign="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <TimeLine/>
            </Section>
            <Section delay={0.3}>
                <TechStack skills={skillsArray}/>
            </Section>
            {/*<Section delay={0.3}>*/}
            {/*    <Heading as="h3" variant="section-title">*/}
            {/*        On the web*/}
            {/*    </Heading>*/}
            {/*    <List>*/}
            {/*        <ListItem>*/}
            {/*            <Link href="https://www.instagram.com/mattheuuslima/" target="_blank">*/}
            {/*                <Button*/}
            {/*                    variant="ghost"*/}
            {/*                    colorScheme="teal"*/}
            {/*                    leftIcon={<Icon as={IoLogoInstagram}/>}*/}
            {/*                >*/}
            {/*                    @mattheuuslima*/}
            {/*                </Button>*/}
            {/*            </Link>*/}

            {/*        </ListItem>*/}
            {/*        <ListItem>*/}
            {/*            <Link href="https://www.linkedin.com/in/matheusl08/" target="_blank">*/}
            {/*                <Button*/}
            {/*                    variant="ghost"*/}
            {/*                    colorScheme="teal"*/}
            {/*                    leftIcon={<Icon as={IoLogoLinkedin}/>}*/}
            {/*                >*/}
            {/*                    @matheusl08*/}
            {/*                </Button>*/}
            {/*            </Link>*/}

            {/*        </ListItem>*/}
            {/*        <ListItem>*/}
            {/*            <Link href="https://twitter.com/mathLima8" target="_blank">*/}
            {/*                <Button*/}
            {/*                    variant="ghost"*/}
            {/*                    colorScheme="teal"*/}
            {/*                    leftIcon={<Icon as={IoLogoTwitter}/>}*/}
            {/*                >*/}
            {/*                    @mathLima8*/}
            {/*                </Button>*/}
            {/*            </Link>*/}
            {/*        </ListItem>*/}
            {/*        <ListItem>*/}
            {/*            <Link href="https://bymotion.com.br/" target="_blank">*/}
            {/*                <Button*/}
            {/*                    variant="ghost"*/}
            {/*                    colorScheme="teal"*/}
            {/*                    leftIcon={<Icon as={IoEarthSharp}/>}*/}
            {/*                >*/}
            {/*                    bymotion.com.br*/}
            {/*                </Button>*/}
            {/*            </Link>*/}
            {/*        </ListItem>*/}
            {/*    </List>*/}
            {/*</Section>*/}
        </PageLayout>
    )
}

