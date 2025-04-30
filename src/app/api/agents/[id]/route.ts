import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET /api/agents/[id] - Get a specific agent
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const agentId = params.id
    
    const agent = await prisma.agent.findUnique({
      where: {
        id: agentId,
      },
      include: {
        board: true,
      },
    })

    if (!agent) {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(agent)
  } catch (error) {
    console.error('Error fetching agent:', error)
    return NextResponse.json(
      { error: 'Failed to fetch agent' },
      { status: 500 }
    )
  }
}

// PATCH /api/agents/[id] - Update an agent
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const agentId = params.id
    const body = await req.json()
    
    // Check if agent exists
    const agent = await prisma.agent.findUnique({
      where: {
        id: agentId,
      },
    })

    if (!agent) {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      )
    }

    // Update the agent
    const updatedAgent = await prisma.agent.update({
      where: {
        id: agentId,
      },
      data: {
        name: body.name !== undefined ? body.name : undefined,
        description: body.description !== undefined ? body.description : undefined,
        type: body.type !== undefined ? body.type : undefined,
        configuration: body.configuration !== undefined ? JSON.stringify(body.configuration) : undefined,
        status: body.status !== undefined ? body.status : undefined,
      },
    })

    return NextResponse.json(updatedAgent)
  } catch (error) {
    console.error('Error updating agent:', error)
    return NextResponse.json(
      { error: 'Failed to update agent' },
      { status: 500 }
    )
  }
}

// DELETE /api/agents/[id] - Delete an agent
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const agentId = params.id
    
    // Check if agent exists
    const agent = await prisma.agent.findUnique({
      where: {
        id: agentId,
      },
    })

    if (!agent) {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      )
    }

    // Delete the agent
    await prisma.agent.delete({
      where: {
        id: agentId,
      },
    })

    return NextResponse.json(
      { message: 'Agent deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting agent:', error)
    return NextResponse.json(
      { error: 'Failed to delete agent' },
      { status: 500 }
    )
  }
}

// POST /api/agents/[id]/run - Run an agent to collect evidence
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const agentId = params.id
    
    // Check if agent exists
    const agent = await prisma.agent.findUnique({
      where: {
        id: agentId,
      },
      include: {
        board: true,
      },
    })

    if (!agent) {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      )
    }

    // Update agent status to running
    await prisma.agent.update({
      where: {
        id: agentId,
      },
      data: {
        status: 'running',
        lastRun: new Date(),
      },
    })

    // Here you would implement the actual agent execution logic
    // For demo purposes, this is simulated with a timeout
    
    // In a real implementation, you would:
    // 1. Launch a background task to run the agent
    // 2. Have the agent collect evidence based on its type and configuration
    // 3. Create evidence items linked to the board
    // 4. Update the agent status when complete

    // Simulated response for demo
    return NextResponse.json({
      message: 'Agent execution started',
      agent: {
        ...agent,
        status: 'running',
        lastRun: new Date(),
      },
    })
  } catch (error) {
    console.error('Error running agent:', error)
    return NextResponse.json(
      { error: 'Failed to run agent' },
      { status: 500 }
    )
  }
} 