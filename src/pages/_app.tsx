import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { trpc } from '../utils/trpc';

import '../styles/globals.css';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Component {...pageProps} />
            </StyledEngineProvider>
        </SessionProvider>
    );
};
export default trpc.withTRPC(MyApp);
