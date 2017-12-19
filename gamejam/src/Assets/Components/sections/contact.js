import React, { Component } from 'react';
import SimpleMap from './simplemap.js';

class Contact extends Component {

  render() {
    return (
        <div className="container-fluid contact">
            <div class="row">
              <div class="col-md-6">
              <div class="row">
                <div className="address col-md-12">
                  <div className="center">
                    <p>
                      Softwarepark 23<br/>
                      4232 Hagenberg <br/>
                      Austria<br/>
                      pie@fh-hagenberg.at<br/>
                    </p>
                  </div>
                </div>
                </div>
            </div>
              <div class="col-md-6 inner">
                  <h1>Contact</h1>
                  <SimpleMap/>
              </div>
          </div>
        </div>
    );
  }
}

export default Contact;
