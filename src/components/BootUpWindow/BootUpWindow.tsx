import styles from "./BootUpWindow.module.scss";
import classNames from "classnames/bind";
import LogoImg from "../../assets/images/applelogo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BootSound from "../../assets/audio/bootsound.mp3";

const cx = classNames.bind(styles);

const animations = {
  initial: { width: "0px" },
  animate: { width: "150px" },
};

const BootUpWindow = () => {
  const [isBootupComplete, setBootupComplete] = useState(false);
  const [soundPlay, setSoundPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBootupComplete(true);
      playSound();
    }, 3350);
  }, []);

  let audio = new Audio(BootSound);
  audio.volume = 0.4;

  const playSound = () => {
    if (!soundPlay) {
      setSoundPlay(true);
    }

    setTimeout(() => {
      if (document.getElementById("boot") === null) {
        return;
      } else {
        audio.play();
      }
    }, 2200);
  };

  return (
    <div
      id="boot"
      className={cx("boot", {
        "bootup-window": !isBootupComplete,
        "bootup-vanished": isBootupComplete,
      })}
    >
      <img className={cx("logo")} src={LogoImg} alt="logo" />

      <div className={cx("bar-container")}>
        <div className={cx("bar-background")} />

        <motion.div
          className={cx("bar")}
          variants={animations}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 2.1, delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export default BootUpWindow;
