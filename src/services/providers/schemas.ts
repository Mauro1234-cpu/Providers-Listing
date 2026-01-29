import z from "zod";

const GenderEnum = z.enum(["male", "female", "other"]);

export const providerSchema = () => {
  return z.object({
    id: z.number(),
    name: z.string(),
    email: z.email(),
    phone: z.string(),
    gender: GenderEnum,
    about: z.string().nullable(),
    languages: z.array(z.string()).nullable(),
    profilePic: z.string().nullable(),
    specialty: z.object({
      id: z.number(),
      name: z.string(),
    }),
    clinics: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        address: z.string().nullable(),
        city: z.string().nullable(),
        state: z.string().nullable(),
        zipCode: z.string().nullable(),
        phone: z.string().nullable(),
      }),
    ),
    isFavorited: z.boolean(),
  });
};
