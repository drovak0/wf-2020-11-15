<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %> <%@ taglib
prefix="form" uri="http://www.springframework.org/tags/form"%> <%@ page
isErrorPage="true" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edit Bookmark</title>
  </head>
  <body>
    <h1>Edit this bookmark</h1>
    <form:form action="/bookmarks/${bookmark.id}/edit" method="PUT" modelAttribute="bookmark">
      <p>
          <form:label path="title">Title</form:label>
          <form:errors path="title" />
          <form:input path="title" />
      </p>
      <p>
        <form:label path="description">Description</form:label>
        <form:errors path="description" />
        <form:input path="description" />
    </p>
    <p>
        <form:label path="url">Url</form:label>
        <form:errors path="url" />
        <form:input path="url" />
    </p>
    <p>
        <form:label path="creator">Creator</form:label>
        <form:errors path="creator" />
        <form:input path="creator" />
    </p>
    <input type="submit" value="Edit">
    </form:form>

    <form action="/bookmarks/${bookmark.id}/delete" method="delete">
        <input type="submit" value="Delete" />
      </form>
  </body>
</html>
