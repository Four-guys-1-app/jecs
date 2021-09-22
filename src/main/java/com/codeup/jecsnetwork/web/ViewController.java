package com.codeup.jecsnetwork.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ViewController {

    @Value("${MAPBOX_TOKEN}")
    private String mapboxToken;

   @RequestMapping({"/", "/about", "/events", "/event", "/blog", "/account" })
    public String showView() {
       return "forward:/index.html";
   }

    @RequestMapping(path = "/js/keys.js", produces = "application/javascript")
    @ResponseBody
    public String apikey() {
        // add more export functions and key args as you need them
        return String.format("export default function token() {\n" +
                "    return `%s`;\n" +
                "}", mapboxToken);
    }

}

