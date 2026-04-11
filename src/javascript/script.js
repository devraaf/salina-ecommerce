// função que carrega os produtos
function load(limit){
    fetch('src/data/menu.json') //endereço da req
        .then(response => response.json()) //converte a resposta em json
        .then(menu => {
            const container = document.querySelector("#products-container") //seleciona o container onde serão criados os cards
            if (!container) return
            container.innerHTML = ''

            const products = limit ? menu.slice(0, limit) : menu //verifica se há limite de produtos a serem carregados, se não, todos os produtos são carregados

            //cria os elementos (cards, itens e passa valores) para cada produto
            products.forEach(product => {
                const card = document.createElement("div")
                card.classList.add("card")

                const img = document.createElement("img")
                img.src = product.imagem
                img.alt = product.nome

                const titulo = document.createElement("h3")
                titulo.textContent = product.nome

                const desc = document.createElement("p")
                desc.textContent = product.descricao

                const footer_card = document.createElement("div")
                footer_card.classList.add("footer-card")

                const preco = document.createElement("span")
                preco.textContent = `R$ ${product.preco.toFixed(2).replace('.', ',')}`

                const btn = document.createElement("button")
                btn.classList.add("btn-add-to-cart")
                btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i>'
                btn.addEventListener('click', () => {
                    addToCart(product)
                })
                //estrutura os elementos criados
                footer_card.appendChild(preco)
                footer_card.appendChild(btn)

                card.appendChild(img)
                card.appendChild(titulo)
                card.appendChild(desc)
                card.appendChild(footer_card)

                container.appendChild(card)
            })
        })
        .catch(error => console.error('Erro ao carregar menu:', error))
}
//executa a função quando a página é carregada e procura o limite
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#products-container")
    const limit = container ? container.dataset.limit : null
    load(limit)
})
