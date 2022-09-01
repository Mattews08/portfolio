export interface Skill {
    name: string;
    description: string;
    link: string;
    type: string;
    image: string;
}

export interface SkillProps {
    skills: Skill[];
}
