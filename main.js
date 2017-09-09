theBasic = document.querySelector(".basics-info");
body = document.querySelector("body");
nameHeading = document.querySelector(".name-heading");
story = document.querySelector(".story")
profileImg = document.querySelector("img");

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/simsaini");
req.addEventListener("load", gitListener);
req.send();

function gitListener() {
    let data = JSON.parse(this.responseText);
    let heading = document.createElement("p");
    heading.innerHTML = `${data.name}`;
    nameHeading.appendChild(heading);

    let list = document.createElement("ul");
    theBasic.appendChild(list);
    let li1 = document.createElement("li");
    li1.innerHTML = `<span class = "label"> Name: </span> ${data.name}`;
    let li2 = document.createElement("li");
    li2.innerHTML = `<span class = "label"> GitHub URL: </span> <a href = "${data.html_url}">${data.html_url}</a>`;
    let li3 = document.createElement("li");
    li3.innerHTML = `<span class = "label"> Email: </span> ${data.login}@gmail.com`;
    let li4 = document.createElement("li");
    li4.innerHTML = `<span class = "label"> Company: </span> ${data.company}`;
    let li5 = document.createElement("li");
    li5.innerHTML = `<span class = "label"> Website: </span> <a href = "${data.blog}" >${data.blog}</a>`;

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);
    list.appendChild(li4);
    list.appendChild(li5);

    let p = document.createElement("p")
    p.innerHTML = `${data.bio}`;
    story.appendChild(p);

    //profileImg.setAttribute("src", "https://avatars0.githubusercontent.com/u/29907444?v=4")
}
