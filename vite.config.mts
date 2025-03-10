import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { ConfigEnv, defineConfig } from "vite";
import reactScanPlugin from "./plugins/react-scan-plugin";

export default defineConfig((configEnv: ConfigEnv) => ({
    plugins: [react(), reactScanPlugin(configEnv.mode), tailwindcss()],
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "mori-components",
            fileName: (format) => `mori-components.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        sourcemap: true,
    },
    css: {
        modules: {
            localsConvention: "camelCaseOnly",
        },
    },
}));
