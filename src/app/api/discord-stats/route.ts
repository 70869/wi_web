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
    
    console.log('Debug: Server ID:', serverId);
    console.log('Debug: Bot token present:', !!botToken);
    console.log('Debug: Bot token length:', botToken?.length);
    
    if (!botToken) {
      console.warn('Discord bot token not configured - returning fallback data');
      return NextResponse.json({
        memberCount: 500,
        onlineCount: 24,
        serverName: 'wiredin',
        serverIcon: null,
        fallback: true
      });
    }

    console.log('Debug: Attempting Discord API call...');
    
    // Fetch server information from Discord API
    const response = await fetch(`https://discord.com/api/v10/guilds/${serverId}?with_counts=true`, {
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Debug: Discord API response status:', response.status);
    console.log('Debug: Discord API response ok:', response.ok);

    if (!response.ok) {
      console.error(`Discord API error: ${response.status} - ${response.statusText}`);
      
      // Return fallback data instead of throwing error
      return NextResponse.json({
        memberCount: 500,
        onlineCount: 24,
        serverName: 'wiredin',
        serverIcon: null,
        fallback: true,
        error: `Discord API error: ${response.status}`
      });
    }

    const guildData = await response.json();
    console.log('Debug: Discord API response data:', guildData);

    return NextResponse.json({
      memberCount: guildData.approximate_member_count || 0,
      onlineCount: guildData.approximate_presence_count || 0,
      serverName: guildData.name,
      serverIcon: guildData.icon,
    });

  } catch (error) {
    console.error('Error fetching Discord stats:', error);
    
    // Return fallback data instead of error response
    return NextResponse.json({
      memberCount: 500,
      onlineCount: 24,
      serverName: 'wiredin',
      serverIcon: null,
      fallback: true,
      error: 'Failed to fetch Discord stats'
    });
  }
} 