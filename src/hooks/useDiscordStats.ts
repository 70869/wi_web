import { useState, useEffect } from 'react';

interface DiscordStats {
    onlineCount: number;
    loading: boolean;
    error?: boolean;
}

export const useDiscordStats = (serverId: string) => {
    const [stats, setStats] = useState<DiscordStats>({
        onlineCount: 0,
        loading: true
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`/api/discord-stats?serverId=${serverId}`);

                if (response.ok) {
                    const data = await response.json();
                    setStats({
                        onlineCount: data.onlineCount || 0,
                        loading: false
                    });
                } else {
                    throw new Error('Failed to fetch Discord stats');
                }
            } catch (error) {
                console.error('Error fetching Discord stats:', error);
                setStats({
                    onlineCount: 0,
                    loading: false,
                    error: true
                });
            }
        };

        fetchStats();
        // Refresh stats every 5 minutes
        const interval = setInterval(fetchStats, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, [serverId]);

    return stats;
};
