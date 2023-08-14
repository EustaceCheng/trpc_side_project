import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';

export const exampleRouter = router({
    getSecretMessage: protectedProcedure.query(() => {
        return 'you can now see this secret message!';
    }),
});
