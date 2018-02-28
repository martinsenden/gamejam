import React, { Component } from 'react';
import SimpleMap from './simplemap.js';
import ScrollableAnchor from 'react-scrollable-anchor';


class Contact extends Component {

  render() {
    return (
        <div className="container-fluid contact">
            <div className="row">
              <div className="col-md-4 address">
                  <div className="center">
                    <p>
                      Softwarepark 23<br/>
                      4232 Hagenberg im Mühlkreis <br/>
                      Austria<br/>
                      pie@fh-hagenberg.at<br/>
                    </p>
                </div>
            </div>
              <div className="col-md-4 inner">
                <ScrollableAnchor id={'contact'}>
                  <h1 className="title">Contact</h1>
                </ScrollableAnchor>
                <div className="map">
                  <SimpleMap/>
                </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Contact;
