<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<h1>The Count should be == 0</h1>

<c:out value="${count}" />

<h2>Login</h2>
<form method="POST" action="/login">
  <label>Username: <input type="text" name="username" /></label>
  <label>Password: <input type="password" name="password" /></label>
  <button>Login</button>
</form>


<c:out value="${errorrr}" />

