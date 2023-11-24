import { createHtml, postList } from "./createPost";

export function changeFavorite(i: number) {
        postList[i].favorite = !postList[i].favorite
        createHtml();
    };

