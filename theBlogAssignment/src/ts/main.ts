import "./../scss/style.scss";
import { createHtml, postList } from "./createPost";

createHtml(postList);

const searchPosts = (searchTerm: string): void => {
  const searchedPosts = postList.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.ingredients.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );  
  createHtml(searchedPosts);
};
 
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
searchInput.addEventListener("keydown", () => {
    //e.preventDefault();
  searchPosts(searchInput.value);
});

