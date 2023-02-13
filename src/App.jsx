import { useState } from "react";
import Button from "./Button.jsx";
import Alert from "./Alert";
import Badge from "./Badge";
import Card from "./Card";
import Modal from "./Modal";
import { AiFillWarning } from "react-icons/ai";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { SiInsomnia } from "react-icons/si";
import { AiOutlineCrown } from "react-icons/ai";
import CookieImg from "../public/Chockladsnittar.jpeg";
import Citronkladdkaka from "../public/citronkladdkaka.jpeg";

function App() {
  const [disabled, setDisabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openAlert, setOpenAlert] = useState(true);
  const [openAlert1, setOpenAlert1] = useState(true);

  return (
    <div className="m-8">
      <h1 className="flex justify-center text-2xl mb-5">Component Library</h1>

      <div className="shadow-xl p-4 border border-slate-300 rounded-xl">
        <h2 className="flex justify-center text-xl mb-2">Alert</h2>
        <Alert
          color="primary"
          secondaryColor="primaryTwo"
          title="Varning"
          icon={<AiFillWarning />}
          text="Vill du verkligen klicka på den länken?"
          open={openAlert}
          onDismiss={() => setOpenAlert(false)}
        />
        <Alert
          color="secondary"
          secondaryColor="secondaryTwo"
          title="Information!"
          icon={<AiOutlineCheckSquare />}
          text="Här är lite text angående informationen"
          open={openAlert1}
          onDismiss={() => setOpenAlert1(false)}
        />
      </div>

      <div className="shadow-xl p-4 border border-slate-300 rounded-xl mt-8">
        <h2 className="flex justify-center text-xl mt-2 mb-2">Badge</h2>
        <div className="flex flex-col items-center gap-4">
          <Badge
            icon={<BsBootstrapFill />}
            title="Bootstrap"
            color="bootstrapPurple"
            size="large"
          />
          <Badge
            icon={<SiInsomnia />}
            title="Insomnia"
            color="secondary"
            size="small"
          />
        </div>
      </div>

      <div className="shadow-xl p-4 border border-slate-300 rounded-xl mt-8">
        <h2 className="flex justify-center text-xl mb-2">Button</h2>
        <div className="flex flex-col items-center gap-4">
          <Button
            title="Click to disable the button below"
            color="primary"
            size="medium"
            onClick={() => {
              setDisabled(!disabled);
            }}
          />

          <Button
            title={disabled ? "disabled" : "click me!"}
            color="secondary"
            size="large"
            onClick={() => {}}
            disabled={disabled}
          />
        </div>
      </div>

      <br />

      <div className="shadow-xl p-4 border border-slate-300 rounded-xl mt-8">
        <h2 className="flex justify-center text-xl mb-2">Modal</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setOpenModal(true)}
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Modal 1
          </button>
          <Modal
            size="large"
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header />
            <Modal.Body />
            <Modal.Footer />
          </Modal>

          <button
            onClick={() => setOpenModal1(true)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Modal 2
          </button>
          <Modal
            size="small"
            show={openModal1}
            onClose={() => setOpenModal1(false)}
          >
            <Modal.Header />
            <Modal.Body />
            <Modal.Footer />
          </Modal>
        </div>
      </div>

      <div className="shadow-xl p-4 border border-slate-300 rounded-xl mt-8">
        <h2 className="flex justify-center text-xl mb-2">Card</h2>
        <div className="flex justify-center gap-4">
          <Card
            header="Chockladsnittar"
            body="Enkla och goda chokladsnittar med lite pärlsocker på toppen. En riktig klassiker på kakafatet och en perfekt munsbit till kaffet eller saften!"
            href="https://www.lyckasmedmat.se/blog/skurna-chokladkakor-n265"
            imgSrc={CookieImg}
            imgAlt="En bild på chokladsnittar"
          />

          <Card
            header="Citronkladdkaka"
            body="Otroligt god citronkladdkaka som dessutom är superenkel att göra! Med ljuvligt god sötsyrlig smak och kladdigt krämig som en kladdkaka ska vara! Ett favorit-recept!"
            href="https://www.recepten.se/recept/citronkladdkaka.html"
            imgSrc={Citronkladdkaka}
            imgAlt="En bild på en citronkladdkaka"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
