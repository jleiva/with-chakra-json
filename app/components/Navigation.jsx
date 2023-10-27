import Link from 'next/link'
import { Box, Link as ChakraLink } from "@chakra-ui/react"

const link = [
  { url: "/", label: 'Inicio', id: 'inicio'},
  { url: "/acerca", label: 'Acerca', id: 'acerca'},
  { url: "/productos", label: 'Productos', id: 'productos'}
]

const Navigation = () => {
  return (
    <Box as="nav">
      {
        link.map(({ url, label, id}) => <ChakraLink as={Link} key={id} href={url} fontSize="md" p="3">{label}</ChakraLink>)
      }
    </Box>
  )
}

export default Navigation