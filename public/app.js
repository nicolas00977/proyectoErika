// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Inicializamos Firestore
      const db = firebase.firestore();
  
      // 🔹 CREAR: Guardar un nuevo documento en la colección "usuarios"
      const crearBtn = document.getElementById('guardarDato');
      crearBtn.addEventListener('click', async () => {
        const docRef = await db.collection('usuarios').add({
          nombre: 'Nicolas G',
          edad: 24,
          email: 'nico@example.com',
          intereses: ['programación', 'fiesta', 'fotografía'],
          creadoEn: firebase.firestore.FieldValue.serverTimestamp()
        });
  
        alert('Documento creado con ID: ' + docRef.id);
      });
  
      // 🔹 LEER: Obtener todos los documentos de "usuarios"
      const leerBtn = document.getElementById('leerDatos');
      leerBtn.addEventListener('click', async () => {
        const snapshot = await db.collection('usuarios').get();
        snapshot.forEach(doc => {
          console.log(`ID: ${doc.id}`, doc.data());
        });
        alert('Consulta realizada. Revisa la consola para ver los datos.');
      });
  
      // 🔹 ELIMINAR: Eliminar un documento por ID
      const eliminarBtn = document.getElementById('eliminarDato');
      eliminarBtn.addEventListener('click', async () => {
        const id = prompt('Ingresa el ID del usuario a eliminar:');
        if (!id) return;
  
        await db.collection('usuarios').doc(id).delete();
        alert(`Usuario con ID ${id} eliminado`);
      });
  
      // 🔹 MODIFICAR: Actualizar un documento por ID
      const modificarBtn = document.getElementById('modificarDato');
      modificarBtn.addEventListener('click', async () => {
        const id = prompt('Ingresa el ID del usuario a modificar:');
        if (!id) return;
  
        await db.collection('usuarios').doc(id).update({
          nombre: 'Nombre actualizado',
          edad: 30,
          intereses: ['leer', 'viajar'],
          actualizadoEn: firebase.firestore.FieldValue.serverTimestamp()
        });
  
        alert(`Usuario con ID ${id} actualizado`);
      });
  
    } catch (e) {
      console.error('Error en Firestore:', e);
    }
  });
  