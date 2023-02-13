// Obligatoriska Props: color, icon, onDismiss

const style = {
  color: {
    primary: "bg-red-200",
    secondary: "bg-blue-200",
    tertiary: "bg-green-200",
  },
  secondaryColor: {
    primaryTwo: "bg-red-400",
    secondaryTwo: "bg-blue-400",
    tertiaryThree: "bg-green-400",
  },
};

export default function Alert(props) {
  const { open, title, text, color, icon, secondaryColor, onDismiss } = props;

  const classColor = style.color[color];
  const classSecondaryColor = style.secondaryColor[secondaryColor];
  if (open)
    return (
      <div className={`flex flex-row justify-between ${classColor}`}>
        <div
          className={`flex items-center max-h-full px-6 text-2xl ${classSecondaryColor}`}
        >
          <span>{icon}</span>
        </div>
        <div className={`flex-row py-4 px-4 w-full`}>
          <div className="text-left w-full text-lg">{title}</div>
          <div className="text-left w-full text-sm">{text}</div>
        </div>
        <a
          className="p-4 cursor-pointer text-xl hover:text-green-800"
          onClick={onDismiss}
        >
          <span>x</span>
        </a>
      </div>
    );
}
