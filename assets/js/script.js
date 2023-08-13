// Texto que você quer exibir com o efeito de digitação progressiva
const texto = "Desenvolvedor front-end";
let index = 0;

function digitarLetraPorLetra() {
  const elemento = document.getElementById("digitar");
  elemento.innerHTML += texto.charAt(index);
  index++;

  if (index < texto.length) {
    setTimeout(digitarLetraPorLetra, 100); // Tempo em milissegundos entre cada letra (100ms no exemplo)
  } else {
    // O texto foi completamente digitado, você pode continuar piscando ou fazer outra coisa aqui
    piscar();
  }
}

function piscar() {
  const elemento = document.getElementById("digitar");
  if (elemento.classList.contains("cursor")) {
    elemento.classList.remove("cursor");
  } else {
    elemento.classList.add("cursor");
  }
  setTimeout(piscar, 500); // Tempo em milissegundos para a piscada (500ms no exemplo)
}

// Iniciar a digitação progressiva
digitarLetraPorLetra();

function menuShow() {
  /* Seu código existente para mostrar/ocultar o menu móvel aqui */
}

function scrollToSection(event, target) {
  /* Seu código existente para rolar até a seção alvo aqui */
}

function showSkillDetails(skill) {
  // Implemente sua lógica aqui
}
