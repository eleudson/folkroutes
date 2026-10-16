import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3333';

export default function AttractiveImageManager({ attractiveId }) {
    const [images, setImages] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/api/attractives/${attractiveId}/images`);
            setImages(response.data);
            setError(null);
        } catch (err) {
            setError('Erro ao carregar as imagens do atrativo.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (attractiveId) {
            fetchImages();
        }
    }, [attractiveId]);

    const handleFileChange = (e) => {
        setSelectedFiles(Array.from(e.target.files));
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (selectedFiles.length === 0) return;

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append('images', file);
        });

        setUploading(true);
        try {
            await axios.post(`${API_BASE_URL}/api/attractives/${attractiveId}/images`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setSelectedFiles([]);
            document.getElementById('fileInput').value = '';
            fetchImages();
        } catch (err) {
            setError(err.response?.data?.message || 'Erro ao enviar as imagens.');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (imageId) => {
        if (!window.confirm('Deseja realmente excluir esta imagem?')) return;

        try {
            await axios.delete(`${API_BASE_URL}/api/images/${imageId}`);
            setImages((prev) => prev.filter((img) => img.id !== imageId));
        } catch (err) {
            setError('Erro ao excluir a imagem.');
        }
    };

    const formatBytes = (bytes) => {
        if (!bytes || bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Gerenciar Imagens do Atrativo
            </h2>

            {error && (
                <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '10px', borderRadius: '6px', marginBottom: '15px' }}>
                    {error}
                </div>
            )}

            {/* Upload Form */}
            <form onSubmit={handleUpload} style={{ border: '2px dashed #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center', marginBottom: '30px' }}>
                <input
                    id="fileInput"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ marginBottom: '10px' }}
                />
                <div>
                    <button
                        type="submit"
                        disabled={uploading || selectedFiles.length === 0}
                        style={{
                            backgroundColor: uploading ? '#9ca3af' : '#2563eb',
                            color: '#fff',
                            padding: '8px 16px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: uploading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {uploading ? 'Enviando...' : 'Fazer Upload'}
                    </button>
                </div>
            </form>

            {/* Images Grid */}
            {loading ? (
                <p>Carregando imagens...</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                    {images.map((img) => (
                        <div key={img.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <img
                                src={`${API_BASE_URL}${img.url}`}
                                alt={img.originalName || img.original_name}
                                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '10px', fontSize: '0.85rem', color: '#4b5563' }}>
                                <p style={{ fontWeight: 'bold', textOverflow: 'ellipsis', overflow: 'hidden', whitespace: 'nowrap', marginBottom: '4px' }} title={img.originalName || img.original_name}>
                                    {img.originalName || img.original_name}
                                </p>
                                <p style={{ margin: '2px 0' }}><strong>Tipo:</strong> {img.mimeType || img.mime_type}</p>
                                <p style={{ margin: '2px 0' }}><strong>Tamanho:</strong> {formatBytes(img.size)}</p>
                                <p style={{ margin: '2px 0', fontSize: '0.75rem', color: '#9ca3af' }}>
                                    <strong>Arquivo:</strong> {img.fileName || img.file_name}
                                </p>
                                <button
                                    onClick={() => handleDelete(img.id)}
                                    style={{
                                        marginTop: '10px',
                                        width: '100%',
                                        backgroundColor: '#ef4444',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '6px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && images.length === 0 && (
                <p style={{ textAlign: 'center', color: '#6b7280' }}>Nenhuma imagem cadastrada para este atrativo.</p>
            )}
        </div>
    );
}
