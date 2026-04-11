// Carregar dados do JSON
async function carregarDados() {
    try {
        const resposta = await fetch('src/data/dados.json');
        const dados = await resposta.json();
        
        renderizarPedidos(dados.pedidos);
        renderizarClientes(dados.clientes);
        
        // Configurar busca
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
        
        const statusClass = pedido.pagamento === 'Pago' ? 'status-pago' : 'status-pendente';
        
        tr.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.cliente}</td>
            <td>${pedido.data}</td>
            <td><span class="status-badge ${statusClass}">${pedido.pagamento}</span></td>
            <td>R$ ${pedido.total.toFixed(2).replace('.', ',')}</td>
        `;
        
        tbody.appendChild(tr);
    });
    
    // Adicionar linhas vazias se necessário
    for (let i = pedidos.length; i < 3; i++) {
        const tr = document.createElement('tr');
        tr.className = 'empty-row';
        tr.innerHTML = '<td colspan="5"></td>';
        tbody.appendChild(tr);
    }
}

// Renderizar clientes na tabela
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
    
    // Adicionar linhas vazias se necessário
    for (let i = clientes.length; i < 2; i++) {
        const tr = document.createElement('tr');
        tr.className = 'empty-row';
        tr.innerHTML = '<td colspan="4"></td>';
        tbody.appendChild(tr);
    }
}

// Configurar função de busca
function configurarBusca(dados) {
    const inputPedidos = document.getElementById('buscaPedidos');
    const inputClientes = document.getElementById('buscaClientes');
    
    inputPedidos.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        const pedidosFiltrados = dados.pedidos.filter(p => 
            p.id.toLowerCase().includes(termo) ||
            p.cliente.toLowerCase().includes(termo) ||
            p.data.includes(termo)
        );
        renderizarPedidos(pedidosFiltrados);
    });
    
    inputClientes.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        const clientesFiltrados = dados.clientes.filter(c => 
            c.nome.toLowerCase().includes(termo) ||
            c.email.toLowerCase().includes(termo)
        );
        renderizarClientes(clientesFiltrados);
    });
}

// Iniciar quando a página carregar
document.addEventListener('DOMContentLoaded', carregarDados);