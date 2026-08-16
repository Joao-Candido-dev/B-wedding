
const LINK_LISTA_DE_PRESENTES = "https://noivos.casar.com/brenda-e-edivaldo19-12-2026";

/* ---------- 2. ENVELOPE (index.html) ----------------------------------- */
(function configurarEnvelope() {
  const envelope = document.getElementById("envelope");
  const transicao = document.getElementById("transicao");
  if (!envelope || !transicao) return;

  let aberto = false;

  envelope.addEventListener("click", () => {
    if (aberto) return;
    aberto = true;

    envelope.classList.add("aberto");
    envelope.setAttribute("aria-label", "Convite aberto");

    // espera a animação do envelope antes de ir para a próxima página
    setTimeout(() => {
      transicao.classList.add("ativa");
    }, 950);

    setTimeout(() => {
      window.location.href = "convite.html";
    }, 1750);
  });

  
  envelope.addEventListener("keyup", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      envelope.click();
    }
  });
})();

/* --3. CONTAGEM REGRESSIVA (convite.html) ------ */
(function configurarContagem() {
  const elDias = document.getElementById("num-dias");
  const elHoras = document.getElementById("num-horas");
  const elMin = document.getElementById("num-min");
  const elSeg = document.getElementById("num-seg");
  if (!elDias || !elHoras || !elMin || !elSeg) return;

  // Data e hora do casamento: 19/12/2026 às 16h30 (horário de Brasília)
  const dataCasamento = new Date("2026-12-19T16:30:00-03:00").getTime();

  function dois(numero) {
    return String(numero).padStart(2, "0");
  }

  function atualizar() {
    const agora = Date.now();
    const diferenca = dataCasamento - agora;

    if (diferenca <= 0) {
      elDias.textContent = "00";
      elHoras.textContent = "00";
      elMin.textContent = "00";
      elSeg.textContent = "00";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    elDias.textContent = dois(dias);
    elHoras.textContent = dois(horas);
    elMin.textContent = dois(minutos);
    elSeg.textContent = dois(segundos);
  }

  atualizar();
  const intervalo = setInterval(atualizar, 1000);
})();

/* ---- 4. LINK DA LISTA DE PRESENTES (convite.html) ----- */
(function configurarLinkPresentes() {
  const link = document.getElementById("link-presentes");
  if (!link) return;
  link.href = LINK_LISTA_DE_PRESENTES;
})();

/* ---- 5. REVELAR SEÇÕES AO ROLAR (convite.html) ----- */
(function configurarRevelarAoRolar() {
  const alvos = document.querySelectorAll(
    ".secao-mensagem, .secao-galeria, .secao-infos, .rodape"
  );
  if (!alvos.length || !("IntersectionObserver" in window)) return;

  alvos.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.style.opacity = "1";
          entrada.target.style.transform = "translateY(0)";
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  alvos.forEach((el) => observador.observe(el));
})();
