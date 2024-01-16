import axios from "axios";

const API_URL = 'https://invitaciones-backend-production.up.railway.app';

const API_LOCAL = 'http://localhost:3001';

export async function fetchAllInvite() {
  return axios.get(`${API_LOCAL}/api/v1/invite`,{
    withCredentials: true,
  });
}

export async function confirmAttendance(invitationId, guestId) {
  return axios.post(`${API_URL}/api/v1/wedding/confirm`, {
    invitationId,
    guestId,
  },{
    withCredentials: true,
  });
}

export async function cancelAttendance(invitationId, guestId) {
  return axios.post(`${API_URL}/api/v1/wedding/cancel`, {
    invitationId,
    guestId,
  },{
    withCredentials: true,
  });
}

export async function declineAttendance(invitationId, guestId) {
  return axios.post(`${API_URL}/api/v1/wedding/decline`, {
    invitationId,
  },{
    withCredentials: true,
  });
}