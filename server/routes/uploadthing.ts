import type { H3Event } from 'h3';

import type { FileRouter } from 'uploadthing/h3';
import { createUploadthing } from 'uploadthing/h3';
import { z } from 'zod';

const f = createUploadthing();

const auth = (ev: H3Event) => ({ id: 'fakeId' });

export const uploadRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input;
      return { configId };
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
