import { collection, getDocs, doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export class FirebaseService {
  static async getAllInstruments() {
    try {
      const querySnapshot = await getDocs(collection(db, 'instruments'));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Firebase error:', error);
      return [];
    }
  }

  static async clearAllInstruments() {
    try {
      const querySnapshot = await getDocs(collection(db, 'instruments'));
      const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);
      console.log('All instruments cleared from Firebase');
    } catch (error) {
      console.error('Firebase clear error:', error);
      throw error;
    }
  }

  static async addInstrument(instrument: any) {
    try {
      const instrumentRef = doc(db, 'instruments', instrument.id);
      await setDoc(instrumentRef, {
        name: instrument.name,
        type: instrument.type,
        image: instrument.image,
        status: instrument.status,
        checkedOutBy: instrument.checkedOutBy,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Firebase add error:', error);
      throw error;
    }
  }

  static async updateInstrumentStatus(instrumentId: string, status: string, checkedOutBy: string | null = null) {
    try {
      const instrumentRef = doc(db, 'instruments', instrumentId);
      await updateDoc(instrumentRef, {
        status,
        checkedOutBy,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Firebase update error:', error);
      throw error;
    }
  }
}