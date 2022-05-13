import { getFeaturedEvents } from '../helpers/api-util';
import Head from 'next/head';
import EventList from '../components/events/EventList';
import styles from '../styles/Home.module.css';

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS</title>
        <meta name='description' content='This is a description' />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default Home;
