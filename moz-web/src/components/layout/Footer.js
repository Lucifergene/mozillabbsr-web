import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo-footer.png';
import firebase from '../Events/firebase';
import '../../assets/css/footer.css'

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      events:[],
      event_name: '',      
    };
  }

  componentDidMount() {
    const eventRef = firebase.database().ref('events').limitToLast(5);
    eventRef.on('value',(snapshot) => {
      let events = snapshot.val();
      let newState = [];
      for( let event in events) {
        newState.push({
          id:event,
          title: events[event].title,          
        });
      }
      this.setState({
        events:newState
      });
    });
  }

  render(){
  return (
    <div>
     <footer class="footer">
  <div class="container">
    <div class="row text-white">
    <div class="col-sm-3">
            <h3 class="text-center font-weight-bold">Mozilla BBSR</h3>
            <br/>
            <div class="text-center">
                    <img src={Logo} class="mx-auto" height='200' alt="mozillalogo"/>
            </div>
    </div>
   

     <br/>
      <div class="col-sm-2">
      <div class="footer-widget">
        <h3 class="text-center font-weight-bold">Site Map</h3>
        <div class="footer-widget-content">
          <div class="media">          
              <div class="media-body">
                    <Link to='/'><p class="text-center">Home</p></Link>
                    <Link to='/about'><p class="text-center">About</p></Link>
                    <Link to='/events'><p class="text-center">Events</p></Link>
                    <Link to='/contact'><p class="text-center">Contact Us</p></Link>
                    <Link to='/login'><p class="text-center">Login</p></Link>        
              </div>
           </div>
        </div>
        </div>
      </div>    
      <div class="col-sm-3 text-center">
      <h3 class="text-center font-weight-bold">Latest Events</h3>
      <div class="footer-widget-content">
          <div class="media">          
              <div class="media-body">
                <br/>
                {this.state.events.map((title) =>{
                return (
                  <p class="text-center">{title.title}</p>
                )
              })}
             </div>
           </div>
        </div>
     </div>  
     <br/> 
     <div class="col-sm-4 text-center">
        <div class="footer-widget">
          <h3 class="font-weight-bold">Stay in touch</h3>
          <div class="footer-widget-content">
          <ul className="list-unstyled">
                            <li> School Of Computer Engineering</li>
                            <li> KIIT University</li>
                            <li> Bhubaneswar, Odisha </li>
                        </ul>
            <a href="mailto:sales@example.com" class="contact-link">mozillabbsr@gmail.com</a>
            <a href="tel:0121234" class="contact-link">+91- 079799 44709</a>
         
            <div class="footer-social">
                <ul>

                <li></li> {/* for Center Aligning in Mobile Mode */}
                <li></li>
              
                <li><a href="https://www.facebook.com/mozillabbsr/"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter mr-3"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin mr-3"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube mr-3"></i></a></li>
                <li><a href="mailto:mozillabbsr@gmail.com?Subject=Hello"><i className="fa fa-envelope mr-3 " ></i></a></li>              
                </ul>
            </div>
            </div>
         
        </div>
      </div>   
      

    </div>
  </div>
</footer>
    </div>
  );
};
}
