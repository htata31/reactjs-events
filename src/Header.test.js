import enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import toJson from 'enzyme-to-json';
import Header from './Header'


enzyme.configure({ adapter: new enzymeAdapterReact16(), });
const header_title = 'React Bootstrap Meetup Application';

function getHeaderShallowWrapper() {
    return shallow(
      <Header title = {header_title} />
    );
  }

  describe('The Header component', () => {
    test('Taking a snapshot of the header', () => {
      const headerWrapper = getHeaderShallowWrapper().find('#navbar');
  
      expect(toJson(headerWrapper)).toMatchSnapshot();
    });
  
    test('render meetup logo', () => {
        const meetLogo = getHeaderShallowWrapper().find('#meetup-logo');
    
        expect(meetLogo.exists()).toBe(true);
        expect(meetLogo.children().length).toBe(0);
      });
    
      test('render Call em all logo', () => {
        const callEmAll = getHeaderShallowWrapper().find('#call-em-all-logo');
    
        expect(callEmAll.exists()).toBe(true);
        expect(callEmAll.children().length).toBe(0);
      });

      test("renders an meetup logo image", () => {
        const logo = getHeaderShallowWrapper();

        expect(logo.find("#meetup-logo").prop("src")).toEqual('Images/meetup_logo.png');
      });

      test("renders an call em all logo image", () => {
        const logo = getHeaderShallowWrapper();

        expect(logo.find("#call-em-all-logo").prop("src")).toEqual('Images/Call-Em-All-logo.png');
     });
  
  });