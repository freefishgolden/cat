const body = JSON.parse($response.body);

body.data.isPremium = true;
body.data.isFirstSignIn = false;
body.ok = true;

$done({ body: JSON.stringify(body) });
