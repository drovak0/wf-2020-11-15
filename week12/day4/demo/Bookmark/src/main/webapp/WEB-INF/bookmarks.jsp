<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %> <%@ taglib
prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bookmarks</title>
  </head>
  <body>
      <table>
          <thead>
              <th id="title">Title</th>
              <th id="desc">Description</th>
              <th id="url">Url</th>
              <th id="creator">Creator</th>
              <th id="actions">Actions</th>
            </thead>
            <c:forEach items="${allBookmarks}" var="bookmark">
                <tr>
                    <td><a href="/bookmarks/${bookmark.id}">
                        <c:out value="${bookmark.title}" />
                    </a></td>
                    <td><c:out value="${bookmark.description}" /></td>
                    <td><c:out value="${bookmark.url}" /></td>
                    <td><c:out value="${bookmark.creator}" /></td>
                    <td><form:form action="/bookmarks/${bookmark.id}/delete" method="DELETE">
                        <button>Delete</button>
                      </form:form></td>
                </tr>
            </c:forEach>
      </table>

    <form:form action="/bookmarks" method="POST" modelAttribute="bookmark">
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
    <input type="submit" value="Submit">
    </form:form>
  </body>
</html>
