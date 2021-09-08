package com.codeup.capstonestarter.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class ViewController {

   @RequestMapping({"/", "/about", "/home", "/events", "/blog", "/account" })
    public String showView() {
       return "forward:/index.html";
   }
}
