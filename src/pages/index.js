import React from 'react';

import Hackathon from '../components/hackathon';
import Layout from '../components/layout';
import Project from '../components/project';
import SEO from '../components/seo';

import '../styles/reset.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Outyard - Hackathon @ Uppsala University" />

    <Hackathon
        date="2020-02-21"
        title="Code with us at the next hackathon"
        start="17:00"
        end="00:00"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA"
        isTeaser="true">
    </Hackathon>

    <Hackathon
        date="2020-01-24"
        title="Make an online multiplayer game with mobile controls"
        start="17:00"
        end="00:00"
        location="Uthgård"
        locationUrl="https://goo.gl/maps/y5K6Nvzf9Sxu8AiFA">

      <Project
          title="Zombie shooter"
          author="Anton Bergåker"
          image=""
          files=""
          github="">
        <p>A zombie shooting game where one player fights hordes of zombies strategically placed by a second player. The first player plays the game using an Xbox controller plugged into a PC, and the second player uses touch controls on a smartphone to place the zombies.</p>
        <p>Made with GameMaker Studio.</p>
      </Project>

      <Project
          title="Shooter"
          author="Carl Enlund"
          image="/images/Shooter.png"
          files=""
          github="https://github.com/outyard/shooter">
        <p>A web-based first-person shooter where the players fight eachother to see who first scores 10 points. The game contains 5 unique maps which are cycled through after each win. Plays sound effects for gunshots and when a player wins.</p>
        <p>Made with NodeJS, Socket.IO and Three.js.</p>
      </Project>

      <Project
          title="Platform jumping game"
          author="Peter Öhlmer"
          image=""
          files=""
          github="">
        <p>In this game you jump on platforms falling down from the sky, trying not to get crushed.</p>
        <p>Made with NodeJS and Socket.IO.js.</p>
      </Project>

      <Project
          title="Sidescroller with delayed input"
          author="Arvid Sandin"
          image=""
          files=""
          github="">
        <p>This is the most frustrating game you will ever play. Every move you make is delayed by half a second, while you stressfully try to navigate through an otherwise simple map. The game is played on desktop using a smartphone as a controller.</p>
        <p>Made with NodeJS and Socket.IO.js.</p>
      </Project>

    </Hackathon>
  </Layout>
);

export default IndexPage;