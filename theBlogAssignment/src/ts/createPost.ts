import { Posts } from "./models/Posts";

const blueSky = new Posts("Blå himel", "idag är himlen blå");
const redSky = new Posts("Röd himel", "idag är himlen röd");

let postList = [blueSky, redSky];

const postsContainer = document.getElementById("blogPosts");

export const createHtml = () => {
  for (let i = 0; i < postList.length; i++) {
    const postContainer = document.createElement("article");
    postsContainer?.appendChild(postContainer);
    console.log("Hej");
    
    const title = document.createElement('h3');
    title.innerHTML = postList[i].title;
    postContainer.appendChild(title);

    const description = document.createElement('span');
    description.innerHTML = postList[i].blogContent;
    postContainer.appendChild(description);

    const addFavorite = document.createElement('button');
    addFavorite.innerHTML = 'Favorit';
    postContainer.appendChild(addFavorite);

  }
};


