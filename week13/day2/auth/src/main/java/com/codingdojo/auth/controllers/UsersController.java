package com.codingdojo.auth.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.codingdojo.auth.models.User;
import com.codingdojo.auth.services.UserService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UsersController {
  private final UserService userService;

  public UsersController(UserService userService) {
    this.userService = userService;
  }

  @RequestMapping("/registration")
  public String registerForm(@ModelAttribute("user") User user) {
    return "registrationPage.jsp";
  }

  @RequestMapping("/login")
  public String login() {
    return "loginPage.jsp";
  }

  @RequestMapping(value = "/registration", method = RequestMethod.POST)
  public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    // if result has errors, return the registration page (don't worry about
    // validations just now)
    // else, save the user in the database, save the user id in session, and
    // redirect them to the /home route
    return "";
  }

  @RequestMapping(value = "/login", method = RequestMethod.POST)
  public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model,
      HttpSession session) {
    // if the user is authenticated, save their user id in session
    // else, add error messages and return the login page
    return "";
  }

  @RequestMapping("/home")
  public String home(HttpSession session, Model model) {
    // get user from session, save them in the model and return the home page
    return "";
  }

  @RequestMapping("/logout")
  public String logout(HttpSession session) {
    // invalidate session
    // redirect to login page
    return "";
  }
}