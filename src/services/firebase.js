import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { addDoc, collection, getFirestore, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAd5tifpbDXbkJrobLKjksGaQc2Sk8Of3k",
    authDomain: "chat-room-ke.firebaseapp.com",
    projectId: "chat-room-ke",
    storageBucket: "chat-room-ke.appspot.com",
    messagingSenderId: "441770602006",
    appId: "1:441770602006:web:668a63a0fc6059ec834f37",
    measurementId: "G-MDW05FNZ82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        console.log(user);
        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
            isAnonymous: user.isAnonymous,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            data: user
        };
    } catch (error) {
        console.log({ error });

        if (error.code !== 'auth/cancelled-popup-request') {
            console.log(error);
            throw error;
        }

        return null;

    }
}

async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            createdAt: serverTimestamp()
        });
    } catch (error) {
        console.log(error);
    }
}

async function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('createdAt', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            callback(messages);
        }
    );
};

export { loginWithGoogle, sendMessage, getMessages };