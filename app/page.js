import { promises as fs } from 'fs';
import { Box, Heading, Text } from '@chakra-ui/react';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/home.json', 'utf8');
  const data = JSON.parse(file);

  console.log(data)
  
  return (
    <Box>
      <Heading as="h1">{data.title}</Heading>
      <Text>{data.content}</Text>
    </Box>
  )
}
