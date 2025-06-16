//Recupero elementos del dom
const btnTodos = document.getElementById('btnTodosPersonajes');
const personajesDiv = document.getElementById('personajes');
const errorDiv = document.getElementById('error');
const filtroForm = document.getElementById('formFiltro');

const apiUrl = 'https://rickandmortyapi.com/api/character'; //url de la API

function cargarPersonajes(personajes) { 
  personajesDiv.innerHTML = ''; //limpio contenido html del div
  personajes.forEach(personaje => {
    const card = document.createElement('div'); //creo div
    card.className = 'personaje-card';
    card.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h3>${personaje.name}</h3>
      <p><strong>Estado:</strong> ${personaje.status}</p>
      <p><strong>Especie:</strong> ${personaje.species}</p>
      <p><strong>Género:</strong> ${personaje.gender}</p>
    `;
    personajesDiv.appendChild(card); //agrego este card al div de personajes
    //seria como crear:
    //<div class="personaje-card">
      //<img src="" alt="">
      // <h3>${personaje.name}</h3>
      // <p><strong>Estado:</strong> ${personaje.status}</p>
      // <p><strong>Especie:</strong> ${personaje.species}</p>
      // <p><strong>Género:</strong> ${personaje.gender}</p>
    // </div>
  });
}

function showError(message) {
  errorDiv.textContent = message;
}

function clearError() {
  errorDiv.textContent = '';
}

// Mostrar todos los personajes
btnTodos.addEventListener('click', async () => {
  clearError();
  try {
    const response = await fetch(apiUrl); //Se hace una solicitud HTTP (fetch) a la API para traer todos los personajes
    const data = await response.json(); //Se convierte la respuesta en JSON
    cargarPersonajes(data.results);
  } catch (error) {
    showError('No se pudo cargar la lista de personajes.');
  }
});

// Filtrar personajes
filtroForm.addEventListener('submit', async (e) => {
  e.preventDefault(); //Se evita el comportamiento por defecto
  clearError();
  //recupero elementos del dom:
  const name = document.getElementById('name').value;
  const status = document.getElementById('status').value;
  const species = document.getElementById('species').value;
  const type = document.getElementById('type').value;
  const gender = document.getElementById('gender').value;
  //contruyo URL con filtros:
  const params = new URLSearchParams({
    name,
    status,
    species,
    type,
    gender
  });

  try {
    const response = await fetch(`${apiUrl}/?${params}`); //fetch de url de la api con parametros q construi
    if (!response.ok) throw new Error();
    const data = await response.json(); //convierto a json y cargo personajes
    cargarPersonajes(data.results);
  } catch {
    showError('No se encontraron personajes con esos filtros.');
  }
});
