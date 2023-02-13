// Obligatoriska Props: size, color, disabled

const style = {
  color: {
    primary: "bg-purple-300 hover:bg-purple-400",
    secondary: "bg-orange-300 hover:bg-orange-400",
  },
  disabled: "bg-gray-300",
  size: {
    small: "text-xs p-2",
    medium: "text-base p-4",
    large: "text-lg p-6",
  },
};

export default function Button(props) {
  const { title, color, size, disabled } = props;

  const classColor = style.color[color];
  const disabledColor = style.disabled;
  const classSize = style.size[size];

  return (
    <button
      disabled={disabled}
      onClick={() => props.onClick()}
      className={`mr-4 my-4 rounded-lg border border-gray-500 ${
        disabled ? disabledColor : classColor
      } ${classSize} ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {title}
    </button>
  );
}
