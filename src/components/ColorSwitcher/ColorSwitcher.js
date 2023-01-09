import { useEffect, useState } from "react";
import "./ColorSwitcher.css";

// Custom hooks
import useLocalStorage from "../../hooks/useLocalStorage";

// Icons
import { IoMdColorPalette } from "react-icons/io";

const ColorSwitcher = ({ showForm }) => {
  const [isColorPicking, setIsColorPicking] = useState(false);
  const [hue, setHue] = useLocalStorage("deckr.tasks.color", "166");

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", hue);
  }, [hue]);

  return (
    <aside className="color-area">
      {isColorPicking && !showForm ? (
        <>
          <button
            className="close-color-picker"
            onClick={() => setIsColorPicking(false)}
          >
            X
          </button>
          <input
            className="range-picker"
            min="0"
            max="360"
            type="range"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <button className="color-btn" onClick={() => setIsColorPicking(true)}>
          <IoMdColorPalette className="color-icon" />
        </button>
      )}
    </aside>
  );
};

export default ColorSwitcher;
