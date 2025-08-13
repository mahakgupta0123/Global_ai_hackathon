import "./tape.css";

export default function Tape({ textList, rotation, textDirection, moveDirection }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${moveDirection}`}>
      <div className={`bg-gray-700 py-2 shadow-lg whitespace-nowrap w-[140%] border-20 border-gray-700 ${rotation}`}>
        <div className={`inline-flex ${textDirection === "left" ? "scroll-left" : "scroll-right"}`}>
          {[...textList, ...textList].map((item, index) => (
            <span
              key={index}
              className="text-yellow-100 font-extrabold text-xl mx-6"
            >
              ✨ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
