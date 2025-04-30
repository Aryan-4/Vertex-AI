import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET /api/agents - Get all configured agents
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get querystring parameters
    const searchParams = req.nextUrl.searchParams
    const boardId = searchParams.get('boardId')

    // If boardId is provided, filter agents by board
    const agents = boardId 
      ? await prisma.agent.findMany({
          where: {
            boardId: boardId,
          },
          orderBy: {
            createdAt: 'desc',
          },
        })
      : await prisma.agent.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        })

    return NextResponse.json(agents)
  } catch (error) {
    console.error('Error fetching agents:', error)
    return NextResponse.json(
      { error: 'Failed to fetch agents' },
      { status: 500 }
    )
  }
}

// POST /api/agents - Create a new agent
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { name, description, type, boardId, configuration } = body

    // Validate required fields
    if (!name || !type || !boardId) {
      return NextResponse.json(
        { error: 'Name, type, and boardId are required' },
        { status: 400 }
      )
    }

    // Validate board exists
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    })

    if (!board) {
      return NextResponse.json(
        { error: 'Board not found' },
        { status: 404 }
      )
    }

    // Create new agent
    const agent = await prisma.agent.create({
      data: {
        name,
        description,
        type,
        configuration: configuration ? JSON.stringify(configuration) : "{}",
        boardId,
        status: 'idle',
      },
    })

    return NextResponse.json(agent, { status: 201 })
  } catch (error) {
    console.error('Error creating agent:', error)
    return NextResponse.json(
      { error: 'Failed to create agent' },
      { status: 500 }
    )
  }
}

// DELETE /api/agents - Delete all agents (admin only)
export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if user is admin (simplified)
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden - Admin role required' },
        { status: 403 }
      )
    }

    // Delete all agents
    await prisma.agent.deleteMany({})

    return NextResponse.json(
      { message: 'All agents deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting agents:', error)
    return NextResponse.json(
      { error: 'Failed to delete agents' },
      { status: 500 }
    )
  }
} 