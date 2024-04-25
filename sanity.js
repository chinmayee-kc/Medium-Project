import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient,
} from "next-sanity";

export const config ={
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion :  '2024-04-24',
    useCdn: process.env.NODE_ENV=== "production",
};