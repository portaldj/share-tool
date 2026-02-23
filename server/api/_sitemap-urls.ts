export default defineSitemapEventHandler(async () => {
    try {
        const usernames = await $fetch<string[]>('https://my.portaldj.pro/api/profiles/usernames');

        return usernames.map((username) => {
            return {
                loc: `/${username}`,
                lastmod: new Date(),
                changefreq: 'daily',
                priority: 0.8
            };
        });
    } catch (error) {
        console.error('Error fetching profiles mapping for sitemap:', error);
        return [];
    }
});
