import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const handleSaveUser = async (username) => {
  const name = username;

  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name,
      leastMoves: 30,
      mostPoints: 0,
    });
    return docRef;
  } catch (error) {
    console.error('error adding user', error);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
