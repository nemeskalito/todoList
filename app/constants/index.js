"use client";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlcmlrQGV4YW1wbGUuY29tIiwiaWQiOjE5MjQsImlhdCI6MTc2MDI3OTU3OH0.5IEVCqnAI4mKHiHJ6_VK2m3zM8Rfq3XvnQLCevQjRWs";

export const instance = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
