import React from 'react';
import { useParams } from 'react-router-dom';
import AttractiveImageManager from '../components/AttractiveImageManager';

export default function AttractiveGalleryPage() {
    const { id } = useParams();

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '40px 20px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    Attractive #{id} - Galeria de Fotos
                </h1>
                <AttractiveImageManager attractiveId={id} />
            </div>
        </div>
    );
}
