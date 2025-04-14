import axios from 'axios';

// Caso você esteja utilizando uma API
const apiBaseUrl = 'http://localhost:5000'; // Exemplo de URL de uma API local

// Função para buscar todos os temas
export const getTemas = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/temas`);
    return response.data; // Retorna os temas
  } catch (error) {
    console.error('Erro ao buscar temas:', error);
    return [];
  }
};

// Função para buscar os bolos de um tema específico
export const getBolosByTema = async (temaId) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/bolos/${temaId}`);

    if(!response.data){
      console.log('nenhum dado encontrado para esse tema')
      return [];
    }
    return response.data; // Retorna os bolos do tema
  } catch (error) {
    console.error('Erro ao buscar bolos:', error);
    return [];
  }
};


export const getBolosById = async (boloId) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/bolo/${boloId}`);

    if(!response.data){
      console.log('nenhum bolo encontrado nesse tema')
      return [];
    }
    return response.data; // Retorna o bolo com esse id
  } catch (error) {
    console.error('Erro ao buscar bolo:', error);
    return null;
  }
};