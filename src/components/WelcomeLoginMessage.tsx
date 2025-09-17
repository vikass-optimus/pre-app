
import type { FC } from 'react';

type WelcomeLoginMessageProps = {
    isLoggedIn: boolean;
    user?: {
        name: string, 
        type: 'admin' | 'moderator' | 'guest'
    },
    
};

const WelcomeLoginMessage: FC<WelcomeLoginMessageProps> = ({isLoggedIn, user}) => {
    if(user?.type === 'moderator') {
        return <h2>Ask for admin access</h2>;
    }else if(user?.type === 'guest') {
        return <h2>No Access</h2>;
    }
    return (
        <div className="welcome-login-message">
            {isLoggedIn ? (<h2>Welcome back, {user?.name}!</h2>) : (<h2>Welcome Guest.</h2>)}
            <p>You are logged in as: {user?.type}</p>
        </div>
    );
};

export default WelcomeLoginMessage;
