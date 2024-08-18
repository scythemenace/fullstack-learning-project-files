const z = require("zod");

const cardType = z.object({
    name: z.string().min(1),
    description: z.string().min(5),
    socialmedia: z.object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),        
    }),
    interests: z.object()
})

