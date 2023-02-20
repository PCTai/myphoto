import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Image } from '../App';
import { db } from '../firebase/config';

const useGetImage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
            const q = query(collection(db, 'images'), orderBy('createdAt', 'desc'));
            // console.log(q);
            const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
                const data = querySnapshot.docs.map((doc: any) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                setImages(data);
            });
            return () => unsubscribe();
        })();
    }, []);
    return { images };
};

export default useGetImage;
