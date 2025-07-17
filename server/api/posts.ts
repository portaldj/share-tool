export default defineEventHandler(async (event) => {
    const res = await fetch('https://portaldj.pro/wp-json/wp/v2/posts?per_page=5&orderby=date&order=desc', {
        credentials: 'include',
        headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; NuxtBot/1.0; +https://link.pdj.cl)',
            'Accept': 'application/json'
        }
    });

    if (!res.ok) {
        throw createError({ statusCode: res.status, statusMessage: res.statusText });
    }

    return await res.json();
});