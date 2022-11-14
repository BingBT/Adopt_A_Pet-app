import ResultPane from "../result-pane";
import { useEffect, useState, useContext } from "react";
import { authContext } from ",/MyApp";

export default () => {
    const [results, setResults] = useState(null);
    const accessToken = useContext(authContext);
    useEffect(() => {
        if (accessToken === null) return;
        const fetchPets = async () => {
            const petResults = await fetch("https://api.petfinder.com/v2/animals?type=Cat&type=Dog", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const json = await petResults.json();
            setResults(json.animals);
        };
        fetchPets();
    }, [accessToken]);
    if (results === null) return null;
    return <ResultPane results={results} />;
};