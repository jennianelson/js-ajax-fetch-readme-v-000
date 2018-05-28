const app = "I don't do much.";
const token = '3d03e0fc6ec76d6a1fbb1173f1c94e325e539bcd'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));