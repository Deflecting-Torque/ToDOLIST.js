let todo=[];
let req= prompt("Please enter your rquest");
while(true){
    if(req=="quit"){
        console.log("quitting the app");
        break;
    }
    else if(req=="list"){
        console.log("-------");
        for(let i=0;i<todo.length;i++){
            console.log (i,todo[i]);
        }
        console.log("--------");
    }else if(req=="add"){
        let task=prompt("please enter the task");
        todo.push(task);
        console.log("task added");

    }else if(req=="delete"){
        let ind= prompt("Mention index of the task you want ot delete");
        todo.splice(ind,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req=prompt("Please enter your request");
}