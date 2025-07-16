import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Badge,
  Button,
  Icon,
  useColorModeValue,
  Stack,
  Flex,
  Divider,
  List,
  ListItem,
  ListIcon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow
} from '@chakra-ui/react';
import { FaCheck, FaShip, FaDollarSign, FaChartLine } from 'react-icons/fa';
import { MdCheckCircle, MdStar } from 'react-icons/md';

const PricingTier = ({ name, price, features, selected, onSelect, recommended }) => {
  const bgColor = useColorModeValue(
    selected ? 'blue.50' : 'white',
    selected ? 'blue.900' : 'gray.800'
  );
  const borderColor = selected ? 'blue.500' : 'gray.200';
  const checkColor = selected ? 'blue.500' : 'green.500';

  return (
    <Box
      bg={bgColor}
      p={6}
      rounded="lg"
      shadow={selected ? 'xl' : 'md'}
      border="2px"
      borderColor={borderColor}
      position="relative"
      transition="all 0.3s"
      transform={selected ? 'scale(1.02)' : 'scale(1)'}
      _hover={{ 
        shadow: 'lg', 
        borderColor: 'blue.400',
        cursor: 'pointer' 
      }}
      onClick={onSelect}
    >
      {recommended && (
        <Badge
          position="absolute"
          top="-12px"
          left="50%"
          transform="translateX(-50%)"
          colorScheme="orange"
          px={3}
          py={1}
          fontSize="sm"
        >
          <HStack spacing={1}>
            <Icon as={MdStar} />
            <Text>Recommended</Text>
          </HStack>
        </Badge>
      )}
      
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          {name}
        </Text>
        <HStack justify="center">
          <Text fontSize="4xl" fontWeight="bold" color="blue.600">
            ${price}
          </Text>
          <Text fontSize="lg" color="gray.600">
            /month
          </Text>
        </HStack>
        
        <Divider />
        
        <List spacing={3}>
          {features.map((feature, index) => (
            <ListItem key={index} fontSize="sm">
              <ListIcon as={MdCheckCircle} color={checkColor} />
              {feature}
            </ListItem>
          ))}
        </List>
        
        <Button
          colorScheme={selected ? "blue" : "gray"}
          size="lg"
          w="full"
          mt={4}
        >
          {selected ? 'Selected Plan' : 'Select Plan'}
        </Button>
      </VStack>
    </Box>
  );
};

const PricingCalculator = () => {
  const [vesselLength, setVesselLength] = useState(50);
  const [selectedTier, setSelectedTier] = useState('professional');
  
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };

  const calculateTraditionalCost = () => {
    // Based on $164/hour industry average
    // Assuming 20 hours/month of management services
    return vesselLength * 3.28 * 20; // Length factor * hourly rate * hours
  };

  const calculateSavings = () => {
    const traditionalCost = calculateTraditionalCost();
    const ourCost = selectedTier === 'essential' ? 299 : 
                    selectedTier === 'professional' ? 599 : 999;
    return Math.max(0, traditionalCost - ourCost);
  };

  const calculateSavingsPercentage = () => {
    const traditionalCost = calculateTraditionalCost();
    const ourCost = selectedTier === 'essential' ? 299 : 
                    selectedTier === 'professional' ? 599 : 999;
    return Math.round((calculateSavings() / traditionalCost) * 100);
  };

  const plans = [
    {
      name: 'Essential',
      price: 299,
      features: [
        'Basic vessel monitoring',
        'Monthly digital inspections',
        'Email alerts & notifications',
        'Maintenance history tracking',
        'Business hours support',
        'Mobile app access'
      ]
    },
    {
      name: 'Professional',
      price: 599,
      features: [
        'Everything in Essential',
        'AI predictive maintenance',
        'Yachty AI assistant',
        '16/7 priority support',
        'Weather integration',
        'Emergency response protocols',
        'Parts marketplace access',
        'QR code service activation'
      ],
      recommended: true
    },
    {
      name: 'Admiral',
      price: 999,
      features: [
        'Everything in Professional',
        '24/7 concierge support',
        'Dedicated account manager',
        'Premium vendor network',
        'Insurance integration',
        'Custom reporting',
        'Fleet management tools',
        'API access'
      ]
    }
  ];

  return (
    <Box py={20} bg={useColorModeValue('white', 'gray.900')}>
      <Container maxW="1400px">
        <VStack spacing={4} mb={12} textAlign="center">
          <Badge colorScheme="purple" fontSize="md" px={3} py={1}>
            PRICING CALCULATOR
          </Badge>
          <Heading as="h2" size="xl">
            Transparent Pricing That Saves You Money
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px">
            See exactly how much you'll save compared to traditional hourly yacht management. 
            No hidden fees, no surprises.
          </Text>
        </VStack>

        {/* Vessel Length Slider */}
        <Box
          bg={useColorModeValue('gray.50', 'gray.800')}
          p={8}
          rounded="xl"
          shadow="lg"
          mb={12}
        >
          <HStack justify="space-between" mb={8}>
            <VStack align="start" spacing={1}>
              <HStack>
                <Icon as={FaShip} color="blue.500" w={6} h={6} />
                <Text fontSize="lg" fontWeight="semibold">
                  Your Vessel Length
                </Text>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                Adjust the slider to match your yacht's length
              </Text>
            </VStack>
            <VStack align="end" spacing={0}>
              <Text fontSize="4xl" fontWeight="bold" color="blue.600">
                {vesselLength} ft
              </Text>
              <Text fontSize="sm" color="gray.500">
                Length Overall (LOA)
              </Text>
            </VStack>
          </HStack>

          <Box px={6}>
            <Slider
              value={vesselLength}
              onChange={setVesselLength}
              min={30}
              max={100}
              step={5}
            >
              <SliderMark value={30} {...labelStyles}>
                30ft
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50ft
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75ft
              </SliderMark>
              <SliderMark value={100} {...labelStyles}>
                100ft
              </SliderMark>
              <SliderTrack h={2}>
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb 
                boxSize={6} 
                bg="blue.500"
                _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
              >
                <Box color="white" fontSize="xs">
                  <Icon as={FaShip} />
                </Box>
              </SliderThumb>
            </Slider>
          </Box>
        </Box>

        {/* Pricing Plans */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
          {plans.map((plan) => (
            <PricingTier
              key={plan.name.toLowerCase()}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              selected={selectedTier === plan.name.toLowerCase()}
              onSelect={() => setSelectedTier(plan.name.toLowerCase())}
              recommended={plan.recommended}
            />
          ))}
        </SimpleGrid>

        {/* Savings Calculation */}
        <Box
          bg={useColorModeValue('green.50', 'green.900')}
          p={8}
          rounded="xl"
          shadow="lg"
          border="2px"
          borderColor="green.500"
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Stat textAlign="center">
              <StatLabel fontSize="lg">Traditional Hourly Cost</StatLabel>
              <StatNumber fontSize="3xl" color="red.500">
                ${calculateTraditionalCost().toLocaleString()}
              </StatNumber>
              <StatHelpText>Per month (avg. 20 hours)</StatHelpText>
            </Stat>
            
            <Stat textAlign="center">
              <StatLabel fontSize="lg">Ocean Life Cost</StatLabel>
              <StatNumber fontSize="3xl" color="blue.500">
                ${selectedTier === 'essential' ? 299 : 
                   selectedTier === 'professional' ? 599 : 999}
              </StatNumber>
              <StatHelpText>Fixed monthly rate</StatHelpText>
            </Stat>
            
            <Stat textAlign="center">
              <StatLabel fontSize="lg">Your Monthly Savings</StatLabel>
              <StatNumber fontSize="4xl" color="green.500">
                ${calculateSavings().toLocaleString()}
              </StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                {calculateSavingsPercentage()}% less expensive
              </StatHelpText>
            </Stat>
          </SimpleGrid>

          <Divider my={6} borderColor="green.300" />

          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="semibold" textAlign="center">
              Annual Savings: ${(calculateSavings() * 12).toLocaleString()}
            </Text>
            <Text textAlign="center" color="gray.600">
              Plus predictive maintenance prevents costly repairs, saving an additional 30-50% on maintenance
            </Text>
            <Button
              colorScheme="green"
              size="lg"
              leftIcon={<FaDollarSign />}
            >
              Start Saving Today
            </Button>
          </VStack>
        </Box>

        {/* Additional Benefits */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mt={12}>
          {[
            { icon: FaDollarSign, text: 'No Hidden Fees' },
            { icon: FaChartLine, text: 'Predictable Costs' },
            { icon: FaCheck, text: 'Cancel Anytime' },
            { icon: MdStar, text: '30-Day Guarantee' }
          ].map((benefit, index) => (
            <HStack key={index} spacing={3}>
              <Icon as={benefit.icon} color="green.500" w={5} h={5} />
              <Text fontWeight="medium">{benefit.text}</Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PricingCalculator;