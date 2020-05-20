import React,{Component} from 'react';
import Header from '../sub_page_header';
import { Link } from 'react-router-dom';
import {resetPassword} from '../../repository'
import  {withTranslation}  from 'react-i18next'



class ResetPassword extends Component{

  constructor() {
    super();
    this.state = {
              
                  loading: false,
                  password: "",
                  token:'',
                  message:'',
                  confirmPassword:"",
                  styleClass:'',
                  iconClass:'',
                  loginLink:'',
                  errorPassword:false
                }
    
}
   
async componentDidMount (){
   let token = this.props.match.params.token

  // let token = this.props.location.search
  this.setState({token})
  console.log(token)

}

 
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }

    handleConfirmPassword = (e)=>{
      const  confirm = e.target.value
      const password = this.state.password
      if( confirm === password){
       this.setState({
        
            confirmPassword:'fa fa-check alert-success',
            errorPassword:false

       })
      }
    else{
      this.setState({
                 confirmPassword:'fa fa-times-circle alert-danger',
                  errorPassword:true
        
      })
     }
      
       
    }

   
   handleSubmit = (e) => {
    e.preventDefault();
     let errorconfirm = this.state.errorPassword
    if (!errorconfirm){
    
    resetPassword(this.state)
    .then(token =>{
        this.setState({
          message:'password reset successfully',
          styleClass:'success-msg',
          iconClass:'fa fa-check fa-2x',
          loginLink:'Login',
          loading: true
          })
          setTimeout(() => {
            this.setState({ loading: false });
          }, 2000)
        }
    )
    .catch(err => 
          {
            this.setState({loading:true})
            setTimeout(() => {
              this.setState({ loading: false });
            }, 2000)
            alert(err.message)
          }
            )
    }
    else{
      this.setState({
        
           message:'Pasword Not Matching',
           styleClass:'error-msg',
           iconClass:'fa fa-times-circle'
          
        })
  
    }
  

     

   }
   
  
 
   render(){
    const {t} = this.props 
    const loading  = this.state.loading;

  
    return(

        <div id="wrapper" className="clearfix">

              <div className="main-content">
              
              <Header name={t('Login/Register')}/>

                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2">
                      
                        <div className="tab-content">
                          <div className="tab-pane fade in active p-15" id="login-tab">
                            <h4 className="text-gray mt-0 pt-5"> {t('Reset Password')} </h4>

                            <div className = {this.state.styleClass}>
                              
                                    <i className = {this.state.iconClass} style = {{margin:'5px'}}/>
                                    {t(this.state.message)}
                                    
                                    </div>

                            <form  
                                    id = 'reset-form'
                                    // data-toggle="validator"
                                    role="form" name="login-form" 
                                    className="clearfix" 
                                    onSubmit ={this.handleSubmit}>

                               <div className="row">
                                <div className="form-group col-md-6">
                                <label for="form_choose_password"> {t('password')}</label>
                                
                               
                                <input
                                      id="inputPassword" 
                                      name="password" 
                                      className="form-control" 
                                      type="password"
                                      data-minlength="8"
                                      minlength="8"
                                      data-error={t('Minimum of 8 characters')}
                                      required
                                      onChange = {this.handleChange}
                                      
                                      /> 

                                <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-6  has-feedback" >
                                  <label>{t('Re-enter Password')}</label>
                                  <i className = {this.state.confirmPassword}></i>


                                  <input 
                                        id="confirmPassword" 
                                        name="re_enter_password"  
                                        className="form-control"  
                                        type="password" 
                                        minlength="8"                                     
                                        data-match="#inputPassword" 
                                        data-match-error={t('Not Matching')} 
                                        placeholder={t("Confirm")}
                                         required
                                         onChange = {this.handleConfirmPassword}
                                   />
                                
                                        

                                        <div class="help-block with-errors"></div>       
                                        </div>
                                        </div>

                              <div className="clear pull-right text-center pt-10">
                              </div>
                              <div className="form-group mt-10">
                                <button type="submit" 
                                
                                className="btn btn-block text-white btn-theme-green btn-lg">
                                      {loading && (
                                          <i
                                            className="fa fa-spinner fa-spin"
                                            style={{ margin: "5px" }}
                                          />
                                        )}
                              
                                  {t('Reset Password')}
                                  </button>
                              </div>
                            
                            </form>
                          </div>
                          <div className="tab-pane fade in p-15" id="register-tab">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              </div>
              
              


                  
                    
                    

    )
   }
}

export default withTranslation()(ResetPassword);