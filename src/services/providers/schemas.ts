import z from "zod";

const GenderEnum = z.enum(["male", "female", "other"]);

export const getProviderSchema = () => {
  return z.object({
    id: z.number(),
    name: z.string(),
    email: z.email(),
    phone: z.string(),
    gender: GenderEnum,
    about: z.string().nullable(),
    languages: z.array(z.string()).nullable(),
    profile_pic: z.string().nullable(),
    specialty: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
      }),
    ),
    clinics: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        address: z.string().nullable(),
        city: z.string().nullable(),
        state: z.string().nullable(),
        zip_code: z.string().nullable(),
        phone: z.string().nullable(),
      }),
    ),
    is_favorited: z.boolean(),
  });
};

export const paginationMetaSchema = z.object({
  meta: z.object({
    total: z.number(),
    perPage: z.number(),
    lastPage: z.number(),
  }),
  data: getProviderSchema(),
});
