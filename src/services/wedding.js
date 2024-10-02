import axios from "axios";

const API_URL = 'https://api.andreaydiego.website';

const dummyData = {
  wedding: {
    _id: '65a0b97fc7f02cbbbee982c5', // Debe coincidir con uno de los IDs en WeddingMap
  },
  invite: {
    name: 'John Doe',
    guest: [
      {
        name: 'Jane Doe',
        whatsapp: ['+123456789'],
        isPrimaryContact: true,
        confirmation: {
          status: 'confirmed',
          date: new Date(),
        },
        sendInvitation: true,
      },
      {
        name: 'John Doe Jr.',
        whatsapp: ['+123456789'],
        isPrimaryContact: false,
        confirmation: {
          status: 'pending',
          date: null,
        },
        sendInvitation: true,
      }
    ],
    notification: [
      {
        sentAt: new Date(),
        result: 'success',
        source: 'email',
      },
    ],
    size: 1,
    owner: "65a0b97fc7f02cbbbee982c5",
  },
};

export async function fetchWedding(weddingAlias, invitationId) {
  // Devolver datos ficticios
  return new Promise((resolve) => {
    resolve({
      data: dummyData,
    });
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