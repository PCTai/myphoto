import React, { useState } from 'react';
import { Image } from '../../App';
import { AnimatePresence, motion } from 'framer-motion';

const Modal: React.FC<{ open: number; setOpen: any; images: Image[] }> = ({
    open,
    setOpen,
    images,
}) => {
    const handlePrev = (e: any) => {
        e.stopPropagation();
        const index = open - 1;
        if (index < 0) {
            setOpen(images.length - 1);
            return;
        }
        setOpen(index);
    };
    const handleNext = (e: any) => {
        e.stopPropagation();
        const index = open + 1;
        if (index >= images.length - 1) {
            setOpen(0);
            return;
        }
        setOpen(index);
    };
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
    };
    return (
        <motion.div
            onClick={() => setOpen(null)}
            animate={images[open] ? 'open' : 'closed'}
            variants={variants}
            initial={false}
            transition={{ duration: 0.5 }}
            className={`${
                images[open] ? 'block' : 'hidden'
            } fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-gray-rgba z-30 px-6`}
        >
            <button
                onClick={() => setOpen(null)}
                className="absolute top-6 right-6 text-accent text-[42px] w-[60px] h-[60px] flex items-center justify-center"
            >
                <i className="fas fa-times"></i>
            </button>
            <motion.img
                onClick={(e) => e.stopPropagation()}
                className="w-full h-2/3 object-contain rounded-3xl mx-24 max-sm:mx-10 "
                src={images[open] && images[open].url}
                alt=""
            />
            <button
                onClick={(e) => handlePrev(e)}
                className="absolute top-[100% - 60px] left-6 text-accent text-[42px] w-[60px] h-[60px] flex items-center justify-center z-40"
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
                onClick={(e) => handleNext(e)}
                className="absolute top-[100% - 60px] right-6 text-accent text-[42px] w-[60px] h-[60px] flex items-center justify-center z-40"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </motion.div>
    );
};

export default Modal;
