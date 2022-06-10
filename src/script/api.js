import axios from 'axios';

async function getPost(id) {
  let articles = '';

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=10');

  data.forEach(post => {
    articles += `
      <div>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
      </div>
    `
    console.log(articles)
  });

  document.querySelector('#post').innerHTML = articles;
}

console.log('teste')
getPost();

