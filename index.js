// Import stylesheets
// import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// ppDiv.innerHTML = `<h1>JS Starter</h1>`;
/*const testerObject = {
  func1:function(){
    console.log("func1",this);
  },
  func2: (b) => {
    var a=b;
    console.log("func2",this);
    return this;
  },
}
testerObject.func1();
testerObject.func2(2);*/

const fetchData = async ()=>{
  const resp = await fetch('https://api.github.com');

  const data = await resp.json();
  console.log(data);
}
fetchData();