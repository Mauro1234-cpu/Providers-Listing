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

export const paginatedResponse = () => {
  return z.object({
    links: z.object({
      first: z.string().nullable(),
      last: z.string().nullable(),
      prev: z.string().nullable(),
      next: z.string().nullable(),
    }),
    meta: z.object({
      current_page: z.number().nullable(),
      from: z.number().nullable(),
      last_page: z.number().nullable(),
      links: z.object({
        url: z.string().nullable(),
        label: z.string().nullable(),
        page: z.number().nullable(),
        active: z.boolean(),
      }),
      path: z.string().nullable(),
      per_page: z.number().nullable(),
      to: z.number().nullable(),
      total: z.number().nullable(),
    }),
    data: z.array(providerSchema()),
  });
};
