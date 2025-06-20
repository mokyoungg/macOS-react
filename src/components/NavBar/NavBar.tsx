import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import LogoImg from "../../assets/images/applelogo.png";
import useNavBarStore from "store/useNavBarStore";
import { NAV_SECTIONS } from "store/useNavBarStore";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const NavBar = () => {
  const { section, date, time, selectSection, toggleSettings, setDate } =
    useNavBarStore();

  useEffect(() => {
    setDate();
    const interval = setInterval(setDate, 60000);
    return () => clearInterval(interval);
  }, [setDate]);

  return (
    <div className={cx("nav-bar")}>
      {NAV_SECTIONS.map((item) => (
        <div
          className={cx("section", `section--${item}`)}
          id={item}
          key={item}
          onClick={() => selectSection(item)}
        >
          {item === "logo" ? (
            <img className={cx("apple-logo")} src={LogoImg} alt="Apple Logo" />
          ) : (
            item.charAt(0).toUpperCase() + item.slice(1)
          )}
          <div
            className={cx(section === item ? "selected" : "not-selected")}
          ></div>
        </div>
      ))}

      <div className={cx("right")}>
        <div className={cx("setting-set")}></div>
        <h3 className={cx("date")}>{date}</h3>
        <h3>{time}</h3>
      </div>
    </div>
  );
};

export default NavBar;
