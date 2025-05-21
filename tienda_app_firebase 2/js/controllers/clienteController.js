
import { doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from '../db.js';

async function registrarCliente(cliente) {
  try {
    await setDoc(doc(db, 'clientes', cliente.cedula), cliente);
  } catch (error) {
    console.error('Error al registrar cliente:', error);
  }
}

async function obtenerClientePorCedula(cedula) {
  try {
    const clienteDoc = await getDoc(doc(db, 'clientes', cedula));
    if (clienteDoc.exists()) {
      return clienteDoc.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al buscar cliente:', error);
    return null;
  }
}

async function editarCliente(cedula, nuevosDatos) {
  try {
    await updateDoc(doc(db, 'clientes', cedula), nuevosDatos);
  } catch (error) {
    console.error('Error al editar cliente:', error);
  }
}
