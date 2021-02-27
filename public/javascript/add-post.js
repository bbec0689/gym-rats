async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;
  const time = document.querySelector('input[name="post-time"]').value;
  const url = document.querySelector('input[name="post-url"]').value;
  const category = document.querySelector('input[name="post-category"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      category,
      time,
      url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(category);

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
