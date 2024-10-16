import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import instance from '../axios';

const GoogleAuth = () => {

    const handleGoogle = async (response: any) => {

        const idToken = response.credential;

        try {

            const res = await instance.post('/auth/google', { token: idToken });

            const token = res.data.token;
            localStorage.setItem('token', token);

        } catch (error) {
            console.log('google authentication error', error);
        }

    }

    const handleGoogleFail = (error: any) => {
        console.log(error);
    }


    return (
        <div>
            <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
                <GoogleLogin onSuccess={handleGoogle} onError={() => handleGoogleFail} />
            </GoogleOAuthProvider>
        </div>
    )
}

export default GoogleAuth
