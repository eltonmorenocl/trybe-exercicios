// 1. Criar Estados;
function createStates() {
  const state = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const getSelect = document.getElementById('estado');
  for (let index = 0; index < state.length; index += 1) {
    const createOption = document.createElement('option');
    createOption.innerText = state[index];
    getSelect.appendChild(createOption)    
  } 
}
createStates();

// 2.

