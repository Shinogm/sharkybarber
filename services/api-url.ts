
export const API_URL = 'http://localhost:3001'

export const APIENDPOINTS = {
  // Barber
  postRegisterBarber: `${API_URL}/barber/create`,
  postLoginBarber: (email: string, password: string) => `${API_URL}/barber/login?email=${email}&password=${password}`,
  getAllBarbers: `${API_URL}/barber/get`,
  getOneBarber: (id: number) => `${API_URL}/barber/get/${id}`,

  // Client
  postRegisterClient: `${API_URL}/client/create`,
  getAllClients: `${API_URL}/client/get`,
  getOneClient: (id: number) => `${API_URL}/client/get/${id}`,
  patchClient: (id: number) => `${API_URL}/client/modify/${id}`,
  deleteClient: (id: number) => `${API_URL}/client/delete/${id}`,

  // Cita
  postRegisterCita: (clientID: number, barberID: number, dia: string, hora: string) => `${API_URL}/citas/create/cita/${clientID}/${barberID}?dia=${dia}&hora=${hora}`,
  getPendingCita: `${API_URL}/citas/get/status/pending`,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  postStatusDone: (cita_id: number) => `${API_URL}/citas/status/done/${cita_id}`

}
