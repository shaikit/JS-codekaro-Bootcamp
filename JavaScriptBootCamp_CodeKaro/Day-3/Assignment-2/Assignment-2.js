var count =0;
const button = document.getElementById("counterButton")
const countValue = document.getElementById("count")
function updateCount(){
    count++;
    countValue.textContent = count
}

button.onclick = updateCount;