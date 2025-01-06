export default class Deque{
    #data // vetor privado

    constructor(){
        this.#data = [] //vetor vazio
    }

    //insercao no inicio
    insertFront(val){
        this.#data.unshift(val)
    }

    //insercao no final
    insertBack(val){
        this.#data.push(val)
    }

    //remocao no inicio
    removeFeont(){
        return this.#data.shift()
    }

    //remocao no final
    removeBack(){
        return this.#data.pop()
    }

    //Consulta primeiro da fila
    peekFront(){
        return this.#data[0]
    }

    //Consulta final da fila
    peekBack(){
        return this.#data[this.#data.length-1]
    }

    //Consulta se est[a vazio
    get isEmpty(){
        return this.#data.length === 0
    }

    //imprime o deque(depurando), caso nao queira depurar é só fazer console.log this.#data
    print(){
        let output = '[';
        for (let i=0; i< this.#data.length; i++){
            if (output !== '[') output += ','
            output += `(${i}):${this.#data[i]}` 
        }
        return output + ']'
    }


}