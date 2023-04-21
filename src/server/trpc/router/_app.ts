import { router } from '../trpc';
import { notesRouter } from './mynotes';
import { exampleRouter } from "./example";



export const appRouter = router({
    mynotes: notesRouter,
    example: exampleRouter,

});

// export type definition of API
export type AppRouter = typeof appRouter;
