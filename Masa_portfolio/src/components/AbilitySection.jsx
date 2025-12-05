

const skills = [
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 90, category: "frontend"},
    {name: "TypeScript", level: 85, category: "frontend"},
    {name: "Tailwind CSS", level: 90, category: "frontend"},
    {name: "Next.js", level: 80, category: "frontend"},
    
    {name: "Node.js", level: 80, category: "Backend"},
    {name: "Express", level: 75, category: "Backend"},
    {name: "MongoDB", level: 70, category: "Backend"},
    {name: "PstgreSQL", level: 65, category: "Backend"},
    {name: "GraphQL", level: 60, category: "Backend"},
    
    {name: "Git/Github", level: 90, category: "Tools"},
    {name: "Docker", level: 70, category: "Tools"},
    {name: "Postman", level: 85, category: "Tools"},
    

]

export const AbilitySection = () => {
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30"></section>
}