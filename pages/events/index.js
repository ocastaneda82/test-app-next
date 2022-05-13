import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllEvent } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { Fragment } from 'react';

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All events JS</title>
        <meta name='description' content='This is a description' />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvent();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
