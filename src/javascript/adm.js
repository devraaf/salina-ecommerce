// Carregar dados do JSON
async function carregarDados() {
    try {
        const resposta = await fetch('src/data/dados.json');
        const dados = await resposta.json();
        
        renderizarPedidos(dados.pedidos);
        renderizarClientes(dados.clientes);
        configurarBusca(dados);
        
    } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
    }
}

// Renderizar pedidos na tabela
function renderizarPedidos(pedidos) {
    const tbody = document.getElementById('tabelaPedidos');
    tbody.innerHTML = '';
    
    pedidos.forEach(pedido => {
        const tr = document.createElement('tr');
        
        // Verifica se está extornado
        const isExtornado = pedido.status === 'extornado';
        
        // Define classes e valores visuais
        const statusClass = isExtornado ? 'status-extornado' : 
                           (pedido.pagamento === 'Pago' ? 'status-pago' : 'status-pendente');
        const statusTexto = isExtornado ? '↩ Extornado' : pedido.pagamento;
        
        // Valor riscado se extornado
        const valorHTML = isExtornado 
            ? `<span class="valor-riscado">R$ ${pedido.total.toFixed(2).replace('.', ',')}</span>`
            : `R$ ${pedido.total.toFixed(2).replace('.', ',')}`;
        
        // Botão de extornar só aparece se estiver PAGO e não extornado
        const btnExtornar = (pedido.pagamento === 'Pago' && !isExtornado) 
            ? `<button class="btn-extornar" onclick="extornarPedido('${pedido.id}')" title="Extornar pedido">↩ Extornar</button>`
            : '';
        
        tr.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.cliente}</td>
            <td>${pedido.data}</td>
            <td><span class="status-badge ${statusClass}">${statusTexto}</span></td>
            <td>${valorHTML}</td>
            <td class="acoes">
                
                ${btnExtornar}
            </td>
        `;
        
        // Adiciona classe especial na linha se extornado
        if (isExtornado) {
            tr.classList.add('pedido-extornado');
        }
        
        tbody.appendChild(tr);
    });
    
}

// Extornar pedido
function extornarPedido(id) {
    if (!confirm('Tem certeza que deseja extornar este pedido?')) {
        return;
    }
    fetch('src/data/dados.json')
        .then(res => res.json())
        .then(dados => {
            const pedido = dados.pedidos.find(p => p.id === id);
            
            if (!pedido || pedido.status === 'extornado') {
                alert('Pedido já extornado ou não encontrado!');
                return;
            }
            alert(`Pedido ${id} extornado com sucesso!`);
            carregarDados(); // Recarrega a tabela
        });
}



// Renderizar clientes
function renderizarClientes(clientes) {
    const tbody = document.getElementById('tabelaClientes');
    tbody.innerHTML = '';
    
    clientes.forEach(cliente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="client-name">
                    <span class="client-avatar">${cliente.avatar}</span>
                    ${cliente.nome}
                </div>
            </td>
            <td>${cliente.email}</td>
            <td>${cliente.totalPedidos}</td>
            <td>R$ ${cliente.totalGasto.toFixed(2).replace('.', ',')}</td>
        `;
        tbody.appendChild(tr);
    });
}


function filtrar(array, termo, campos) {
    const busca = termo.toLowerCase();
    return array.filter(item => 
        campos.some(campo => {
            const valor = item[campo];
            return valor && valor.toString().toLowerCase().includes(busca);
        })
    );
}
function configurarBusca(dados) {
    // Busca de pedidos
    document.getElementById('buscaPedidos').addEventListener('input', (e) => {
        const filtrados = filtrar(dados.pedidos, e.target.value, ['id', 'cliente', 'data']);
        renderizarPedidos(filtrados);
    });

    // Busca de clientes
    document.getElementById('buscaClientes').addEventListener('input', (e) => {
        const filtrados = filtrar(dados.clientes, e.target.value, ['nome', 'email']);
        renderizarClientes(filtrados);
    });
}


document.addEventListener('DOMContentLoaded', carregarDados);