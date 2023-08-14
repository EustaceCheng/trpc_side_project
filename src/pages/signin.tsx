import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

import { trpc } from '@/utils/trpc';
import Link from 'next/link';

const SignIn: NextPage = () => {
    console.log('signin');
    const { data: sessionData } = useSession();

    const { data: secretMessage } = trpc.example.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined },
    );
    return (
        <>
            <div>
                <p>
                    {sessionData && (
                        <>
                            <span>Logged in as {sessionData.user?.name}</span>
                            <Link href="/note/list">
                                <h5 className="text-1xl font-bold">list</h5>
                            </Link>
                        </>
                    )}
                    {secretMessage && <span> - {secretMessage}</span>}
                </p>
                <button onClick={sessionData ? () => void signOut() : () => void signIn()}>
                    {sessionData ? 'Sign out' : 'Sign in'}
                </button>
            </div>
        </>
    );
};

export default SignIn;
