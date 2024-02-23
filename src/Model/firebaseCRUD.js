import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, orderBy, query } from 'firebase/firestore';
import app from './firebaseConfig';

const db = getFirestore(app);


//CREATE DATA
const createData = async (title, author) => {
  try {
    const docRef = await addDoc(collection(db, 'articles'), { title, author });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

//READ DATA
const readDataOrdered = async (tabName) => {
  const q = query(collection(db, tabName), orderBy('idOrder', 'desc'));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

const readData = async (tabName) => {
  const q = query(collection(db, tabName));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

//READ SKILLS
const readSkills= async (tabName, filter) => {
  const q = query(collection(db, tabName));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const skills = data.filter(skill => skill.type === filter);
  return skills;
};



//DELETE DATA
const deleteData = async (id) => {
  await deleteDoc(doc(db, 'articles', id));
  console.log('Document deleted with ID: ', id);
};

//Update DATA
const updateData = async (id, newData) => {
  await updateDoc(doc(db, 'articles', id), newData);
  console.log('Document updated with ID: ', id);
};

export { createData, readData, deleteData, updateData, readDataOrdered, readSkills};
