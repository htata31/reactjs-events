import React, {Component} from 'react';
import './bootstrap.min.css';
import './Homepage.css'


class Homepage extends Component {
    render(){
        return (
          <div id="Contact-info">
          {this.props.contacts.map((contact) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" id='contact-name'>{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted" id='contact-email'>{contact.email}</h6>
                <p className="card-text" id='contact-company-phrase'>{contact.company.catchPhrase} </p>
              </div>
            </div>
          ))}
        </div>
        );
    }
  }
  
  export default Homepage;