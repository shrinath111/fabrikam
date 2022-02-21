
let counter = 0;

function addtweet() {
    let parent = document.querySelector("#parent");
    let prevChildTags = parent.innerHTML;
    let subName = document.querySelector("#subName").value;
    let queStory = document.querySelector("#queStory").value;

    counter += 1;
    let tweetImage = 300 + counter;
    let newChild = `<div class="col-12 col-md-12">
    <div class="card">
        <div class="card-header text-capitalize h3">${subName}</div>
        <div class="card-body p-2">
           <div class="my-2"style="height:100px; overflow-y: auto">
         ${queStory}
           </div>
        </div>
       
         </div>

     </div> `;
    parent.innerHTML = prevChildTags + newChild;

    document.querySelector("#subName").value = "";
    document.querySelector("#queStory").value = "";
}