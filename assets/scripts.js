function todosOsCamposPreenchidos() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="radio"], input:not(#sessao)[type="checkbox"], input[type="number"]');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            return false;
        }
    }
    return true;
}
function primeiraLetraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  
function pegarDados() {
    const objSession = document.querySelector("#objSession").value;
    const material = document.querySelector("#material").value;
    var profissional = document.querySelector("#profissional").value;
    var profissionalCod;
    if(profissional=='pedro'){
        profissional="Pedro Henrique Andrade de Sousa";
        profissionalCod='0127344';
    }else if(profissional=='samara'){
        profissional="Samara Teles de Nogueira";
        profissionalCod='0127347';
    }else if(profissional=='amanda'){
        profissional="Amanda De Carli Farias Cruz";
        profissionalCod='0128109';
    }else if(profissional=='amanda'){
        profissional="Amanda De Carli Farias Cruz";
        profissionalCod='0128487';
    }else if(profissional=='Davi Carrasco Abrão'){
        profissional="Davi Carrasco Abrão";
        profissionalCod='0128487';
    }

    profissionalCod=profissionalCod.replace(/(\d{2})(\d*)/, '$1/$2');
    const pacienteChegou = document.getElementById('pacienteChegou');
    const selectedRadio = pacienteChegou.querySelector('input[name="estado"]:checked');
    let valorPacienteChegou = selectedRadio ? selectedRadio.value : '';
    var evolucao = document.querySelector("#evolucao").value;
    const divSessao=document.getElementById('divSessao');
    var sessao=divSessao.querySelectorAll('input[type="checkbox"]:checked');
    if(sessao.length!=0){
        evolucao="Sessão sem intercorrências"+". "+primeiraLetraMaiuscula(evolucao);
    }else{
        sessao='';
    }
    const necessidades = document.getElementById('necessidades');
    const selectedValues = [];
    const checkedCheckboxes = necessidades.querySelectorAll('input[type="checkbox"]');
    checkedCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push('Sim');
        }else{
            selectedValues.push('Não');
        }
    });
    retornoDados = [objSession, material, profissional, evolucao, profissionalCod, valorPacienteChegou, selectedValues];
    return retornoDados;
}

function aguardarCamposPreenchidos() {
    if (todosOsCamposPreenchidos()) {
        let botao = document.querySelector("#divButton");
        botao.style.display = "flex";
    } else {
        setTimeout(aguardarCamposPreenchidos, 500);
    }
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector("#theme-icon");
    if (icon) {
        icon.innerText = isDark ? "☀️" : "🌙";
    }
}

// Manter modo ao recarregar
window.onload = function () {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }
};

aguardarCamposPreenchidos();

