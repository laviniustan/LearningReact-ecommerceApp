import React from 'react';
import HomePage from './pages/homepage/homepage.comopnent';
import { Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/headre.component'
import './App.css';
import SignInUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component';




class App extends React.Component {
  
  // constructor(){
  //   super();

  //   this.state={
  //       currentUser:null
  //   }
  // }

  unsubscibeFromAuth=null

  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef= await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot=>{
            // this.setState({
            //   currentUser:{
             setCurrentUser({
                id:snapshot.id,
                ...snapshot.data()
              })
          })
        }
        else{
          // setCurrentUser({currentUser: userAuth})
          setCurrentUser(userAuth)
        }
    } ) 
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth()
  }

 
 
 
  render(){

    //  const {currentUser}= this.props;
  return (
    <div className="App">
    {/* <Header currentUser={currentUser}> */}
    <Header/>
    <Switch>
        <Route exact path='/' component ={HomePage}/>
        <Route path='/shop' component ={ShopPage}/>
        <Route exact path='/checkout' component ={CheckoutPage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/> ):(<SignInUp/>)}/>
    </Switch>
        
    </div>
  );
 }
}
// if is log-in to stay log-in
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
})

// update our app comp so that it's  able to update the reuder value with the new SET_CURRENT_USER => user.acrions
export default connect(mapStateToProps, mapDispatchToProps)(App);
