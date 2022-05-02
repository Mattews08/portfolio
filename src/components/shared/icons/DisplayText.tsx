import { Text, useColorModeValue, Spinner } from '@chakra-ui/react'

interface DisplayTextProps {
  isLoading: boolean
  value: number
}

const DisplayText = ({ isLoading, value }: DisplayTextProps) => {
  const textColor = useColorModeValue('gray.500', 'gray.200')

  return (
    <>
      {isLoading ? (
        <Spinner
          size="xs"
          speed="0.65s"
          emptyColor="gray.200"
        />
      ) : (
        <Text
          fontSize="16px"
          noOfLines={1}
          fontWeight="400"
          align="left"
          color={textColor}
        >
          {value}
        </Text>
      )}
    </>
  )
}

export default DisplayText
