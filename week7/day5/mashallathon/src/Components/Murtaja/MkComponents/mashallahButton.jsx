import useSound from 'use-sound';
import style from "../MurtajaCard.module.css";
import boopSfx from '../gun-gunshot-01.mp3';

const BoopButton = () => {
  const [play] = useSound(boopSfx);

    return (
        <div className={style.btn}>
            <h4>Let's Kill Some Zombies</h4>
            <button onClick={play}>Shot!</button>
        </div>
    );
};

export default BoopButton;