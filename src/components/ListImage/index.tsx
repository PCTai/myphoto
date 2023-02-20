import React, { useState } from 'react';
import { Image } from '../../App';
import useGetImage from '../../customhooks/useGetImage';
import ImageEl from '../Image';
import Modal from '../Modal';

const ListImage: React.FC = () => {
    const { images } = useGetImage();
    const [open, setOpen] = useState<number | any>(null);

    return (
        <div className="max-sm:mx-4 sm:mx-6">
            <div className="list-image py-10 container max-w-4xl m-auto pb-24">
                {images &&
                    images.map((image: Image, index) => (
                        <ImageEl key={index} i={index} image={image} setOpen={setOpen} />
                    ))}
            </div>
            <Modal open={open} setOpen={setOpen} images={images} />
        </div>
    );
};

export default ListImage;
