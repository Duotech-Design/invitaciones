import axios from "axios";

const API_URL = 'http://localhost:3010';

export async function fetchWedding(weddingAlias, invitationId) {
  return axios.post(`${API_URL}/api/v1/wedding`, {
    path: weddingAlias,
    invitationId,
  });
}

export async function confirmAttendance(invitationId, guestId) {
  return axios.post(`${API_URL}/api/v1/wedding/confirm`, {
    invitationId,
    guestId,
  });
}

export async function cancelAttendance(invitationId, guestId) {
  return axios.post(`${API_URL}/api/v1/wedding/cancel`, {
    invitationId,
    guestId,
  });
}

export async function declineAttendance(invitationId, guestId) {
  return axios.post(`${API_URL}/api/v1/wedding/decline`, {
    invitationId,
  });
}