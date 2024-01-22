import { useEffect } from "react";

export default function Logout() {
    useEffect(() => {
        window.location.href = 'https://accounts.spotify.com/logout';
    }, []);

    return (<div>Log out...</div>);
}
