import imageCompression from 'browser-image-compression';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { db, storage } from '../../firebase/config';
import Loading from '../Loading';

const UploadImage = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const handelChangeFile = (e: any) => {
        setFile(e.target.files[0]);
        e.target.value = null;
    };
    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);

        //
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 786,
            useWebWorker: true,
        };
        try {
            // Nen anh
            const compressedFile = await imageCompression(file, options);
            const idImage = Date.now();
            const storageRef = ref(storage, `${idImage}`);
            const uploadTask = uploadBytesResumable(storageRef, compressedFile);
            uploadTask.on(
                'state_changed',

                async () => {
                    console.log('vao day');
                    await getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await setDoc(doc(db, 'images', `${idImage}`), {
                            name: file['name'],
                            url: downloadURL,
                            createdAt: serverTimestamp(),
                        });
                    });
                    setLoading(false);
                },
                (error: any) => {
                    console.log(error);
                    setLoading(false);
                    return;
                }
            );
            setFile(null);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="max-sm:mx-4 sm:mx-6 mt-6">
            <div className="container m-auto max-w-4xl text-center  mb-4">
                <div className="flex justify-center flex-col items-center">
                    <label
                        htmlFor="image"
                        className={`${
                            file ? 'bg-accent' : 'border-2'
                        } w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
                    >
                        <i
                            className={`${file ? 'text-white' : 'text-gray-300'} fa-solid fa-plus`}
                        ></i>
                    </label>

                    <input
                        type="file"
                        onChange={handelChangeFile}
                        name="image"
                        id="image"
                        className="hidden"
                    />
                    <p className="mt-2 text-sm text-white">{file != null ? file?.['name'] : ''}</p>
                    <button
                        onClick={handleUpload}
                        className="btn py-2 px-6 text-white font-bold mt-4 rounded-md"
                    >
                        Upload
                    </button>
                    <Loading loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default UploadImage;
