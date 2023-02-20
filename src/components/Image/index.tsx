import React from 'react';
import { Image } from '../../App';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const ImageEl: React.FC<{ image: Image; setOpen: any; i: number }> = ({ image, setOpen, i }) => {
    const { url } = image;
    const handleChooseImage = () => {
        setOpen(i);
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
            <h3 className="absolute -bottom-12 left-4 group-hover:bottom-6 text-accent z-20">
                {image.name}
            </h3>
        </motion.div>
    );
};

export default ImageEl;
