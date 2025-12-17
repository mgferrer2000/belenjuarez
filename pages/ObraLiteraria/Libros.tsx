import React from 'react';
import { BOOKS } from '../../constants';
import { motion } from 'framer-motion';

import { BookThumbnailRow } from '../../components/BookThumbnailRow';

const Libros: React.FC = () => {
    return (
        <div className="mb-24">
            <BookThumbnailRow />

        </div>
    );
};

export default Libros;
