import enzyme, {shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import toJson from 'enzyme-to-json';
import HomePage from '../components/Hompage'

enzyme.configure({ adapter: new enzymeAdapterReact16(), });

const contacts_data=[
    {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        }
    }
  ]

function getHomePageShallowWrapper() {
    return shallow(
      <HomePage contacts={contacts_data} />
    );
  }

  describe('The HomePage component', () => {
    test('Taking a snapshot of the homepage', () => {
      const homePageWrapper = getHomePageShallowWrapper();
  
      expect(toJson(homePageWrapper.find('#Contact-info'))).toMatchSnapshot();
    });
  
    
    test('renders the contact name', () => {
      const homePageWrapper = getHomePageShallowWrapper();
      const contactName = homePageWrapper.find('#contact-name');

      expect(contactName.text()).toEqual("Leanne Graham");
    });

    test('renders the contact email', () => {
      const homePageWrapper = getHomePageShallowWrapper();
      const contactEmail = homePageWrapper.find('#contact-email');

      expect(contactEmail.text()).toEqual("Sincere@april.biz");
    });

    test('renders the contact company phrase', () => {
      const homePageWrapper = getHomePageShallowWrapper();
      const contactCompanyPhrase = homePageWrapper.find('#contact-company-phrase');

      expect(contactCompanyPhrase.text()).toEqual("Multi-layered client-server neural-net ");
    });
  });