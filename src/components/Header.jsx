import { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Button, 
  Stack,
  IconButton,
  Collapse,
  useDisclosure,
  Link as ChakraLink,
  Container,
  Image,
  Badge
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaPhone } from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg={scrolled ? 'white' : 'rgba(255, 255, 255, 0.98)'}
      boxShadow={scrolled ? 'md' : 'sm'}
      transition="background-color 0.3s ease, box-shadow 0.3s ease"
    >
      <Container maxW="1200px">
        <Flex
          color="gray.700"
          minH={'70px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
          justify="space-between"
        >
          <Flex flex={{ base: 1 }} justify="start" align="center">
            <ChakraLink as={RouterLink} to="/">
              <Stack direction="row" align="center" spacing={3}>
                <Box height="50px" width="auto">
                  <Image
                    src="/images/logo/ocean-life-logo.png"
                    alt="Ocean Life Yacht Services"
                    height="100%"
                    width="auto"
                    objectFit="contain"
                  />
                </Box>
                {/* Remove this Box if you don't want the text */}
                {/* <Box display={{ base: 'none', md: 'block' }}>
                  <Text fontSize="lg" fontWeight="bold" color="brand.primary">
                    Ocean Life
                  </Text>
                  <Text fontSize="xs" color="gray.600" mt={-1}>
                    Yacht Services
                  </Text>
                </Box> */}
              </Stack>
            </ChakraLink>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            display={{ base: 'none', md: 'flex' }}
            align="center"
          >
            <DesktopNav />
            <Button
              as="a"
              href="tel:+17278884016"
              size="sm"
              variant="outline"
              colorScheme="red"
              leftIcon={<MdEmergency />}
              display={{ base: 'none', lg: 'inline-flex' }}
            >
              24/7 Emergency
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.primary'}
              _hover={{
                bg: 'brand.primaryDark',
              }}
            >
              Get Started
            </Button>
          </Stack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Box ref={menuRef}>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav onClose={onClose} />
          </Collapse>
        </Box>
      </Container>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = 'brand.primary'; // or your preferred color
  const linkHoverColor = 'brand.primaryDark'; // or your preferred hover color

  return (
    <Stack direction={'row'} spacing={6} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} position="relative">
          <ChakraLink
            as={RouterLink}
            p={2}
            to={navItem.href ?? '#'}
            fontSize={'sm'}
            fontWeight={600}
            color={linkColor}
            textTransform="uppercase"
            letterSpacing="wide"
            position="relative"
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              _after: {
                width: '80%',
              },
            }}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0%',
              height: '2px',
              bg: 'brand.primary',
              transition: 'width 0.3s ease',
            }}
          >
            {navItem.label}
            {navItem.isNew && (
              <Badge
                position="absolute"
                top="-5px"
                right="-20px"
                colorScheme="orange"
                fontSize="2xs"
                px={1}
              >
                NEW
              </Badge>
            )}
          </ChakraLink>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ onClose }) => {
  return (
    <Stack
      bg={'white'}
      p={4}
      display={{ md: 'none' }}
      borderBottomWidth={1}
      borderBottomColor="gray.200"
    >
      <Box pb={2} mb={2} borderBottom="1px" borderColor="gray.100">
        <Button
          as="a"
          href="tel:+17278884016"
          w="full"
          size="sm"
          colorScheme="red"
          variant="solid"
          leftIcon={<MdEmergency />}
          mb={2}
        >
          24/7 Emergency: (727) 888-4016
        </Button>
      </Box>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClose={onClose} />
      ))}
      <Box py={2}>
        <Button
          as={RouterLink}
          to="/contact"
          w="full"
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'brand.primary'}
          _hover={{
            bg: 'brand.primaryDark',
          }}
          onClick={onClose}
        >
          Get Started
        </Button>
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, href, onClose, isNew }) => {
  return (
    <Stack spacing={4}>
      <ChakraLink
        as={RouterLink}
        py={2}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        onClick={onClose}
      >
        <Flex align="center">
          <Text
            fontWeight={600}
            color={'gray.700'}
          >
            {label}
          </Text>
          {isNew && (
            <Badge
              ml={2}
              colorScheme="orange"
              fontSize="2xs"
              px={1}
            >
              NEW
            </Badge>
          )}
        </Flex>
      </ChakraLink>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Platform',
    href: '/platform',
    isNew: true,
  },
  {
    label: 'Fleet',
    href: '/fleet',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default Header;