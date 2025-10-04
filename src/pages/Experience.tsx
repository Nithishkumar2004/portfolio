import { useEffect, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { fetchCSVFromGitHub } from '../utils/csvFetcher';
import { GITHUB_CONFIG } from '../config';
import { Experience as ExperienceType } from '../types';

export default function Experience() {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const data = await fetchCSVFromGitHub<ExperienceType>(GITHUB_CONFIG, 'experience.csv');

            // Sort by most recent first using end date from duration
            const sorted = data.sort((a, b) => {
                const parseEndDate = (duration: string) => {
                    const parts = duration.split('-');
                    if (parts.length < 2) return new Date(0); // fallback very old date
                    const endStr = parts[1].trim();
                    if (endStr.toLowerCase() === 'present') return new Date(); // treat "Present" as today
                    const date = new Date(endStr);
                    return isNaN(date.getTime()) ? new Date(0) : date;
                };
                return parseEndDate(b.duration).getTime() - parseEndDate(a.duration).getTime();
            });



            setExperiences(sorted);
            setLoading(false);
        }
        loadData();
    }, []);

    return (
        <div className="space-y-12 px-4 md:px-12">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">Experience</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    My journey through internships and professional roles
                </p>
            </div>

            {loading ? (
                <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                    Loading experience...
                </div>
            ) : experiences.length > 0 ? (
                <div className="relative space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                            {/* Timeline Icon + Line */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-lg">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                {index < experiences.length - 1 && (
                                    <div className="w-1 h-full bg-gray-300 dark:bg-gray-700 mt-2"></div>
                                )}
                            </div>

                            {/* Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:flex-1 hover:scale-[1.02] transition-transform duration-300 border-l-4 border-blue-500">
                                <div className="flex justify-between flex-wrap gap-2 mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1 inline-block hover:underline"
                                        >
                                            {exp.company}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
                                    {exp.description.replace(/\\n/g, '\n')}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.split(',').map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-white"
                                        >
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-12 text-center">
                    <Briefcase className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Configure your GitHub repository to display experience
                    </p>
                </div>
            )}
        </div>
    );
}
