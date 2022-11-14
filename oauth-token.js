const petFinderKey = "TIBU8ZYTO5zpQmjVPYTXXihcit6xtVkwwXPwUAlnSS2N9BwHII";
const petFinderSecret = "0ndY2zXKyft2cjHXPHmVejhiHYZZn2s8vLIzqXWq";
export default async (req, res) => {
    const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            params.append("client_id", petFinderKey);
            params.append("client_secret", petFinderSecret);
            const petfinderRes = await fetch(
                "https://api.petfinder.com/v2/oauth2/token",
                {
                    method: "POST",
                    body: params
                }
            );
            const data = await petfinderRes.json();
            res.send(data);
        };