import React, { Component } from 'react';
import SimpleMap from './simplemap.js';

class Contact extends Component {

  render() {
    return (
        <div className="container-fluid contact">
            <div className="row">
              <div className="col-md-6">
                <div className="address col-md-12">
                  <div className="center">
                    <p>
                      Softwarepark 23<br/>
                      4232 Hagenberg im Mühlkreis <br/>
                      Austria<br/>
                      pie@fh-hagenberg.at<br/>
                    </p>
                </div>
                </div>
            </div>
              <div className="col-md-4 inner">
                  <h1 className="title">Contact</h1>
                  <SimpleMap/>
              </div>
          </div>
        </div>
    );
  }
}

export default Contact;
