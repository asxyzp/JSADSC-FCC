//Implementation of Queue
//By asxyzp (Aashish Loknath Panigrahi)
/*
    Function : addQueueElement(queue,value)
    Functionality : Adding queue element to the end of the array
    Parameters : queue : Array which store the values of queue
                 value : Value which will be pushed into the queue
    Return value : NONE 
*/
function addQueueElement(queue,value){
    queue.push(value);
}
/*
    Function : removeQueueElement(queue,value)
    Functionality : Removing queue element from the beginning of the array
    Parameters : queue : Array which store the values of queue
    Return value : Removed value
*/
function removeQueueElement(queue){
    return queue.shift();
}
var queue1 = [];
addQueueElement(queue1,1);  console.log(queue1);
addQueueElement(queue1,2);  console.log(queue1);
addQueueElement(queue1,3);  console.log(queue1);
addQueueElement(queue1,4);  console.log(queue1);
addQueueElement(queue1,5);  console.log(queue1);
console.log(removeQueueElement(queue1),queue1);
console.log(removeQueueElement(queue1),queue1);
console.log(removeQueueElement(queue1),queue1);
console.log(removeQueueElement(queue1),queue1);
console.log(removeQueueElement(queue1),queue1);
console.log(removeQueueElement(queue1),queue1);