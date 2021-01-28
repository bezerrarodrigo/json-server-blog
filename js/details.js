// Query params
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".detail");
const btnDelete = document.querySelector(".btn-delete");

window.addEventListener("DOMContentLoaded", () => renderPost());

const renderPost = async () => {
  const uri = `http://localhost:8000/posts/${id}`;
  const res = await fetch(uri);
  const post = await res.json();
  console.log(post);

  //DOM template
  let template = `
    <div class="post-detail">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p><strong>${post.likes}</strong> Likes</p>
    </div>
  `;

  //DOM Render
  container.innerHTML = template;
};

const deleteHandler = async e => {
  const uri = `http://localhost:8000/posts/${id}`;
  const res = await fetch(uri, {
    method: "DELETE",
  });
  window.location.replace("/");
};

btnDelete.addEventListener("click", deleteHandler);
