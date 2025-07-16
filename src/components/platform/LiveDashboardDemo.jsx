import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Progress,
  Icon,
  Flex,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { 
  FaThermometerHalf, 
  FaGasPump, 
  FaTools, 
  FaBatteryThreeQuarters,
  FaTachometerAlt,
  FaWater,
  FaExclamationTriangle,
  FaCheckCircle
} from 'react-icons/fa';
import { MdWarning, MdCheckCircle } from 'react-icons/md';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const MetricCard = ({ title, value, status, icon, unit, trend, cardColor }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = cardColor || (
    status === 'normal' ? 'green.500' : 
    status === 'warning' ? 'yellow.500' : 
    status === 'critical' ? 'red.500' : 'gray.300'
  );

  return (
    <Box
      bg={bgColor}
      p={6}
      rounded="lg"
      shadow="md"
      borderLeft="4px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
    >
      <HStack justify="space-between" mb={2}>
        <Icon as={icon} w={6} h={6} color={cardColor || borderColor} />
        {status === 'warning' && (
          <Icon 
            as={MdWarning} 
            w={4} 
            h={4} 
            color="yellow.500"
            animation={`${pulse} 2s infinite`}
          />
        )}
        {status === 'normal' && (
          <Icon as={MdCheckCircle} w={4} h={4} color="green.500" />
        )}
      </HStack>
      <Text fontSize="sm" color="gray.600" mb={1}>
        {title}
      </Text>
      <HStack align="baseline">
        <Text fontSize="3xl" fontWeight="bold">
          {value}
        </Text>
        <Text fontSize="lg" color="gray.500">
          {unit}
        </Text>
      </HStack>
      {trend && (
        <Text fontSize="xs" color={trend > 0 ? 'red.500' : 'green.500'} mt={1}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last hour
        </Text>
      )}
    </Box>
  );
};

const YachtyAIMessage = ({ message, timestamp }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  
  return (
    <Box
      bg={bgColor}
      p={4}
      rounded="lg"
      borderLeft="3px"
      borderColor="blue.500"
      mb={3}
    >
      <HStack justify="space-between" mb={2}>
        <Badge colorScheme="blue">Yachty AI</Badge>
        <Text fontSize="xs" color="gray.500">{timestamp}</Text>
      </HStack>
      <Text>{message}</Text>
    </Box>
  );
};

const LiveDashboardDemo = () => {
  const [engineTemp, setEngineTemp] = useState(180);
  const [fuelLevel, setFuelLevel] = useState(75);
  const [batteryLevel, setBatteryLevel] = useState(12.8);
  const [oilPressure, setOilPressure] = useState(45);
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Good morning! All systems are operating normally. Your yacht is ready for today's journey.",
      timestamp: "8:00 AM"
    },
    {
      id: 2,
      message: "I've detected a slight increase in port engine vibration. Scheduling preventive maintenance for next week to avoid any issues.",
      timestamp: "10:30 AM"
    }
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEngineTemp(prev => prev + (Math.random() - 0.5) * 2);
      setFuelLevel(prev => Math.max(0, prev - 0.1));
      setBatteryLevel(prev => prev + (Math.random() - 0.5) * 0.1);
      setOilPressure(prev => prev + (Math.random() - 0.5) * 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="1400px">
        <VStack spacing={4} mb={12} textAlign="center">
          <Badge colorScheme="green" fontSize="md" px={3} py={1}>
            LIVE DEMO
          </Badge>
          <Heading as="h2" size="xl">
            Your Yacht's Health in Real-Time
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px">
            Experience the power of our AI-driven monitoring system. 
            Watch as your yacht's vital signs update in real-time.
          </Text>
        </VStack>

        <Box
          bg={useColorModeValue('white', 'gray.800')}
          rounded="xl"
          shadow="2xl"
          p={8}
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          {/* Vessel Status Header */}
          <HStack justify="space-between" mb={8}>
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color="gray.500">Vessel Status</Text>
              <Heading size="md">MY Ocean Life Demo</Heading>
              <Text fontSize="sm" color="gray.600">54' Riviera • Westshore Yacht Club</Text>
            </VStack>
            <VStack align="end" spacing={1}>
              <Badge colorScheme="green" fontSize="lg" px={3} py={1}>
                ALL SYSTEMS OPERATIONAL
              </Badge>
              <Text fontSize="xs" color="gray.500">Last update: 2 seconds ago</Text>
            </VStack>
          </HStack>

          {/* Metrics Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
            <MetricCard
              title="Engine Temperature"
              value={engineTemp.toFixed(1)}
              unit="°F"
              status={engineTemp > 195 ? 'warning' : 'normal'}
              icon={FaThermometerHalf}
              trend={0.5}
              cardColor="green.500"
            />
            <MetricCard
              title="Fuel Level"
              value={fuelLevel.toFixed(0)}
              unit="%"
              status={fuelLevel < 25 ? 'warning' : 'normal'}
              icon={FaGasPump}
              trend={-0.2}
              cardColor="blue.500"
            />
            <MetricCard
              title="Battery Voltage"
              value={batteryLevel.toFixed(1)}
              unit="V"
              status={batteryLevel < 12.0 ? 'warning' : 'normal'}
              icon={FaBatteryThreeQuarters}
              cardColor="purple.500"
            />
            <MetricCard
              title="Oil Pressure"
              value={oilPressure.toFixed(0)}
              unit="PSI"
              status={oilPressure < 30 ? 'critical' : 'normal'}
              icon={FaTachometerAlt}
              cardColor="orange.500"
            />
          </SimpleGrid>

          {/* AI Assistant Section */}
          <Box>
            <Heading size="md" mb={4}>
              Yachty AI Assistant
            </Heading>
            <Box
              bg={useColorModeValue('gray.100', 'gray.700')}
              p={6}
              rounded="lg"
              maxH="300px"
              overflowY="auto"
            >
              {messages.map((msg) => (
                <YachtyAIMessage
                  key={msg.id}
                  message={msg.message}
                  timestamp={msg.timestamp}
                />
              ))}
              
              {/* Live Alert Demo */}
              <Box
                bg="yellow.50"
                borderColor="yellow.500"
                borderWidth="1px"
                p={4}
                rounded="lg"
                mb={3}
              >
                <HStack mb={2}>
                  <Icon as={FaExclamationTriangle} color="yellow.600" />
                  <Text fontWeight="semibold" color="yellow.800">
                    Maintenance Reminder
                  </Text>
                </HStack>
                <Text fontSize="sm" color="yellow.700">
                  Engine oil change due in 12 days (50 hours). 
                  Would you like me to schedule this service?
                </Text>
                <HStack mt={3} spacing={3}>
                  <Button size="sm" colorScheme="yellow">
                    Schedule Now
                  </Button>
                  <Button size="sm" variant="outline">
                    Remind Me Later
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Flex justify="center" mt={8} gap={4}>
            <Button
              colorScheme="blue"
              size="lg"
              leftIcon={<FaTools />}
            >
              Request Service
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              View Full Dashboard
            </Button>
          </Flex>
        </Box>

        {/* Features List */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={12}>
          <VStack align="start" spacing={2}>
            <Icon as={FaCheckCircle} color="green.500" w={6} h={6} />
            <Text fontWeight="semibold">Real-Time Monitoring</Text>
            <Text fontSize="sm" color="gray.600">
              All vessel systems monitored 24/7 with instant alerts
            </Text>
          </VStack>
          <VStack align="start" spacing={2}>
            <Icon as={FaCheckCircle} color="green.500" w={6} h={6} />
            <Text fontWeight="semibold">Predictive Maintenance</Text>
            <Text fontSize="sm" color="gray.600">
              AI predicts issues before they become problems
            </Text>
          </VStack>
          <VStack align="start" spacing={2}>
            <Icon as={FaCheckCircle} color="green.500" w={6} h={6} />
            <Text fontWeight="semibold">Mobile Access</Text>
            <Text fontSize="sm" color="gray.600">
              Monitor your yacht from anywhere in the world
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default LiveDashboardDemo;