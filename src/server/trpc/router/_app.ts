import { router } from '../trpc';
import { notesRouter } from './mynotes';

export const appRouter = router({
    mynotes: notesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
