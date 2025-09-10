import { defineCollection, z, type ImageFunction } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      coverImage: image().superRefine((img, ctx) => {
        if (img.format !== "svg") {
          if (img.width < 1080) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message:
                "Okładka dla obrazków rastrowych (JPG, PNG, itp.) musi mieć co najmniej 1080px szerokości.",
            });
          }
        }
      }),

      coverAlt: z.string(),
    }),
});

export const collections = { blog: blogCollection };
