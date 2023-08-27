/// <reference types="vite/client" />

interface ImportMetaENV {
    readonly VITE_DROPBOX_CLIENT_ID: string;
    readonly VITE_DROPBOX_CLIENT_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}