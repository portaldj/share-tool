export default defineEventHandler(async (event) => {
    const res = await fetch('https://portaldj.pro/wp-json/wp/v2/posts?per_page=5&orderby=date&order=desc', {
        headers: {
            'User-Agent': 'PortalDJ NuxtApp/1.0'
        }
    });

    if (!res.ok) {
        throw createError({ statusCode: res.status, statusMessage: res.statusText });
    }

    return await res.json();
});