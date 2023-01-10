import { createTRPCRouter } from './trpc';
import { testRouter1 } from './routers/test';

/**
 * Thi s is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    test: testRouter1,
});

// export type definition of API
export type AppRouter = typeof appRouter;
