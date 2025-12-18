const styles = `
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:1px solid red;
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  margin: 10px;
`;

const posts = [
  { title: "Post1", name: "surafel mengist" },
  { title: "Post2", name: "samuel mengist" },
  { title: "Post3", name: "Aster mengist" },
  { title: "Post4", name: "Ethiopia" },
  { title: "Post5", name: "Azaria" },
];

function post() {
  setTimeout(() => {
    let output = "";

    posts.forEach(post => {
      output += `${post.title}<br/>`;
      console.log("The async is : " + post.title);
    });

    document.body.innerHTML = `
      <h1 style="${styles}">
        ${output}
      </h1>
    `;
  }, 1000);
}

post();
