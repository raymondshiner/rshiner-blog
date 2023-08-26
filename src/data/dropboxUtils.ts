/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropbox } from "dropbox";

const ACCESS_TOKEN = "sl.Bk59HHupp4DPHMfQIOyld-1LpBRqscWrOtr6ZYxW4TQx_QBk3yKpkMWf3mUKxsXmJITnhd4L4lvbshZ2mbJIYtpxZoTlw0egeDS9hZfnRwYwcm95uKM2GhVdp4do9xnovBGysbjMuUAO";
const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            if (event.target && event.target.result) {
                const text = event.target.result as string;
                resolve(text);
            } else {
                reject(new Error("Failed to read the file"));
            }
        };

        reader.onerror = (event) => {
            reject(event.target?.error || new Error("Error reading the file"));
        };

        reader.readAsText(file);
    });
}


export const downloadBlogPostsFromDropbox = async () => {
    const fileIds: void | string[] = await dbx.filesListFolder({ path: '' })
    .then(res => {
        const result = res.result.entries.map((entry: any) => entry.id as string);
        return result 
    })
    .catch(e => console.log(e));

    const fileContents: string[] = [];

    for (const fileId of fileIds as string[]) {
        const downloadPath = `${fileId}`; // Construct the file path

        try {
            const res = await dbx.filesDownload({ path: downloadPath });
            const fileBlob = (res.result as any).fileBlob;
            const file = new File([fileBlob], res.result.name);

            const textContent = await readFileAsText(file);
            fileContents.push(textContent);
        } 
        
        catch (error) {
            console.error("Error downloading or reading file:", error);
        }
    }

    return fileContents
};
