const button = document.getElementById("add-button");
button.addEventListener("click", () => {
  const input = document.getElementById("new-todo");
  
  const li = document.createElement("li");//タグを作成
  li.innerText = input.value;//valueはinput内のテキスト内容。
  //liのテキスト内容 = inputに書かれたテキスト内容になるっていう話。
  
  const doneButton = document.createElement("button");//タグを作成
  doneButton.innerText = "done";//テキスト内容はdone
  li.appendChild(doneButton);//liの子要素に追加
  doneButton.addEventListener("click", () => {
    const li = doneButton.closest("li")//近いliを取ってきた
    li.classList.add("done")
  });
  
  const ul = document.querySelector("ul");//ページ上の最初のul要素を取得
  ul.appendChild(li);//ulの子要素に追加
});

// querySelectorとgetElementByIdの違いがわからん