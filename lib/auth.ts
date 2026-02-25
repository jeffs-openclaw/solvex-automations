import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: process.env.DATABASE_URL || "file:./data/auth.db",
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    },
  },
  secret: process.env.BETTER_AUTH_SECRET || "secret-for-dev-only-change-in-production",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  plugins: [nextCookies()],
});
