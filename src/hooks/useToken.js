import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(()=>{
        const email = user?.user?.email;
        const img = user?.user?.photoURL;
        const name = user?.user?.displayName;

        if(email){
            fetch('http://localhost:5000/login', {
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json',
                },
                body : JSON.stringify({name, email, img})
            })
            .then(res => res.json())
            .then(data => {
                setToken(data.token);
                localStorage.setItem('access-token', data.token);
                return;
            })
        }

    }, [user]);

    console.log(token)
    return [token];
};

export default useToken;