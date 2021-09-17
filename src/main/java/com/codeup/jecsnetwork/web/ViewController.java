package com.codeup.jecsnetwork.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

   @RequestMapping({"/", "/about", "/home", "/events", "/blog", "/account" })
    public String showView() {
       return "forward:/index.html";
   }
}
