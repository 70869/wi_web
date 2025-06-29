import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const serverId = searchParams.get('serverId');

    if (!serverId) {
      return NextResponse.json(
        { error: 'Server ID is required' },
        { status: 400 }
      );
    }

    // Discord Bot Token - you'll need to set this in your environment variables
    const botToken = process.env.DISCORD_BOT_TOKEN;
    
    if (!botToken) {
      return NextResponse.json(
        { error: 'Discord bot token not configured' },
        { status: 500 }
      );
    }

    // Fetch server information from Discord API
    const response = await fetch(`https://discord.com/api/v10/guilds/${serverId}?with_counts=true`, {
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    const guildData = await response.json();

    return NextResponse.json({
      memberCount: guildData.approximate_member_count || 0,
      onlineCount: guildData.approximate_presence_count || 0,
      serverName: guildData.name,
      serverIcon: guildData.icon,
    });

  } catch (error) {
    console.error('Error fetching Discord stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Discord stats' },
      { status: 500 }
    );
  }
} 