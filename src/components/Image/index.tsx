import React from 'react';
import { Image } from '../../App';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { db, storage } from '../../firebase/config';
import { deleteObject, ref } from 'firebase/storage';
import { deleteDoc, doc } from 'firebase/firestore';

const ImageEl: React.FC<{ image: Image; setOpen: any; i: number }> = ({ image, setOpen, i }) => {
    const { url } = image;
    const handleChooseImage = () => {
        setOpen(i);
    };
    const handleRemoveImage = async (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        e.stopPropagation();
        const desertRef = ref(storage, `${image.id}`);

        // Delete the file
        deleteObject(desertRef)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
        // Delete the doc

        await deleteDoc(doc(db, 'images', `${image.id}`));
    };
    return (
        <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            onClick={handleChooseImage}
            className="group rounded-3xl overflow-hidden h-[300px] border-2 relative cursor-pointer"
        >
            <div className="group-hover:bg-black/70 absolute z-10 w-full h-full transition-all duration-300"></div>
            <img
                alt="this is myimage"
                src={url}
                className="group-hover:scale-125 w-full h-full object-cover absolute transition-all duration-300"
            />
            <h3 className="absolute truncate overflow-hidden w-10/12 -bottom-12 left-4 group-hover:bottom-6 text-accent z-20 transition-all duration-300">
                {image.name}
            </h3>
            <h3
                onClick={(e) => handleRemoveImage(e)}
                className="absolute text-lg -top-12 right-6 group-hover:top-6 text-accent z-20 transition-all duration-300"
            >
                <i className="fas fa-trash"></i>
            </h3>
        </motion.div>
    );
};

export default ImageEl;
