import { Button } from '@mui/material';
import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const SignIn: NextPage = () => {
    const { data: sessionData } = useSession();

    return (
        <>
            <p>
                {sessionData && (
                    <>
                        <span>Logged in as {sessionData.user?.name}</span>
                        <br />
                        <Link href="/note/list">
                            <Button variant="contained">list</Button>
                        </Link>
                    </>
                )}
            </p>
            <Button
                variant="contained"
                onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                {sessionData ? 'Sign out' : 'Sign in'}
            </Button>
        </>
    );
};

export default SignIn;
