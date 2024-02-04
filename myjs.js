class node {
  next
  prv
  data
    constructor(data) {
        this.data = data
    }

}

class linkedList {
    head = null
    tail  = null

    insertFirst(data){
        let newNode = new node(data)
        if (this.head ===null){
            this.head  = newNode
            this.tail = newNode
            return
        }

        newNode.next = this.head
        this.head.prv = newNode
        this.head = newNode

        }
     
        insertLast(data){
        let newNode = new node(data)
        if (this.head ===null){
            this.head  = newNode
            this.tail = newNode

            return
        }

        newNode.prv = this.tail
        this.tail.next = newNode
        this.tail = newNode

        }



    deleteFirst(){
        if (this.head === null){
            return
        }
        if (this.head ===this.tail){
            this.head =  null
            this.tail = null
            return
        }
        this.head = this.head.next
        this.head.prv = null

    }
   
    deleteLast(){
        if (this.head ===null){
            return
        }
        if (this.head ===this.tail){
            this.head =null
            this.tail = null
            return;
        }
        this.tail = this.tail.prv
        this.tail.next = null
    }

    display(){
        let linkedlistdiv = document.querySelector(".linkedList")
        linkedlistdiv.innerHTML = ''
        let cur = this.head
        for (;cur!=null;cur=cur.next){
            console.log(cur.data)
            this.nodes(cur , this.tail)
        }
    }
    nodes(node , tail){


            let gn = document.createElement("div")
            gn.classList.add("node")

            gn.innerHTML = node.data

            let arr = document.createElement("div")
            arr.classList.add("arrow")
            arr.innerHTML="↔"

            let linkedlistdiv = document.querySelector(".linkedList")


            linkedlistdiv.appendChild(gn)
            console.log(tail)
            console.log(node)
            if (!(node ===tail)) {
                linkedlistdiv.appendChild(arr)
            }

    }





}

class stack{
    lists = new linkedList()
    size = 0
    push(data){
        this.size++
        this.lists.insertFirst(data)
    }
    pop(){
        if (this.lists.head == null){
            return
        }
        this.size--
        this.lists.deleteFirst()
    }
    display(){
        let stackdiv = document.querySelector(".stack")
        let countdiv = document.querySelector(".count")
        stackdiv.innerHTML = ''
        countdiv.innerHTML = ''
        if (this.lists.head ===null){
            return
        }
        let cur = this.lists.head
        for (let i=this.size;cur!=null;cur=cur.next ,i--){
            this.nodes(cur,i)
        }
    }
    nodes(node,num ){

            let gn = document.createElement("div")
            let count = document.createElement("div")
            gn.classList.add("node")
            count.classList.add("num")
            gn.innerHTML = node.data
            count.innerHTML = num

            let stackdiv = document.querySelector(".stack")
            let countdiv = document.querySelector(".count")

            stackdiv.appendChild(gn)
            countdiv.appendChild(count)

    }

}

class queue{
    list = new linkedList()
    enqueue(data){
        this.list.insertLast(data)
    }
    dequeue(){
        this.list.deleteFirst()
    }

    display(){
        let queuediv = document.querySelector(".queue")
        queuediv.innerHTML = ''
        if (this.list.head === null){
            return
        }
        let cur = this.list.head
        for (;cur!=null;cur=cur.next){
            console.log(cur)
            this.nodes(this.list.head,cur)
        }

    }

    nodes(head,node){

            let gn = document.createElement("div")
            let arrow = document.createElement("div")
            gn.classList.add("node")
            gn.innerHTML = node.data
            arrow.classList.add("arrow")
            arrow.innerHTML = "←"
            let queuediv = document.querySelector(".queue")
            if (!(head === node))
            queuediv.appendChild(arrow)


            queuediv.appendChild(gn)





    }

}


const list = new linkedList()

const stacks = new stack()

const queues = new queue()

function insertFirst(data){
    if (data.length === 0) {return}

    list.insertFirst(data)
    list.display()

}

function insertLast(data){
    if (data.length === 0) {return}

    list.insertLast(data)
    list.display()
}

function deleteFirst(){
    list.deleteFirst()
    list.display()
}
function deleteLast(){
    list.deleteLast()
    list.display()
}



function push(data){
    if (data.length===0){return}
    stacks.push(data)
    stacks.display()
}
function pop(){

    stacks.pop()
    stacks.display()
}
function enqueue(data){
    if (data.length===0){return}
    queues.enqueue(data)
    queues.display()
}
function dequeue(){

    queues.dequeue()
    queues.display()
}