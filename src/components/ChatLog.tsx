import styles from '../styles/components/ChatLog.module.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ChatLog = (props: {userPosition: string;}) => {
  return (
    <div className={cx([`${props.userPosition}`].join(" "))}>
      <div className={styles.profile}></div>
      <div className={styles.textBox}>
        <div className={styles.tail}></div>
        <div className={styles.body}>안녕하세요</div>
      </div>
    </div>
  );
}

export default ChatLog;