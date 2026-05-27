function showTab(tab, btn){

  document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  document.getElementById(tab).classList.add("active");
  btn.classList.add("active");
}

/* 🔥 CORREÇÃO PRINCIPAL DO BOTÃO */
function toggleInfo(id){

  const el = document.getElementById(id);

  if(!el) return; // evita erro

  if(el.classList.contains("hidden")){
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}