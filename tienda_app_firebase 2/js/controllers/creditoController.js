
import { doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from '../db.js';

async function registrarCredito(credito) {
  try {
    await setDoc(doc(db, 'creditos', credito.numero), credito);
  } catch (error) {
    console.error('Error al registrar crédito:', error);
  }
}

async function actualizarCreditoAbono(numeroCredito, abonoExtra) {
  try {
    const creditoDoc = await getDoc(doc(db, 'creditos', numeroCredito));
    if (creditoDoc.exists()) {
      const credito = creditoDoc.data();
      const nuevoAbono = credito.abono + abonoExtra;
      const nuevoSaldo = credito.valor - nuevoAbono;
      await updateDoc(doc(db, 'creditos', numeroCredito), {
        abono: nuevoAbono,
        saldo: nuevoSaldo
      });
    }
  } catch (error) {
    console.error('Error al actualizar crédito:', error);
  }
}
