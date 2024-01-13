let btn = document.getElementById("btn")
let search = document.getElementById("search")
let text = document.getElementById("para")

let ren = document.getElementById("ren")
function f1() {
    let val = search.value;
    let val1 = val.toString();
    val1.toLowerCase();
    text.remove();


    switch (val1) {
        case "vector":
            ren.innerHTML = `<p>Vectors are dynamic arrays , which resize itself automatically 
            <ul>
                     <h3>Initialzation  : </h3>
                    <i> vector&ltdatatype&gtname(size , elemen_To_Fill)</i>
                     
                    <li>.begin() - iterator to first element of vector</li>
                    <li>.end() - iterator to last element of vector</li>
                    <li>.rbegin() - iterator to last element of vector</li>
                    <li>.rend() - iterator to first element of vector</li>

                    <h3>Capcity : </h3>
                    <li>.size() - max  capcity  of vector</li>
                    <li>.max_size() - max element vector can hold</li>
                    <li>.resize(n) - resize vector to n' elements </li>
                    <li>.empty() -returns vector is empty or not</li>
                    <li>.reverse() - reverse  vector</li>

                    <h3>Access : </h3>
                    <li>.at() - return element at given position in   vector</li>
                    <li>.front() - return reference to first elemnt  vector</li>
                    <li>.back() - return reference to last elemnt  vector</li>

            </ul>
            </p>`
            break;
        case "string":
            ren.innerHTML = '<p><h1>string are good </h1></p>'
            break;
        case "stack":
            ren.innerHTML = '<p><h1>stack are good </h1></p>'
            break;
        case "queue":
            ren.innerHTML = '<p><h1>queue are good </h1></p>'
            break;
        case "heaps":
            ren.innerHTML = '<p><h1>heaps are good </h1></p>'
            break;
        case "unorderd_map":
            break;
        case "maps":
            break;
        case "search":
            break;
        case "sort":
            break;
        default:
            ren.innerHTML = '<h2>No matching input</h2>'
    }

}



btn.addEventListener('click', f1);



// text.remove();
// ren.innerHTML = '<p>t</p><ul><li>one</li><li>pratik</li></ul>';