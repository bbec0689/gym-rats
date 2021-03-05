//upvote triangle query

for (const btn of document.querySelectorAll(".vote")) {
  btn.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("on");
  });
}

//API call to add upvote

async function upvoteHandler(event) {
  event.preventDefault();

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        user_upvoted_post,
        post_id,
        user_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".post").addEventListener(".vote", upvoteHandler);
