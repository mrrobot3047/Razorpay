import Stack from 'react-bootstrap/Stack';
import './headlayout.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from '../Images/Icon (3).png';
import logo2 from '../Images/Icon (1).png';
import telev from '../Images/Icon (4).png'
import logo3 from '../Images/Icon (2).png'
import logo4 from '../Images/Icon.png'
import Card from 'react-bootstrap/Card';
import blue from '../Images/blue1.png'
import blue1 from '../Images/blue2.png'
import { useState } from 'react';
import razorpay from '../Images/razorpay.png'
import Button from 'react-bootstrap/Button';



function HorizontalMarginStartExample() {
    const [selectedDiv, setSelectedDiv] = useState(null);

    const handleDivClick = (index) => {
      setSelectedDiv(index === selectedDiv ? null : index);
    };
    const divStyles = (index) => ({
        backgroundColor: index === selectedDiv ? 'lightgreen' : '#E7E7E7',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        borderWidth:'5px',
        borderColor: 'lightgreen',
      });
      const checkBoxStyles = {
        borderRadius: '200%',
        backgroundColor: 'lightgreen',
        borderColor: 'lightgreen',
      };
    
      const contentArray = [
        { content: '12 months subscription', amount: '₹179' },
        { content: '6 months subscription', amount: '₹149' },
        { content: '3 months subscription', amount: '₹99' },
      ];
  
  return (
    <Stack direction="horizontal" style={{padding:'30px',}}>
        <Row>
            <Col xs={12} md={6}  style={{paddingLeft: '10px' }}>
            <div>
        <h1 className='h1'>Access curated courses worth</h1>
        <p className='paragraph1'>
        <span style={{ color: 'white' }}>₹</span>
      <span style={{ textDecoration: 'line-through', color: 'red' }}>
       
        <span style={{ color: 'white' }}>18500</span>
      </span>
      <span style={{ color: 'white' }}> at just </span>
      <span style={{ color: '#0096FF' }}>₹99</span>
      <span style={{ color: 'white' }}> per year</span>
    </p>
    <Container>
        
    </Container>
    <Row xs={6}  className="mb-5">
        <Col><img src={logo1} alt="" style={{width:"40px",height:'40px'}}/></Col>
        <Col xs={8}>
        <span style={{ color: '#0096FF', fontSize: '30px' }}>100+</span>
  <span style={{ color: 'white', fontSize: '30px' }}> Job relevant courses</span>
        </Col>
      </Row>
      <Row xs={6} className="mb-5">
        <Col><img src={logo2} alt="" style={{width:"40px",height:'40px'}}/></Col>
        <Col xs={8}>
        <span style={{ color: '#0096FF', fontSize: '30px' }}>20,000+</span>
  <span style={{ color: 'white', fontSize: '30px' }}>Hours of Content</span>
        </Col>
      </Row>
      <Row xs={6} className="mb-5">
        <Col><img src={telev} alt="" style={{width:"40px",height:'40px'}}/></Col>
        <Col xs={8}>
        <span style={{ color: '#0096FF', fontSize: '30px' }}>Exclusive</span>
  <span style={{ color: 'white', fontSize: '30px' }}>webinar access</span>
        </Col>
      </Row>
      <Row xs={6} className="mb-5">
        <Col><img src={logo3} alt="" style={{width:"40px",height:'40px'}}/></Col>
        <Col xs={8}>
      
  <span style={{ color: 'white', fontSize: '30px' }}>Scholarship worth</span>
  <span style={{ color: '#0096FF', fontSize: '30px' }}> ₹94500</span>
        </Col>
      </Row>
      <Row xs={6} className="mb-5">
        <Col><img src={logo4} alt="" style={{width:"40px",height:'40px'}}/></Col>
        <Col xs={9}>
        <span style={{ color: '#0096FF', fontSize: '30px' }}>Ad Free</span>
  <span style={{ color: 'white', fontSize: '30px' }}>learning experience</span>
        </Col>
      </Row>


      </div>

            </Col>
            <Col xs={12} md={6}   style={{paddingLeft: '50px' }}>
      <div style={{ marginTop: '30px' }}>
        <Card style={{ width: '100%', height: '39rem' }}>
          <Card.Body>
          <Stack gap={3}>
      <div>
      <Row>
            <Col xs={6}>
            <Row>
            <Col xs={12}>
                <img src={blue1} alt="blue1" style={{ height: '20px', width: '20px' }} />
            </Col>
            <Col xs={12}>
                <span>Sign up</span>
            </Col>
            </Row>
        </Col>
        <Col xs={6}>
            <Row>
            <Col xs={12}>
                <img src={blue} alt="blue2" style={{ height: '20px', width: '20px' }} />
            </Col>
            <Col xs={12}>
                <span>Subscribe</span>
            </Col>
            </Row>
        </Col>







      </Row>
      </div>
      <div>
      <Container>
  <Row>
    <Col>
      <h1 style={{fontSize:'35px'}}>Select your subscription plan</h1>
    </Col>
  </Row>
  {contentArray.map((item, index) => (
        <Row key={index}>
          <Col>
            <div style={divStyles(index)} onClick={() => handleDivClick(index)}>
              <div>
                <input type="checkbox" checked={index === selectedDiv} style={checkBoxStyles} />
                <p style={{ margin: '0 10px' }}>{item.content}</p>
              </div>
              <div>
                <p style={{ margin: 0 }}>{item.amount}</p>
              </div>
            </div>
          </Col>
        </Row>
      ))}
</Container>

      </div>
      <div>
      <Row style={{paddingBottom:'5px'}}>
        <Col>Subscription fee</Col>
        <Col>-₹ 18400</Col>
      </Row>
      <div style={{ background: 'linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5))', display: 'flex', alignItems: 'center',borderRadius:'5px' }}>
  <p style={{ marginLeft: '10px', color: '#DE4313' }}>Limited time offer </p>
  <span style={{ marginLeft: 'auto', marginRight: '10px', color: 'black' }}>-₹ 18400</span>
</div>
<Row style={{paddingTop:'10px'}}>
        <Col> <Button style={{background: 'linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5))',padding:'10px 30px'}}>cancel</Button>
        <img src={razorpay} style={{padding:"10px"}} alt=""/></Col>
        <Col> <Button style={{background:'#47BA68',padding:'10px 10px'}}>Proceed to Pay</Button></Col>
      </Row>
      </div>
    </Stack>

          </Card.Body>
        </Card>
      </div>
    </Col>

        </Row>
     
    </Stack>
  );
}

export default HorizontalMarginStartExample;