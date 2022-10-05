import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
	showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Marcel Kaled</Text>
					<Text color="gray.300" fontSize="small">
						mgckaled@gmail.com
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Marcel Kaled"
				src="https://github.com/mgckaled.png"
			/>
		</Flex>
	)
}
