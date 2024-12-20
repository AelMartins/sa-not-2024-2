
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
  log: [ { emit: 'event', level: 'query' }]
})
/**
 * Exibe no console as consultas SQL enviadas
 * ao banco de dados
 */
prisma.$on('query', event => {
  console.log('-'.repeat(60))
  console.log(event.query)
  if(event.params) console.log('PARAMS:', event.params)
  console.log('-'.repeat(60))
})
export default prisma