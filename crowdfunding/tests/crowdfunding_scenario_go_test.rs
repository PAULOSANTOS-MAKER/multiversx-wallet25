use multiversx_sc_scenario::*;

// Função para configurar o ambiente do contrato, incluindo o registro do contrato de Crowdfunding
fn world() -> ScenarioWorld {
    let mut blockchain = ScenarioWorld::new();

    // Definindo o diretório onde o contrato foi configurado
    blockchain.set_current_dir_from_workspace("crowdfunding");

    // Registrando o contrato e o caminho para o proxy
    blockchain.register_contract(
        MxscPath::new("output/crowdfunding.mxsc.json"),
        crowdfunding::ContractBuilder,
    );
    
    blockchain
}

// Teste para simular o funcionamento do contrato de Crowdfunding
#[test]
fn empty_go() {
    // Definindo o que deve ser executado no cenário
    world().run("scenarios/crowdfunding.scen.json");
}
