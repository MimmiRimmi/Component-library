// Obligatoriska Props: show, onClose, size
// Obligatoriska komponenter: Modal, Modal.Header, Modal.Body, Modal.Footer

export default function Modal(props) {
  const style = {
    size: {
      small: "text-sm p-2",
      medium: "text-lg p-4",
      large: "text-xl p-8",
    },
  };
  const { show, onClose, children, size } = props;
  const classSize = style.size[size];
  const handleOnclose = (e) => {
    if (e.target.id === "background") onClose();
  };
  if (!show) return null;
  return (
    <div
      id="background"
      onClick={handleOnclose}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className={`${classSize} flex border bg-slate-50 border-gray-300 w-fit`}
      >
        <img
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          width="300"
          alt=""
        />
        <div>
          <p
            className="flex text-2xl justify-end items-start cursor-pointer hover:text-blue-700"
            onClick={onClose}
          >
            x
          </p>
          <div className="flex flex-col items-  p-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <p>Detta är modalens Header</p>
    </div>
  );
}
function Body(props) {
  return (
    <div>
      <p>Detta är modalens body</p>
    </div>
  );
}
function Footer(props) {
  return (
    <div>
      <p>Detta är modalens Footer</p>
    </div>
  );
}
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
