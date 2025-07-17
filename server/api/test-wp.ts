export default defineEventHandler(async (event) => {
    try {
        return await $fetch('https://portaldj.pro/wp-json/wp/v2/posts?per_page=5&orderby=date&order=desc', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept': 'application/json',
                'Origin': 'https://link.pdj.cl',
                'Referer': 'https://link.pdj.cl',
                'Host': 'portaldj.pro'
            }
        });
    } catch (err: any) {
        throw createError({ statusCode: err?.response?.status || 500, statusMessage: err?.message || 'Unknown error' });
    }
});