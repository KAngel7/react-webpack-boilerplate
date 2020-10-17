import React from 'react';
import { mount } from 'enzyme';

import App from '..';

describe('<App />', () => {
  const wrap = mount(<App />);

  it('renders', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });
});
