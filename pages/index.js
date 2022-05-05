import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';
import styles from '../styles/Home.module.css';

function Home(props) {
  return (
    <div className={styles.container}>
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
  };
}

export default Home;
