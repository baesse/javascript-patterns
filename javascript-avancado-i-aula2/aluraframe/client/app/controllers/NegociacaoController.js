class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputquantidade = $('#quantidade');
        this._inputdata = $('#data');
        this._inputvalor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        let data =new Date(...this._inputdata.value
        .split('-')
        .map((item,indice) =>  item - indice % 2 ))

        let negociacao = new Negociacao(
            data,
            this._inputquantidade.value,
            this._inputvalor.value,

        )
        console.log(negociacao)
        let diaMesAno=negociacao.data.getDate()

    }
}