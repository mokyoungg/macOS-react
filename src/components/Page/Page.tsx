import styles from "./Page.module.scss";
import classNames from "classnames/bind";
import { PropsWithChildren } from "react";
import useSystemStore from "store/useSystemStore";
import BootUpWindow from "components/BootUpWindow/BootUpWindow";

const cx = classNames.bind(styles);

const Page = ({ children }: PropsWithChildren) => {
  const { booting } = useSystemStore();

  return (
    <div className={cx("page")} id="page">
      {children}
      {booting ? <BootUpWindow /> : null}
    </div>
  );
};

export default Page;
