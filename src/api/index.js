import { getApp, getApps, initializeApp } from "firebase/app"
import { collection, deleteDoc, getDocs, getFirestore, query, setDoc, where, doc, getDoc, initializeFirestore, updateDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword, getAuth, initializeAuth, signInWithEmailAndPassword } from "firebase/auth"
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

const db = app_length ? getFirestore(app) : initializeFirestore(app, { experimentalForceLongPolling: true })

const auth = app_length ? getAuth(app) : initializeAuth(app)

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

export const login = async ({ email, password }) => {
    await signInWithEmailAndPassword(
        auth,
        email,
        password
    )
    const user = auth.currentUser
    localStorage.setItem("user", JSON.stringify(user))
}

export const register = async ({ firstName, lastName, email, password })  => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
    const user = userCredential?.user
    localStorage.setItem("user", JSON.stringify(user))
    const docRef = doc(db, "users", user.uid)
    await setDoc(docRef, {
        firstName, lastName, adrs: [""]
    })

}

export const getUserInfo = async () => {
    const storedUser = localStorage.getItem("user")
    const user = auth?.currentUser || JSON.parse(storedUser) || null

    if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        const userDoc = docSnap.data()
        return {
            uid: user.uid,
            email: user.email,
            ...userDoc
        }
    } else {
        return {}
    }
}

export const updateUserInfo = async ({ firstName, lastName, adrs, phone, birth, uid }) => {
    const docRef = doc(db, "users", uid)
    adrs = adrs === undefined ? null : adrs
    phone = phone === undefined ? null: phone 
    birth = birth === undefined ? null : birth
    await updateDoc(docRef, {
        firstName,
        lastName,
        adrs,
        phone,
        birth
    })
    const user = auth.currentUser
    localStorage.setItem("user", JSON.stringify(user))
}

export const logout = async () => {
    await auth.signOut()
    localStorage.removeItem("user")
}

export const addOrder = async (order) => {
    const storedUser = localStorage.getItem("user")
    const user = auth?.currentUser || JSON.parse(storedUser)
    // localStorage.setItem("or", JSON.stringify(order))
    const docRef = doc(collection(db, "orders"))
    await setDoc( docRef, { ...order, user: user.uid, id: docRef.id })
}

export const getMyOrders = async () => {
    const storedUser = localStorage.getItem("user")
    const user = auth?.currentUser || JSON.parse(storedUser)

    const q = await query(
        collection(db, "orders"),
        where("user", "==", user.uid)
    )
    let querySnapshot = await getDocs(q)
    let result = []
    querySnapshot.forEach(async (product) => {
        await result.push(product.data())
    })
    return result
}
