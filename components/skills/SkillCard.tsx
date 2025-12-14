export default function SkillCard({ skill }: { skill: any }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition skCard">
            <h2 className="text-xl font-semibold">{skill.title}</h2>
            <p className="text-gray-600 mt-2">{skill.description}</p>

            <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition">
                View Details
            </button>
        </div>
    );
}