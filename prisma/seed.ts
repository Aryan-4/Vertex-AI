import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create a test user
  const password = await hash('password123', 10)
  
  const user = await prisma.user.upsert({
    where: { email: 'test@vertexai.com' },
    update: {},
    create: {
      email: 'test@vertexai.com',
      name: 'Test User',
      password,
      role: 'USER',
    },
  })

  console.log('Created test user with id:', user.id)
  
  // Create frameworks
  const frameworks = [
    { name: 'SOC 2', description: 'System and Organization Controls for service organizations' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'ISO 27001', description: 'Information security management systems standard' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
  ]
  
  for (const framework of frameworks) {
    await prisma.framework.upsert({
      where: { name: framework.name },
      update: {},
      create: framework,
    })
  }
  
  console.log('Created framework data')
  
  // Create a test board
  const soc2Board = await prisma.board.create({
    data: {
      name: 'SOC 2 Compliance',
      description: 'Evidence collection for our SOC 2 Type II audit',
      userId: user.id,
      frameworks: {
        connect: { name: 'SOC 2' }
      },
    },
  })

  console.log('Created test board with id:', soc2Board.id)

  // Create some evidence items
  await prisma.evidence.createMany({
    data: [
      {
        title: 'Access Control Policy',
        description: 'Documentation of our access control policies and procedures',
        status: 'approved',
        boardId: soc2Board.id,
      },
      {
        title: 'Risk Assessment',
        description: 'Annual risk assessment report',
        status: 'pending',
        boardId: soc2Board.id,
      },
      {
        title: 'Employee Training Records',
        description: 'Security awareness training completion records',
        status: 'approved',
        boardId: soc2Board.id,
      },
    ],
  })

  console.log('Created test evidence items')

  // Create a test agent
  await prisma.agent.create({
    data: {
      name: 'Access Log Collector',
      description: 'Collects access logs from cloud services',
      type: 'cloud',
      configuration: JSON.stringify({
        services: ['aws', 'gcp'],
        frequency: 'daily',
      }),
      boardId: soc2Board.id,
    },
  })

  console.log('Created test agent')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 