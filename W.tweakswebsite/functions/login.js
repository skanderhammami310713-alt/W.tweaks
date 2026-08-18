export async function onRequest(context) {
    const CLIENT_ID = '1539275680716554340';
    const REDIRECT_URI = 'https://your-domain.com/functions/callback'; // Where Discord returns the user

    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify`;

    return Response.redirect(discordAuthUrl, 302);
}