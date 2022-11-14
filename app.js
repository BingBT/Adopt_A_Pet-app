import { useEffect, createContext, useState } from "reat";

const AuthContext = createContext();
function MyApp({Component, pageProps}) {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const fetchAccessToken = async () => {
           const res = await fetch("/api/oauth-token");
           console.log(await res.json());
        };
        fetchAccessToken();
    }, []);

    return (
        <AuthContext.Provider>
            <Component{...pageProps} />
        </AuthContext.Provider>
    );
}
export default MyApp;

