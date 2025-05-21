
import { doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from '../db.js';

async function registrarSeparado(separado) {
  try {
    await setDoc(doc(db, 'separados', separado.numero), separado);
  } catch (error) {
    console.error('Error al registrar separado:', error);
  }
}

async function actualizarSeparadoAbono(numeroSeparado, abonoExtra) {
  try {
    const separadoDoc = await getDoc(doc(db, 'separados', numeroSeparado));
    if (separadoDoc.exists()) {
      const separado = separadoDoc.data();
      const nuevoAbono = separado.abono + abonoExtra;
      const nuevoSaldo = separado.valor - nuevoAbono;
      await updateDoc(doc(db, 'separados', numeroSeparado), {
        abono: nuevoAbono,
        saldo: nuevoSaldo
      });
    }
  } catch (error) {
    console.error('Error al actualizar separado:', error);
  }
}
