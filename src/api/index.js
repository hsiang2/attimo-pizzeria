import { getApp, getApps, initializeApp } from "firebase/app"
import { collection, deleteDoc, getDocs, getFirestore, query, setDoc, where, doc, getDoc } from "firebase/firestore"
import products from "../json/products.json"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

const app_length = getApps().length > 0

const app = app_length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

const productsCollection = collection(db, "products")

export const feedProducts = async () => {
    const querySnapshot = await getDocs(productsCollection)
    querySnapshot.forEach(async (product) => {
        await deleteDoc(doc(db, "products", product.id))
    })
    products.forEach(async (product) => {
        const docRef = await doc(productsCollection)
        await setDoc(docRef, {...product, id: docRef.id, category: product.category.toUpperCase()})
    })
}

export const getProducts = async () => {
    let querySnapshot = await getDocs(productsCollection)

    let result = []
    querySnapshot.forEach(async (product) => {
        await result.push(product.data())
    })
    return result
}

export const getProductById = async ({ queryKey }) => {
    const [id] = queryKey;
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export const getProductsByCategory = async ({ queryKey }) => {
    const [category] = queryKey
    const q = await query(
        productsCollection,
        where("category", "==", category.toUpperCase())
    )
    let querySnapshot = await getDocs(q)
    let result = []
    querySnapshot.forEach(async (product) => {
        await result.push(product.data())
    })
    return result
}