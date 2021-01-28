window.addEventListener("DOMContentLoaded", () => {
  renderPosts();
});

const container = document.querySelector(".blogs");
const form = document.querySelector(".search");

const searchHandler = e => {
  e.preventDefault();
  renderPosts(form.term.value);
};

form.addEventListener("submit", searchHandler);

const renderPosts = async searchTerm => {
  let uri = "http://localhost:8000/posts?_sort=likes&_order=desc";

  //search
  if (searchTerm) {
    uri += `&q=${searchTerm}`;
  }

  const res = await fetch(uri);
  const posts = await res.json();
  // console.log(posts);

  //DOM template
  let template = "";
  posts.forEach(post => {
    template += `
      <ul>
        <li class="post">
          <h2>${post.title}</h2>
          <p><small>${post.likes} likes</small></p>
          <p>${post.body.slice(0, 200)}</p>
          <a href="/details.html?id=${post.id}">read more...</a>
        </li>
      </ul>
    `;
  });

  //DOM render
  container.innerHTML = template;
};
