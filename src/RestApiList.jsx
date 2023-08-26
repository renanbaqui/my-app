import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



export function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Test
      </Tab>
      <Tab eventKey="profile" title="Profile">
        B
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        C
      </Tab>
    </Tabs>
  );
}

