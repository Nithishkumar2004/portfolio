    import { useEffect, useState } from 'react';
    import { Award, ExternalLink, Search, Download } from 'lucide-react';
    import { fetchCSVFromGitHub } from '../utils/csvFetcher';
    import { GITHUB_CONFIG } from '../config';
    import { Certification } from '../types';
    import { Worker, Viewer } from '@react-pdf-viewer/core';
    import '@react-pdf-viewer/core/lib/styles/index.css';
    import '@react-pdf-viewer/default-layout/lib/styles/index.css';

    export default function Certifications() {
        const [certifications, setCertifications] = useState<Certification[]>([]);
        const [filteredCerts, setFilteredCerts] = useState<Certification[]>([]);
        const [loading, setLoading] = useState(true);
        const [searchTerm, setSearchTerm] = useState('');
        const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

        useEffect(() => {
            async function loadData() {
                const data = await fetchCSVFromGitHub<Certification>(
                    GITHUB_CONFIG,
                    'certifications.csv'
                );

                const sorted = data.sort(
                    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                );

                setCertifications(sorted);
                setFilteredCerts(sorted);
                setLoading(false);
                console.log(sorted)
            }

            loadData();
        }, []);

        useEffect(() => {
            if (searchTerm) {
                const filtered = certifications.filter(
                    (cert) =>
                        cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        cert.issuingOrg.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredCerts(filtered);
            } else {
                setFilteredCerts(certifications);
            }
        }, [searchTerm, certifications]);

        return (
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Certifications
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Professional certifications and credentials
                    </p>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search certifications by title or organization..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                    />
                </div>

                {loading ? (
                    <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                        Loading certifications...
                    </div>
                ) : filteredCerts.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredCerts.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {cert.title}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                            {cert.issuingOrg}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                            Issued:{' '}
                                            {new Date(cert.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                            })}
                                        </p>
                                        {cert.verificationLink && cert.verificationLink.endsWith('.pdf') && (
                                            <button
                                                onClick={() => setSelectedPdf(cert.verificationLink)}
                                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                View PDF
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400">
                            {searchTerm
                                ? 'No certifications match your search'
                                : 'Configure your GitHub repository to display certifications'}
                        </p>
                    </div>
                )}

                {/* PDF Viewer Modal */}
                {selectedPdf && (
                    <div
                        className="fixed inset-0 flex justify-center items-center z-50"
                        onClick={() => setSelectedPdf(null)}
                    >
                        <div
                            className="bg-white dark:bg-gray-800 w-11/12 md:w-3/4 lg:w-2/3 h-5/6 p-4 rounded-lg relative flex flex-col"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPdf(null)}
                                className="absolute top-2 right-2 z-50 bg-white dark:bg-gray-700 p-1 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                            >
                                X
                            </button>

                            {/* Buttons */}
                            <div className="absolute top-2 left-2 z-50 flex gap-2">
                                {/* Download Button */}
                                <a
                                    href={selectedPdf}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-gray-700 p-1 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition flex items-center gap-1"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </a>

                                {/* View Certificate Button (Google Docs Viewer) */}
                                <a
                                    href={`https://docs.google.com/viewer?url=${encodeURIComponent(selectedPdf)}&embedded=true`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-gray-700 p-1 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition flex items-center gap-1"
                                >
                                    
                                    View Certificate
                                </a>
                            </div>

                            {/* PDF Viewer */}
                            <div className="flex-1 overflow-auto mt-10">
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                                    <Viewer fileUrl={selectedPdf} />
                                </Worker>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    }
