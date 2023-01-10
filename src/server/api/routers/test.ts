import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const testRouter1 = createTRPCRouter({
    two: publicProcedure
        .input(
            z.object({
                text: z
                    .string()
                    .min(5, { message: 'must be 5 or more char of length' }),
            })
        )
        .query(({ input }) => {
            return {
                testString: `Please do test to: ${input?.text}`,
            };
        }),
});
