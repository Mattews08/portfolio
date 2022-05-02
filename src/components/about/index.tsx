import {
    Box,
    Stack,
    VStack,
    Heading,
    Flex,
    Text,
    Image,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    PageSlideFade,
    StaggerChildren,
    CardTransition,
} from '../shared/animations/page-transitions'
import {MotionBox} from '../shared/animations/motion'
import {companies, institutes} from '../../data/data'
import {Tags} from '../shared/Tags'

interface CardProps {
    title: string
    role: string
    skills: string[]
    period: string
    logo: string
    colorMode: string
    alt?: string
}

const Card = (props: CardProps) => {
    const {title, role, skills, period, logo, colorMode, alt} = props
    return (
        <CardTransition>
            <Box
                px={4}
                py={5}
                borderWidth="1px"
                _hover={{shadow: 'lg'}}
                bg={useColorModeValue('white', 'gray.800')}
                position="relative"
                rounded="md"
            >
                <Flex justifyContent="space-between">
                    <Flex>
                        <Image
                            rounded="full"
                            w={16}
                            h={16}
                            objectFit="cover"
                            fallbackSrc={'/assets/images/placeholder.png'}
                            src={logo}
                            alt={alt}
                        />
                        <Stack spacing={2} pl={3} align="left">
                            <Heading
                                textAlign="left"
                                fontSize='md'
                                color={`mode.${colorMode}.career.text`}
                            >
                                {title}
                            </Heading>
                            <Heading
                                textAlign="left"
                                fontSize="16px"
                                fontWeight="normal"
                                color={`mode.${colorMode}.career.subtext`}
                            >
                                {role}
                            </Heading>
                            <Stack
                                spacing={1}
                                mt={3}
                                isInline
                                alignItems="center"
                                display={['none', 'none', 'flex', 'flex']}
                            >
                                <Tags
                                    tags={skills}
                                    interactive={false}
                                    tagProps={{
                                        colorScheme: 'gray',
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Flex>
                    <Stack display={['none', 'none', 'flex', 'flex']}>
                        <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
                            {period}
                        </Text>
                    </Stack>
                </Flex>
                <Stack
                    spacing={1}
                    mt={3}
                    isInline
                    alignItems="center"
                    display={['flex', 'flex', 'none', 'none']}
                >
                    <Tags
                        tags={skills}
                        interactive={false}
                        tagProps={{
                            colorScheme: 'gray',
                            padding: '0 3px'
                        }}
                    />
                </Stack>
            </Box>
        </CardTransition>
    )
}

export const TimeLine = () => {
    const {colorMode} = useColorMode()

    return (
        <PageSlideFade>
            <StaggerChildren>
                <MotionBox>
                    <Heading fontSize={22}>
                        Career 💻
                    </Heading>
                </MotionBox>
                <VStack
                    spacing={4}
                    marginBottom={6}
                    align="left"
                    mx={[0, 0, 6]}
                    mt={12}
                >
                    {companies.map((company, index) => (
                        <MotionBox whileHover={{y: -5}} key={index}>
                            <Card
                                key={index}
                                title={company.title}
                                role={company.role}
                                skills={company.skills}
                                period={company.period}
                                logo={company.logo}
                                colorMode={colorMode}
                            />
                        </MotionBox>
                    ))}
                </VStack>
                <Heading>
                    <Flex alignItems="center">
                        <MotionBox>
                            <Heading fontSize={22}>
                                Education 📖
                            </Heading>
                        </MotionBox>
                    </Flex>
                </Heading>
                <VStack
                    spacing={4}
                    marginBottom={6}
                    align="left"
                    mx={[0, 0, 6]}
                    mt={12}
                >
                    {institutes.map((institute, index) => (
                        <MotionBox whileHover={{y: -5}} key={index}>
                            <Card
                                key={index}
                                title={institute.title}
                                role={institute.role}
                                skills={institute.skills}
                                period={institute.period}
                                logo={institute.logo}
                                colorMode={colorMode}
                            />
                        </MotionBox>
                    ))}
                </VStack>
            </StaggerChildren>
        </PageSlideFade>
    )
}

