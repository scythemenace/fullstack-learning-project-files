const z = require("zod");

const cardType = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  socialmedia: z.array(z.record(z.any())),
  interests: z.array(z.string()),
});

const idType = z.object({
  id: z.string(),
});

module.exports = { cardType, idType };
