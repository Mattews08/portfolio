import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image
} from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {ColorModeSwitcher} from '../theme/ColorModeSwitcher';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {useLinkColor} from '../theme';
import {MotionBox} from './animations/motion';
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 10px;
  line-height: 20px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const webLinks = [
    {name: 'Works', path: '/about'},
    {name: 'Posts', path: '/blog'}
];

const mobileLinks = [
    {name: 'Works', path: '/about'},
    {name: 'Posts', path: '/blog'}
];


interface NavLinkProps {
    index?: number;
    name: string;
    path: string;
    linkColor: string;
    onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
    const router = useRouter();
    const link = {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('blue.500', 'blue.200')
    };

    return (
        <NextLink href={props.path} passHref>
            <Link
                px={3}
                py={1}
                lineHeight="inherit"
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: link.bg,
                    color: props.linkColor
                }}
                bg={router.pathname === props.path ? link.bg : 'transparent'}
                color={router.pathname === props.path ? props.linkColor : 'inherit'}
                onClick={() => props.onClose()}
            >
                {props.name}
            </Link>
        </NextLink>
    );
};

export default function TopNav() {
    const linkColor = useLinkColor();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const imgLogo = `./assets/logo.png`

    return (
        <>
            <MotionBox
                px={4}
                boxShadow={'lg'}
                position="fixed"
                width="100%"
                zIndex="55"
                css={{
                    backdropFilter: 'saturate(180%) blur(5px)',
                    backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                }}
            >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    w={['90%', '85%', '80%']}
                    maxW={800}
                    mx="auto"
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                        aria-label={'Open Menu'}
                        display={['inherit', 'inherit', 'none']}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <NextLink href={'/'} passHref>
                            <LogoBox>
                                <Image src={imgLogo} width={10} height={10} alt=""/>
                            </LogoBox>
                        </NextLink>
                        <HStack fontSize={16} as={'nav'} spacing={3} display={{base: 'none', md: 'flex'}}>
                            {webLinks.map((link, index) => (
                                <NavLink
                                    key={index}
                                    name={link.name}
                                    path={link.path}
                                    linkColor={linkColor}
                                    onClose={onClose}
                                />
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <ColorModeSwitcher justifySelf="flex-end"/>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box
                        pb={4}
                        w={['100%', '100%', '80%']}
                        maxW={800}
                        display={['inherit', 'inherit', 'none']}
                    >
                        <Stack as={'nav'} spacing={4}>
                            {mobileLinks.map((link, index) => (
                                <NavLink
                                    key={index}
                                    index={index}
                                    name={link.name}
                                    path={link.path}
                                    linkColor={linkColor}
                                    onClose={onClose}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </MotionBox>
        </>
    );
}
