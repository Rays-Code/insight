import { Link, useNavigate } from 'react-router-dom';

const testimonials = [
  {
    quote:
      "Reading on Insight Blog helped me grow my career. The authors here have a gift for breaking down complex topics.",
    name: "Alex Morgan",
    role: "Software Engineer, DevWorks",
  },
  {
    quote:
      "Insight Blog is my go-to resource for industry trends. Clean, thoughtful content every week!",
    name: "Priya Nair",
    role: "Product Manager, WaveTech",
  },
  {
    quote:
      "As a student, I find their beginner-friendly posts incredibly helpful. The writing is clear and approachable.",
    name: "Daniel Wu",
    role: "CS Student, NYU",
  },
];

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white text-gray-900">
        <div className=' text-2xl font-semibold mt-6 ml-7 flex flex-col justify-center'><Link to={"/blogs"}>Insight Blog</Link></div>
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Insight Blog</h1>
        <p className="text-gray-600 max-w-2xl mb-6">
          Discover thoughtful articles, guides, and opinions from writers around the world.
          Whether you're here to learn, explore, or be inspired—you're in the right place.
        </p>
        <a
          className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          onClick={() => {
            navigate("/signin")
          }}
        >
          Browse Articles
        </a>
      </section>

      {/* Testimonials section */}
      <section className="bg-slate-200 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">What our readers say</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <p className="text-lg italic">“{t.quote}”</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
