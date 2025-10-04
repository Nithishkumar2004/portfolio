import { useEffect, useState } from 'react';
import { GraduationCap, Code2, Database, Globe, Cpu, Terminal } from 'lucide-react';
import { fetchCSVFromGitHub } from '../utils/csvFetcher';
import { GITHUB_CONFIG } from '../config';
import { Education, Skill } from '../types';

export default function About() {
    const [education, setEducation] = useState<Education[]>([]);
    const [skills, setSkills] = useState<Record<string, string[]>>({});
    const [loadingEdu, setLoadingEdu] = useState(true);
    const [loadingSkills, setLoadingSkills] = useState(true);

    useEffect(() => {
        async function loadEducation() {
            const edu = await fetchCSVFromGitHub<Education>(GITHUB_CONFIG, 'education.csv');
            console.log(edu)
            setEducation(edu);
            setLoadingEdu(false);
        }
        loadEducation();
    }, []);

    useEffect(() => {
        async function loadSkills() {
            const data = await fetchCSVFromGitHub<Skill>(GITHUB_CONFIG, 'skills.csv');
            console.log(data);
            // group skills by category
            const grouped: Record<string, string[]> = {};
            data.forEach(({ category, skill }) => {
                if (!grouped[category]) grouped[category] = [];
                grouped[category].push(skill);
            });

            setSkills(grouped);
            setLoadingSkills(false);
        }
        loadSkills();
    }, []);

    // Map icons for categories
    const skillIcons: Record<string, any> = {
        Languages: Code2,
        Frontend: Globe,
        Backend: Terminal,
        Databases: Database,
        'Tools & Others': Cpu,
    };

    return (
        <div className="space-y-12">
            {/* About Me */}
            <section>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm a passionate Software Engineer with a strong foundation in Computer Science.
                        My journey began as a curious student exploring algorithms and data structures,
                        and has evolved into a career building production-grade applications that solve real-world problems.
                    </p>
                </div>
            </section>

            {/* Education */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
                </div>

                {loadingEdu ? (
                    <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                        Loading education data...
                    </div>
                ) : (
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{edu.institution}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{edu.duration}</p>
                                {edu.description && (
                                    <p className="text-gray-600 dark:text-gray-300 mt-3">{edu.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Skills */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
                {loadingSkills ? (
                    <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                        Loading skills...
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.keys(skills).map((category) => {
                            const Icon = skillIcons[category] || Code2;
                            return (
                                <div
                                    key={category}
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills[category].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                            >
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
}
