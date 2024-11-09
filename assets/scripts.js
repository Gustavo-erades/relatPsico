function todosOsCamposPreenchidos() {
    const inputs = document.querySelectorAll('input:not(#evolucao)[type="text"], input[type="radio"], input[type="checkbox"], input[type="number"]');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            return false;
        }
    }
    return true;
}
function pegarDados() {
    const objSession = document.querySelector("#objSession").value;
    const material = document.querySelector("#material").value;
    const profissional = document.querySelector("#profissional").value;
    var profissionalCod = document.querySelector("#profissionalCod").value;
    profissionalCod=profissionalCod.replace(/(\d{2})(\d*)/, '$1/$2');
    const pacienteChegou = document.getElementById('pacienteChegou');
    let valorPacienteChegou = '';
    const selectedRadio = pacienteChegou.querySelector('input[name="btnradio"]:checked');
    valorPacienteChegou = selectedRadio.value;
    var evolucao = document.querySelector("#evolucao").value;
    if (evolucao ==='') {
        evolucao = 'Sessão sem intercorrências';
    }
    const necessidades = document.getElementById('necessidades');
    const selectedValues = [];
    const checkedCheckboxes = necessidades.querySelectorAll('input[type="checkbox"]:checked');
    checkedCheckboxes.forEach(checkbox => {
        if (checkbox.value != '') {
            selectedValues.push('Sim');
        }
    });
    retornoDados = [objSession, material, profissional, evolucao, profissionalCod, valorPacienteChegou, selectedValues];
    return retornoDados;
}
function gerarCopia() {
   var texto = null;
    var dados = pegarDados();
    if (dados[6][0] == undefined) {
        dados[6][0] = 'Não';
    }
    if (dados[6][1] == undefined) {
        dados[6][1] = 'Não';
    }
    if (dados[6][2] == undefined) {
        dados[6][2] = 'Não';
    }
    texto='Objetivo da sessão: '+dados[0]+'\n\nMaterial utilizado: '+dados[1]+'\n\nEvolução: Paciente chegou em '+dados[5]+'.'+dados[3]+'\n\nÁgua: '+dados[6][0]+'\nLanche: '+dados[6][1]+'\nBanheiro: '+dados[6][2]+'\n\nÁrea de atuação: Psicologia (ABA)\nNome do Profissional : '+dados[2]+'\n(CRP '+dados[4]+')';
    navigator.clipboard.writeText(texto);

}
function aguardarCamposPreenchidos() {
    if (todosOsCamposPreenchidos()) {
        let botao = document.querySelector("#divButton");
        botao.style.display = "flex";
    } else {
        setTimeout(aguardarCamposPreenchidos, 500);
    }
}

aguardarCamposPreenchidos();

