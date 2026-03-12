import { z } from "zod";

export const WebsiteSchema = z.object({
  domain: z.string().optional(),
  name: z.string(),
  id: z.string(),
});

type Website = z.infer<typeof WebsiteSchema>;

type MockDb = {
  websites: Website[];
};

export const mockDb: MockDb = {
  websites: [
    {
      domain: "website1.com",
      name: "Website 1",
      id: "1",
    },
    {
      domain: "website2.com",
      name: "Website 2",
      id: "2",
    },
  ],
};
