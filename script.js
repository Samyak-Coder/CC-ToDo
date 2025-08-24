
let tasks = [];




const addTask =()=> { //what is arrow func
    const taskInput = document.getElementById("input-box")
    const text = taskInput.value//wth is trim
    
    if(text){
        tasks.push({text: text, completed: false})
        
        updateTaskList()
    }
    console.log(tasks)

}

const toggleTaskComp = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    console.log(tasks)
}

const updateTaskList =()=> {
    const taskList = document.getElementById('list-container')
    taskList.innerHTML = ''

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');

        listItem.addEventListener('change', ()=>toggleTaskComp(index))

        listItem.innerHTML=` 
        <div class = "taskItem">
            <div class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="checkbox" ${task.completed ?'checked' :''} />
                <p> ${task.text} </p>
            </div>
            <div class = "icon">
                <img src="./bin.png" onclick="deleteTask${index}">
            </div>
        </div>
        `;

        
        taskList.append(listItem);
   
    })
}


document.getElementById("newTask").addEventListener("click", function(e){
    e.preventDefault()

    addTask()
})

