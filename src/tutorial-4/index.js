
    const btn = window.document.querySelector(".btn-add");
    const input = window.document.querySelector(".input");
    const list = window.document.querySelector(".list");
    let task = [];

    render();

    btn.addEventListener(
        "click",
        function handleAdd(){
            console.log("handleAdd()");
            console.log(input.value);
            task.push(input.value);
            render();
            input.value = "";
        }
    );

    function handleRemove(index){
        console.log("handleRemove()");
        console.log(index);
        task.splice(index, 1);
        render();
    }

    function render(){
        list.innerHTML = "";
        task.forEach((item, index) => {
            list.innerHTML += `
                <li>${item}</li>
                <button onclick="handleRemove(${index})";>Delete</button>
            `;
    });
    }
