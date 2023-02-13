// Obligatoriska Props: href, imgAlt, imgSrc
export default function Card(props) {
  const { href, imgAlt, imgSrc, header, body } = props;
  return (
    <div className="border border-violet-700 my-4 p-6 rounded-xl w-fit">
      <a href={href} target="_blank">
        <img className="w-[400px]" src={imgSrc} alt={imgAlt} />
        <h1 className="text-2xl my-2">{header}</h1>
        <p className="w-[400px]">{body}</p>
      </a>
    </div>
  );
}
