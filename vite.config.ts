import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        dts({
            include: ["src/**/*"],
            outDir: "dist",
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "RiotPlanHistory",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
        },
        rollupOptions: {
            external: [
                "@riotprompt/riotplan",
                "node:fs/promises",
                "node:path",
                "node:crypto",
            ],
        },
        outDir: "dist",
        emptyOutDir: true,
    },
});

