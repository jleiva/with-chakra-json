import { promises as fs } from 'fs';
import { Box } from "@chakra-ui/react"

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/home.json', 'utf8');
  const data = JSON.parse(file);
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  )
}
