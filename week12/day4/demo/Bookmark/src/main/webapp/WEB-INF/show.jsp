<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %> <%@ taglib
prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Display 1 Bookmark</title>
  </head>
  <body>
    <a href="/bookmarks">Dashboard</a>
    <h1><c:out value="${bookmark.title}" /></h1>
    <p>Title: <c:out value="${bookmark.title}" /></p>
    <p>Description: <c:out value="${bookmark.description}" /></p>
    <p>Url: <c:out value="${bookmark.url}" /></p>
    <p>Creator: <c:out value="${bookmark.creator}" /></p>
    <a href="/bookmarks/${bookmark.id}/edit">Edit</a>
    <form action="/bookmarks/${bookmark.id}/delete" method="delete">
      <input type="submit" value="Delete" />
    </form>
  </body>
</html>
