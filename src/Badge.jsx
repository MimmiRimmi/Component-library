// Obligatoriska: color, size, icon
const style = {
  color: {
    primary: "bg-green-200",
    secondary: "bg-purple-500",
    bootstrapPurple: "bg-bootstrap-purple",
  },
  size: {
    small: "text-sm py-2 px-4",
    medium: "text-lg py-4 px-6",
    large: "text-xl py-6 px-8",
  },
};

export default function Badge(props) {
  const { title, color, icon, size } = props;

  const classColor = style.color[color];
  const classSize = style.size[size];

  return (
    <div
      className={`flex gap-2 my-4 items-center rounded-2xl text-white w-fit ${classColor} ${classSize}`}
    >
      <div className="text-2xl">{icon}</div>
      <h1>{title}</h1>
    </div>
  );
}
