import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      port: process.env.PORT || 9000,        // ✅ Add this line
      host: "0.0.0.0",                       // ✅ Add this line
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: [
    // ✅ commerce modules
    {
      resolve: "@medusajs/medusa/product"
    },
    {
      resolve: "@medusajs/medusa/cart"
    },
    {
      resolve: "@medusajs/medusa/order"
    },
    {
      resolve: "@medusajs/medusa/payment"
    },
    {
      resolve: "@medusajs/medusa/pricing"
    },
    {
      resolve: "@medusajs/medusa/inventory"
    },
    {
      resolve: "@medusajs/medusa/customer"
    },
    {
      resolve: "@medusajs/medusa/notification"
    },
    // ✅ fulfillment module with providers configured
    {
      resolve: "@medusajs/medusa/fulfillment",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/fulfillment-manual",
            id: "manual",
          },
        ],
      },
    },
    // ❌ admin panel disabled
    // admin: false,
  ],
})
