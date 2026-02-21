type CardProps = {
  title: string;
  body: string;
};

export default function Card({ title, body }: CardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition duration-300 mb-4">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{body}</p>
    </div>
  );
}
