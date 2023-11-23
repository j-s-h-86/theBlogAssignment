import { Posts } from "./models/Posts";

const blueSky = new Posts("Blå himel", "idag är himlen blå");
const redSky = new Posts("Röd himel", "idag är himlen röd");

let postList = [blueSky, redSky];

const postsContainer = document.getElementById("blogPosts");

export const createHtml = () => {
  if (postsContainer) {
    postsContainer.innerHTML = "";
  }

  for (let i = 0; i < postList.length; i++) {
    const postContainer = document.createElement("article");
    postsContainer?.appendChild(postContainer);
    console.log("Hej");

    const title = document.createElement("h3");
    title.innerHTML = postList[i].title;
    postContainer.appendChild(title);

    const description = document.createElement("span");
    description.innerHTML = postList[i].blogContent;
    postContainer.appendChild(description);

    const addFavorite = document.createElement("button");
    addFavorite.innerHTML = "Favorit";
    postContainer.appendChild(addFavorite);
  }
};

document.getElementById("createPostForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewPost();
});

const addNewPost = () => {
  const userTitleInput = (
    document.getElementById("titleInput") as HTMLInputElement
  ).value;

  const userBlogContent = (
    document.getElementById("blogContent") as HTMLTextAreaElement
  ).value;

  if (userTitleInput.length < 1) {
    return;
  }

  (document.getElementById("titleInput") as HTMLInputElement).value = "";

  (document.getElementById("blogContent") as HTMLTextAreaElement).value = "";

  const newPost = new Posts(`${userTitleInput}`, `${userBlogContent}`);
  postList.push(newPost);
  createHtml();
};
