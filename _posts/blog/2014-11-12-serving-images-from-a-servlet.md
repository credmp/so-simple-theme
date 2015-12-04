---
layout: post
title: Serving images from a servlet
date: 2014-11-12
categories:
- Code
- Java
tags: []
status: publish
type: post
published: true
author:
  login: arjen
  email: arjen@wiersma.org
  display_name: Arjen Wiersma
  first_name: Arjen
  last_name: Wiersma
---

In a web application I needed to serve images from a directory outside of the web application. I wanted to keep the application as unaware of the environment as possible, so I ended up defining a system property in Wildfly’s administration console and creating a servlet that listens to all requests on /avatar/. Anything passed as second atom on the path will be used as the filename. The final version will have to deal with relative paths outside of the allowed area as well. By stripping out any .., in both normal and escaped versions, this should be accomplished.

For now please enjoy my solution to this problem, composed from many resources on the internet.

{% highlight java %}
@WebServlet("/avatar/*")
public class AvatarServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String filename = request.getPathInfo().substring(1);
        // TODO: deal with .. etc
        if ("".equals(filename)) {
            filename = "nofilename";
        }
        File file = new File("/path/to/", filename);
 
        if (!file.exists()) {
            try {
                URL url = getClass().getClassLoader().getResource("/avatar2.png");
                if (url != null)
                    file = new File(url.toURI());
            } catch (URISyntaxException e) {
                e.printStackTrace();
            }
        }
        response.setHeader("Content-Type", getServletContext().getMimeType(filename));
        response.setHeader("Content-Length", String.valueOf(file.length()));
        response.setHeader("Content-Disposition", "inline; filename=\"" + filename + "\"");
        Files.copy(file.toPath(), response.getOutputStream());
    }
}
{% endhighlight %}
