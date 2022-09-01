import NextLink from 'next/link'
import {
    Box,
    Heading,
    Image,
    Button, useColorModeValue, List, ListItem, Icon, Link
}
    from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"

import PageLayout from "../components/layouts/pageLayout";
import TechStack from "../components/techStack/Stacks";
import {TimeLine} from "../components/about";
import styled from "@emotion/styled";
import Paragraph from "../components/paragraph";
import Section from '../components/skill/section';
import { skillsArray } from '../data/data';

const BoxHeader = styled.p`
  box-shadow: .6em 0 0 #81E6D9;
  width: 25ch;
  overflow: hidden;
  color: #FFF;
  white-space: nowrap;
  animation: caret .5s step-end infinite alternate,
  type 5s steps(24, end);


  @keyframes type {
    0% {
      width: 0;
    }

  }
  @keyframes caret {
    50% {
      box-shadow: .6em 0 0 transparent;
    }
  }
`;

export default function Home() {
    return (
        <PageLayout title="Matheus Lima - Full Stack Developer">
            <Box display="flex" justifyContent="center" borderRadius="lg" bg='teal' p={3} mb={20}
            >
                <BoxHeader>
                    Hello, I&rsquo;m a Full Stack developer!

                </BoxHeader>
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading fontSize={22} variant="section-title" mb={5}>
                        About 🧑‍💻
                    </Heading>
                    <Paragraph>
                        My name is Matheus and I'm a Full Stack developer and game lover from Brazil!
                        <br/>
                        My main stacks are ReactJS and NodeJS. I am 25 years old, I live in Manaus, capital of Amazonas.
                        Currently works at Dell LEAD - Research, Development and Innovation Center.</Paragraph>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 6}}
                    ml={{md: 6}}
                    textAlign="center"
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
            <Box textAlign="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        My portfolio
                    </Button>
                </NextLink>
            </Box>
            <TimeLine/>
            <TechStack skills={skillsArray} />

            {/* <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://www.instagram.com/mattheuuslima/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoInstagram}/>}
                            >
                                @mattheuuslima
                            </Button>
                        </Link>

                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/matheusl08/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin}/>}
                            >
                                @matheusl08
                            </Button>
                        </Link>

                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/mathLima8" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoTwitter}/>}
                            >
                                @mathLima8
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://bymotion.com.br/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoEarthSharp}/>}
                            >
                                bymotion.com.br
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section> */}
        </PageLayout>
    )
}

