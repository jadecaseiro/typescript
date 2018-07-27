class Carro {
    private modelo: string
    //private numeroDePortas: number
    private velocidade: number = 0


    constructor(modelo: string){
        this.modelo = modelo
    }
    public acelerar() : void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }
}

class Concessionaria{
    private endereco: string = ""
    private listaDeCarros: any

    constructor(endereco : string){
        this.endereco = endereco
    }

    public fornecerEndereco():string{
        return this.endereco
    }

    public mostrarListaDeCarros(): any{
        return this.listaDeCarros
    }

}

class Pessoa{
    private nome: string
    private carroPreferido:string
    private carro : Carro
    
    constructor(nome:string, carroPreferido: string, carro: Carro){
        this.nome = nome
        this.carroPreferido = carroPreferido
        this.carro = carro
    }

    public dizerNome(): string{
        return this.nome
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public dizerCarroQueTem(): Carro{
        return this.carro
    }

    public comprarCarro(carro: Carro) : void{
        this.carro = carro
    }

}

//Criar carros
let carroA = new Carro("CarroA")
let carroB = new Carro("CarroB")
let carroC = new Carro("CarroC")

let listaDeCarros : Array<Carro> = [carroA,carroB,carroC]




