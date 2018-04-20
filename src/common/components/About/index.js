import React from 'react';
import { Header, AboutText } from '@components';

const About = () => (
  <React.Fragment>
    <Header>
      <h1>About us</h1>
    </Header>
    <AboutText>
      <p>
        Just some static content with information on how the company has a long tradition and is trustworthy.
      </p>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel viverra ante. Nam porttitor turpis ornare,
        sodales turpis vel, pulvinar ante. Maecenas hendrerit ipsum arcu, congue consectetur dolor posuere eu. Nullam sem justo,
        vulputate sed mauris eget, molestie aliquet eros. Aliquam quis augue nibh.
        Nam eu augue vitae mi accumsan aliquam ac molestie sapien. Integer iaculis metus eu leo aliquam, vel aliquam arcu vehicula.
        Nam ut justo non arcu rutrum hendrerit ac aliquet dolor. Nulla tellus augue, condimentum in elit eu, rutrum tincidunt diam.
        Duis et felis interdum, sollicitudin tellus quis, condimentum magna. Nam luctus risus non urna eleifend,
        non imperdiet justo porttitor. Curabitur consectetur ac eros sit amet maximus. Aliquam eu vestibulum mauris.
      </div>
    </AboutText>
  </React.Fragment>
);

export default About;
