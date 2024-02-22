import { useState } from "react";
import { getToken } from "../../services/apiService";

const useAuthentication = () => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const login = async ( email, password) => {
        try {
            setLoading(true);
            const token = await getToken(email, password);
            if (token){
                console.log('token', token);
                return token;
            } else {
                setError('Token inválido');
            }
        } catch (error) {
            setError('Erro ao obter o token')
        } finally {
            setLoading(false);
        }
    }
    return { loading, error, login };
}

export default useAuthentication;