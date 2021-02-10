<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
	<head>
	<link href="/css/style.css" rel="stylesheet" />
	</head>
	<body>
	<h1>Hello!</h1>
	<h3>Here are all the bookmarks</h3>
	<ul>
	<c:forEach items="${allBookmarks}" var="bookmark">
	<li><c:out value="${bookmark.title }" /></li>
	</c:forEach>
	</ul>
	</body>
</html>