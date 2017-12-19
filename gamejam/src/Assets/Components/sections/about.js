import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="container-fluid about">
          <div className="row middle">
          <div className="col-md-7 opaque"></div>
            <div className="col-md-5 shown">
              <h1>About section</h1>
              <p>
              <br/>
              Game jams have become incredibly popular in the last few years. These events require participants to create a working computer game within a very limited time period, usually just 48 hours. The topic is announced at the beginning of the event, and teams then start brainstorming and begin implementing their games as quickly as possible in order to finish in time. At the end of the event, the games are often demonstrated in a public context or the participants catch some much needed sleep.
              <br/>
              <br/>
              In 2011, a first attempt was made to bring this kind of event to Hagenberg. In order to be compatible with the students’ schedule, the rules were slightly changed. The time was limited to 36 hours to better fit a weekend schedule. To facilitate this, the topic is announced the evening before and teams are set up beforehand. The weekend before Christmas holidays was chosen to run the event, which is held in the university’s computer labs. Once finished, the games are put on a website where they are publicly available for download. Winners are determined through a voting process (jury and people’s choice) and an award ceremony is held in January. After the success of the 2011 Game Jam, subsequent events have been held each year.
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
