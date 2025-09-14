"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || "development", process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUU7QUFFakUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBRTdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDckMsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVztZQUNsQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXO1lBQ2xDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVU7WUFDaEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLGFBQWE7WUFDbEQsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWE7U0FDekQ7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLHFCQUFxQjtRQUNyQjtZQUNFLE9BQU8sRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNFLE9BQU8sRUFBRSx1QkFBdUI7U0FDakM7UUFDRDtZQUNFLE9BQU8sRUFBRSx3QkFBd0I7U0FDbEM7UUFDRDtZQUNFLE9BQU8sRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNFLE9BQU8sRUFBRSwwQkFBMEI7U0FDcEM7UUFDRDtZQUNFLE9BQU8sRUFBRSw0QkFBNEI7U0FDdEM7UUFDRDtZQUNFLE9BQU8sRUFBRSwyQkFBMkI7U0FDckM7UUFDRDtZQUNFLE9BQU8sRUFBRSwrQkFBK0I7U0FDekM7UUFDRCxpREFBaUQ7UUFDakQ7WUFDRSxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLHFDQUFxQzt3QkFDOUMsRUFBRSxFQUFFLFFBQVE7cUJBQ2I7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QseUJBQXlCO1FBQ3pCLGdCQUFnQjtLQUNqQjtDQUNGLENBQUMsQ0FBQSJ9