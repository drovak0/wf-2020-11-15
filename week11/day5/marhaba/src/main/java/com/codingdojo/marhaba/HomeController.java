package com.codingdojo.marhaba;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
  @RequestMapping("/")
  public String index(Model model) {
    model.addAttribute("dojoName", "Riyadh");
    return "index.jsp";
  }
}