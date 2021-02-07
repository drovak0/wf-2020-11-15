package com.codingdojo.session;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller

public class HomeController {
  // @RequestMapping("/")
  @GetMapping("/")
  public String index(HttpSession session) {
    session.setAttribute("count", 0);
    Integer count = (Integer) session.getAttribute("count");
    System.out.println("count: " + count);
    // How to pass data to template?

    return "index.jsp";
  }

  // @RequestMapping(value = "/login", method = RequestMethod.POST)
  @PostMapping(value="/login")
  public String login(
    @RequestParam(value = "username") String user,
    @RequestParam(value = "password") String password,
    HttpSession session
  ) {
    // ... process information and save it to the session
    System.out.println("user " + user);
    System.out.println("password " + password);

    // How to pass data to the dashboard
    session.setAttribute("username", user);
    session.setAttribute("password", password);

    return "redirect:/dashboard";
  }

  @GetMapping("/dashboard")
  public String dashboard(HttpSession session) {
    // ... any code to process before rendering
    // session.getAttribute("username");
    // model.addAttribute("username", username);

    // session.getAttribute("password");
    // model.addAttribute("password", password);

    return "dashboard.jsp";
  }

  @RequestMapping("/createError")
  public String flashMessages(RedirectAttributes redirectAttributes) {
    redirectAttributes.addFlashAttribute("errorrr", "A test error!");
    return "redirect:/";
  }
}