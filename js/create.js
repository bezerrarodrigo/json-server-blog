const form = document.querySelector("form");

const formHandler = async e => {
  e.preventDefault();

  const newBlog = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  const uri = "http://localhost:8000/posts";
  await fetch(uri, {
    method: "POST",
    body: JSON.stringify(newBlog),
    headers: { "Content-Type": "application/json" },
  });

  window.location.replace("/");
};

form.addEventListener("submit", formHandler);
