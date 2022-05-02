import * as React from 'react';
import { useState } from 'react';
import {
    Icon,
    VStack,
    HStack,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useColorModeValue,
    SimpleGrid
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import SkillCard from '../skill/skill-card';
import { skillsArray } from '../../data/data';
import Header from '../shared/header';
import { MotionBox } from '../shared/animations/motion';
import { container, PageSlideFade } from '../shared/animations/page-transitions';
import PageLayout from '../layouts/pageLayout';
import { useLinkColor } from '../theme';
import { SkillProps} from '../../interface/interface';

const tabList = [
    {
        name: 'All',
        filterName: '',
        icon: AiTwotoneThunderbolt
    },
    {
        name: 'Web Development',
        filterName: 'development',
        icon: BiDesktop
    },
    {
        name: 'Web Design',
        filterName: 'design',
        icon: GiSpiderWeb
    },
    {
        name: 'Devops',
        filterName: 'devops',
        icon: AiOutlineCloudServer
    }
];
const TechStack: React.FC<SkillProps> = ({ skills }) => {
    const bgColor = useLinkColor();
    const [skillsList, setSkillsList] = useState([]);

    React.useEffect(() => {
        // @ts-ignore
        return setSkillsList(skills);
    }, []);

    const filterSkills = (tab: string | any[]) => {
        if (tab.length) { // @ts-ignore
            setSkillsList(skills.filter((skill: { type: any; }) => skill.type === tab));
        }
        else { // @ts-ignore
            setSkillsList(skills);
        }
    };

    return (
        <PageLayout title="Skills">
            <PageSlideFade>
                <VStack spacing={8}>

                        <VStack>
                            <Header mt={0} mb={1}>
                                Tech Stack
                            </Header>
                            <Text
                                fontSize={'xl'}
                                color={useColorModeValue('gray.500', 'gray.200')}
                                maxW="lg"
                                textAlign="center"
                            >
                                A list of my favorite tools and technologies that I use on a regular basis.
                            </Text>
                        </VStack>


                        <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
                            <TabList display="flex" flexWrap="wrap">
                                {tabList.map((tab, index) => (
                                    <Tab
                                        bg={useColorModeValue('gray.100', 'gray.800')}
                                        color={useColorModeValue('gray.600', 'gray.500')}
                                        _selected={{
                                            color: 'white',
                                            bg: bgColor
                                        }}
                                        mr={2}
                                        mt={2}
                                        onClick={() => filterSkills(tab.filterName)}
                                        key={index}
                                    >
                                        <HStack spacing={1}>
                                            <Icon as={tab.icon} />
                                            <Text>{tab.name}</Text>
                                        </HStack>
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels minHeight={'45vh'}>
                                <TabPanel px={0}>
                                    <MotionBox variants={container} initial="hidden" animate="visible">
                                        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                                            {skillsList.map((tool, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={tool.name}
                                                    description={tool.description}
                                                    image={tool.image}
                                                    // platform={"web"}
                                                    link={tool.link}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                                <TabPanel px={0}>
                                    <MotionBox variants={container} initial="hidden" animate="visible">
                                        <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                            {skillsList.map((tool, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={tool.name}
                                                    description={tool.description}
                                                    image={tool.image}
                                                    // platform={"web"}
                                                    link={tool.link}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                                <TabPanel px={0}>
                                    <MotionBox variants={container} initial="hidden" animate="visible">
                                        <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                            {skillsList.map((tool, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={tool.name}
                                                    description={tool.description}
                                                    image={tool.image}
                                                    // platform={"web"}
                                                    link={tool.link}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                                <TabPanel px={0}>
                                    <MotionBox variants={container} initial="hidden" animate="visible">
                                        <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                            {skillsList.map((tool, index) => (
                                                <SkillCard
                                                    key={index}
                                                    name={tool.name}
                                                    description={tool.description}
                                                    image={tool.image}
                                                    // platform={"web"}
                                                    link={tool.link}
                                                />
                                            ))}
                                        </SimpleGrid>
                                    </MotionBox>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                </VStack>
            </PageSlideFade>
        </PageLayout>
    );
};

// @ts-ignore
export const getStaticProps: GetStaticProps<SkillProps> = () => {
    return {
        props: {
            skills: skillsArray
        }
    };
};

export default TechStack;