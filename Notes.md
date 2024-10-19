## When we create a server why function name is createSocket?

The function name `createSocket` is used because a **socket** represents one endpoint of a two-way communication link between two programs running on a network. In networking, a socket is the mechanism that allows data to be sent and received between client and server machines. 

### Why "createSocket"?
- **Socket Creation**: The term `createSocket` indicates that a new communication socket is being established to handle network communication. This function creates a socket object that is bound to an IP address and port, allowing the server to listen for and respond to incoming client connections.
  
- **Abstraction**: The term "socket" abstracts the complexity of the underlying TCP/UDP protocols and other low-level networking details, simplifying the process of sending and receiving data over a network.

In summary, **`createSocket`** signifies the creation of a communication channel (socket) through which the server can exchange data with clients over the network.

## Types of DNS Records

Here are some of the main types of DNS records:

### 1. **A (Address) Record**:
   - Maps a domain name to an IPv4 address.
   - Example: `example.com` → `192.0.2.1`

### 2. **AAAA (Quad-A) Record**:
   - Maps a domain name to an IPv6 address.
   - Example: `example.com` → `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

### 3. **CNAME (Canonical Name) Record**:
   - Maps an alias domain name to the canonical (true) domain name.
   - Example: `www.example.com` → `example.com`

### 4. **MX (Mail Exchange) Record**:
   - Specifies the mail servers responsible for receiving email on behalf of a domain.
   - Example: `example.com` → `mail.example.com`

### 5. **TXT (Text) Record**:
   - Holds text information, often used for verification (e.g., SPF, DKIM for email security).
   - Example: `example.com` → `v=spf1 include:_spf.example.com ~all`

### 6. **NS (Name Server) Record**:
   - Specifies the authoritative DNS servers for a domain.
   - Example: `example.com` → `ns1.example.com, ns2.example.com`

### 7. **PTR (Pointer) Record**:
   - Maps an IP address to a domain name (used for reverse DNS lookups).
   - Example: `192.0.2.1` → `example.com`

### 8. **SRV (Service) Record**:
   - Specifies the location (hostname and port) of services such as VoIP or instant messaging.
   - Example: `_sip._tcp.example.com` → `10 60 5060 sipserver.example.com`

### 9. **SOA (Start of Authority) Record**:
   - Contains administrative information about a domain, such as the primary name server and email address of the domain admin.
   - Example: Primary NS, admin email, serial number, refresh rate, retry interval, etc.

### 10. **CAA (Certification Authority Authorization) Record**:
   - Specifies which certificate authorities (CAs) are allowed to issue SSL/TLS certificates for a domain.
   - Example: `example.com` → `0 issue "letsencrypt.org"`

### 11. **NAPTR (Naming Authority Pointer) Record**:
   - Used for specifying rules for regular expression-based rewriting of domain names, mainly in services like VoIP.

### 12. **SPF (Sender Policy Framework)**:
   - A type of TXT record that defines which IP addresses are allowed to send emails on behalf of a domain, used to prevent email spoofing.

These DNS records work together to direct various types of traffic and services for a domain, from web traffic to email handling and more.