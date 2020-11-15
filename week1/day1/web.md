# The Internet

- you don't need to fully understand how this all works, it's just a nice foundation
  - you don't have to know exactly how a computer works to use one
- essentially a large network of computers
- Clients

  - the typical Web user's Internet-connected devices

## Web Basics

- URL (Uniform Resource Locator)
  - Uniform: follows a uniform standard
  - this is a reference to a resource on the web
  - when we enter a URL, the corresponding resource is located
  - 3 parts: HTTP protocol `http://` and resource / host name "facebook.com", top-level domain: `.com` etc.
- IP address
  - four period separated numbers assigned to each computer
  - computers on same network have same external IP address but are differentiated via the router

## Request Response Cycle

- see image
  - Client -> DNS -> Server -> Client

### 1. Request

1. Client makes a request by entering an address into the web browser
2. Domain Name Server (DNS)

- The DNS is like a phone book, instead of matching phone numbers to names, it matches IP addresses to domain names (google, yahoo, etc.)

### 2. Response

- server receives & approves request
- server prepares response (querying a database, executing algorithms / logic)
- response is broken into small packets that get pieced back together
- regardless of what back-end stack the server is using, the response will be HTML, CSS, and JavaScript

## localhost

- web server on your own computer, hence 'local' 'host'
- localhost is unique in that it is assigned to the loopback network interface
  - you are giving access and getting access to the hosted files on your computer
  - your machine is both the client and the server
  - IP address is always 127.0.0.1
