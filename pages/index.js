import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import { Animation } from "../components/animation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Animation dataPath="/data.json" />
      <Animation dataPath="/data2.json" />
    </div>
  );
}
