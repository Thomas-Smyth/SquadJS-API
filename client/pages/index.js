import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="SquadJS"
        description={
          "SquadJS is an open source framework, designed for Squad servers, that aims to make communicating with " +
          "Squad servers simple. Unlike other tools, that only collect data through limited means, SquadJS employs a " +
          "more advanced data collection techniques allowing it to expose a greater variety of data points, such as " +
          "kill logs. Shipped with SquadJS are a number of different plugins, built by our community, that do a " +
          "range of different tasks, such as map voting and player statistics. However, SquadJS is designed to be " +
          "easy to build upon allowing you to easily create plugins for tasks you want automated."
        }
      />
    </>
  )
}
