﻿//System Imports
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Web;
using System.Web.Http;

//Custom Improts
using Event_Attendees_Tracker_API.Models;
using Event_Attendees_Tracker_BAL.Authentication;

namespace Event_Attendees_Tracker_API.Controllers
{
    public class LoginController : ApiController
    {    
        
        public IHttpActionResult Post(LoginModel userLogin)
        {
            var responseData = UserLogin.LoginUserWithEmailAndPassword(userLogin.Email, userLogin.Password);
            
            if(responseData==null)
            {
                return Content(HttpStatusCode.BadRequest, new {Error="Either Email or Password is Invalid" });
            }
            Debug.Print(responseData.UserID.ToString());
            return Content(HttpStatusCode.OK, responseData);
        }
    }
}