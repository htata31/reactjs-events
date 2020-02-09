import enzyme, {shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../components/App';

enzyme.configure({ adapter: new enzymeAdapterReact16(), });

function getAppShallowWrapper() {
  return shallow(
    <App />
  );
}
describe('The App component', () => {
  test('Taking a snapshot of the app component', () => {
    const appWrapper = getAppShallowWrapper();

    expect(toJson(appWrapper)).toMatchSnapshot();
  });

});
