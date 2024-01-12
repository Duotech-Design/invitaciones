import axios from "axios";

const API_URL = 'http://localhost:3010';

export async function fetchWedding(weddingAlias, invitationId) {
  return axios.post(`http://localhost:3010/api/v1/wedding`, {
    path: weddingAlias,
    invitationId,
  });
}