import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist", // write build output to root
        emptyOutDir: false, // prevents deleting everything else
    },
});
